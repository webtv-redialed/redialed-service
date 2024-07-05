/**
 * Pure-JS implementation of WebTV's LZPF compression
 *
 * This compression algorithm is based on LZP by Charles Bloom and was originally written for server to client communication by Andy McFadden
 * This uses a (static) Huffman dictionary that was tuned for character occurances in a typical HTML page at the time (around 1996-1997).
 *
 * Andy McFadden:
 *  https://fadden.com/
 * LZP:
 *  https://cbloom.com/src/index_lz.html
 *  https://en.wikibooks.org/wiki/Data_Compression/Dictionary_compression#LZP
 *
 * I wouldn't recommend using LZPF on anything but HTML and other text-based data (unless the data has many repeating bytes)
 * LZPF can be replaced with gzip for LC2 and newer boxes.  Classic is stuck with LZPF.
 *
 * Reverse engineered and ported by: Eric MacDonald (eMac)
 * Modified By: zefie
 **/

class WTVLzpf {
    // Note: currentlty doesn't offer optimal streaming support but this is good enough to meet perf demands at the scale we're at.

    current_bit_length = 0;
    current_bits = 0;
    ring_bufer_index = 0xffff;
    working_data = 0;
    match_index = 0;
    compression_mode = 0;
    checksum = 0;
    filler_byte = 0x20;
    hash_table = new Uint16Array(0x1000);
    ring_buffer = new Uint8Array(0x2000);
    encoded_data = [];

    /**
     * This is used to encode (one-byte) literals with no previous tracked occurence.
     *
     * - Bytes with best compression: SPACE and LF and e"/<>Tainoprst
     * - Bytes with good compression: TAB and ,-.1=ABCDEFGHILNOPRSbcdfghlmuw
     * - Bytes that don't change the length of the bit stream: 024:MW_kvy
     * - The rest will increase the length of bit stream
     *
     * I don't know what process they used to build this table. I assume they
     * frequency-scanned a bunch of HTML files they had.
     *
     * Using Windows-1252 (based off of ISO-8859-1) chracter encoding to fill in this table. Didn't
     * seem like they used a different table for Japan builds (ISO-2022-JP).
     **/
    nomatchEncode = [
        /* [FLATTENED HUFFMAN CODE, CODE BIT LENGTH] */
        [0x0000, 0x10] /* NUL */,
        [0x0001, 0x10] /* SOH */,
        [0x0002, 0x10] /* STX */,
        [0x0003, 0x10] /* ETX */,
        [0x0004, 0x10] /* EOT */,
        [0x009a, 0x0f] /* ENQ */,
        [0x0005, 0x10] /* ACK */,
        [0x009c, 0x0f] /* BEL */,
        [0x009e, 0x0f] /* BS  */,
        [0x3400, 0x06] /* TAB */,
        [0x7000, 0x05] /* LF  */,
        [0x00a0, 0x0f] /* VT  */,
        [0x0006, 0x10] /* FF  */,
        [0x0380, 0x09] /* CR  */,
        [0x0007, 0x10] /* SO  */,
        [0x0008, 0x10] /* SI  */,
        [0x0009, 0x10] /* DLE */,
        [0x000a, 0x10] /* DC1 */,
        [0x000b, 0x10] /* DC2 */,
        [0x000c, 0x10] /* DC3 */,
        [0x000d, 0x10] /* DC4 */,
        [0x000e, 0x10] /* NAK */,
        [0x000f, 0x10] /* SYN */,
        [0x00a2, 0x0f] /* BTB */,
        [0x0010, 0x10] /* CAN */,
        [0x0011, 0x10] /* EM  */,
        [0x0012, 0x10] /* SUB */,
        [0x0013, 0x10] /* ESC */,
        [0x0014, 0x10] /* FS  */,
        [0x0015, 0x10] /* GS  */,
        [0x0016, 0x10] /* RS  */,
        [0x0017, 0x10] /* US  */,
        [0xe000, 0x04] /* SPACE */,
        [0x0200, 0x0a] /* !   */,
        [0x7800, 0x05] /* "   */,
        [0x0400, 0x09] /* #   */,
        [0x00b0, 0x0e] /* $   */,
        [0x0018, 0x10] /* %   */,
        [0x0120, 0x0b] /* &   */,
        [0x0480, 0x09] /* '   */,
        [0x0140, 0x0b] /* (   */,
        [0x0160, 0x0b] /* )   */,
        [0x0240, 0x0a] /* *   */,
        [0x00b8, 0x0d] /* +   */,
        [0x1400, 0x07] /* ,   */,
        [0x1600, 0x07] /* -   */,
        [0x3800, 0x06] /* .   */,
        [0x8000, 0x05] /* /   */,
        [0x0a00, 0x08] /* 0   */,
        [0x1800, 0x07] /* 1   */,
        [0x0b00, 0x08] /* 2   */,
        [0x0500, 0x09] /* 3   */,
        [0x0c00, 0x08] /* 4   */,
        [0x0580, 0x09] /* 5   */,
        [0x0600, 0x09] /* 6   */,
        [0x0680, 0x09] /* 7   */,
        [0x0700, 0x09] /* 8   */,
        [0x0780, 0x09] /* 9   */,
        [0x0d00, 0x08] /* :   */,
        [0x0180, 0x0b] /* ;   */,
        [0x8800, 0x05] /* <   */,
        [0x3c00, 0x06] /* =   */,
        [0x9000, 0x05] /* >   */,
        [0x0280, 0x0a] /* ?   */,
        [0x00b4, 0x0e] /* @   */,
        [0x4000, 0x06] /* A   */,
        [0x1a00, 0x07] /* B   */,
        [0x1c00, 0x07] /* C   */,
        [0x1e00, 0x07] /* D   */,
        [0x4400, 0x06] /* E   */,
        [0x2000, 0x07] /* F   */,
        [0x2200, 0x07] /* G   */,
        [0x2400, 0x07] /* H   */,
        [0x4800, 0x06] /* I   */,
        [0x01a0, 0x0b] /* J   */,
        [0x02c0, 0x0a] /* K   */,
        [0x2600, 0x07] /* L   */,
        [0x0e00, 0x08] /* M   */,
        [0x4c00, 0x06] /* N   */,
        [0x5000, 0x06] /* O   */,
        [0x2800, 0x07] /* P   */,
        [0x00c0, 0x0c] /* Q   */,
        [0x5400, 0x06] /* R   */,
        [0x2a00, 0x07] /* S   */,
        [0x9800, 0x05] /* T   */,
        [0x0800, 0x09] /* U   */,
        [0x0880, 0x09] /* V   */,
        [0x0f00, 0x08] /* W   */,
        [0x00d0, 0x0c] /* X   */,
        [0x0300, 0x0a] /* Y   */,
        [0x0900, 0x09] /* Z   */,
        [0x0019, 0x10] /* [   */,
        [0x001a, 0x10] /* \   */,
        [0x001b, 0x10] /* ]   */,
        [0x001c, 0x10] /* ^   */,
        [0x1000, 0x08] /* _   */,
        [0x001d, 0x10] /* `   */,
        [0xa000, 0x05] /* a   */,
        [0x2c00, 0x07] /* b   */,
        [0x5800, 0x06] /* c   */,
        [0x5c00, 0x06] /* d   */,
        [0xf000, 0x04] /* e   */,
        [0x2e00, 0x07] /* f   */,
        [0x3000, 0x07] /* g   */,
        [0x6000, 0x06] /* h   */,
        [0xa800, 0x05] /* i   */,
        [0x01c0, 0x0b] /* j   */,
        [0x1100, 0x08] /* k   */,
        [0x6400, 0x06] /* l   */,
        [0x6800, 0x06] /* m   */,
        [0xb000, 0x05] /* n   */,
        [0xb800, 0x05] /* o   */,
        [0xc000, 0x05] /* p   */,
        [0x01e0, 0x0b] /* q   */,
        [0xc800, 0x05] /* r   */,
        [0xd000, 0x05] /* s   */,
        [0xd800, 0x05] /* t   */,
        [0x3200, 0x07] /* u   */,
        [0x1200, 0x08] /* v   */,
        [0x6c00, 0x06] /* w   */,
        [0x0980, 0x09] /* x   */,
        [0x1300, 0x08] /* y   */,
        [0x0340, 0x0a] /* z   */,
        [0x00e0, 0x0c] /* {   */,
        [0x00f0, 0x0c] /* |   */,
        [0x0100, 0x0c] /* }   */,
        [0x0110, 0x0c] /* ~   */,
        [0x001e, 0x10] /* DEL */,
        [0x001f, 0x10] /* �   */,
        [0x0020, 0x10] /*     */,
        [0x0021, 0x10] /* �   */,
        [0x0022, 0x10] /* �   */,
        [0x0023, 0x10] /* �   */,
        [0x0024, 0x10] /* �   */,
        [0x0025, 0x10] /* �   */,
        [0x0026, 0x10] /* �   */,
        [0x0027, 0x10] /* �   */,
        [0x0028, 0x10] /* �   */,
        [0x0029, 0x10] /* �   */,
        [0x002a, 0x10] /* �   */,
        [0x002b, 0x10] /* �   */,
        [0x002c, 0x10] /*     */,
        [0x002d, 0x10] /* �   */,
        [0x002e, 0x10] /*     */,
        [0x002f, 0x10] /*     */,
        [0x00a4, 0x0f] /* �   */,
        [0x00a6, 0x0f] /* �   */,
        [0x00a8, 0x0f] /* �   */,
        [0x0030, 0x10] /* �   */,
        [0x0031, 0x10] /* �   */,
        [0x0032, 0x10] /* �   */,
        [0x0033, 0x10] /* �   */,
        [0x0034, 0x10] /* �   */,
        [0x0035, 0x10] /* �   */,
        [0x0036, 0x10] /* �   */,
        [0x0037, 0x10] /* �   */,
        [0x0038, 0x10] /* �   */,
        [0x0039, 0x10] /*     */,
        [0x003a, 0x10] /* �   */,
        [0x003b, 0x10] /* �   */,
        [0x003c, 0x10] /* NBSP*/,
        [0x003d, 0x10] /* �   */,
        [0x003e, 0x10] /* �   */,
        [0x003f, 0x10] /* �   */,
        [0x0040, 0x10] /* �   */,
        [0x0041, 0x10] /* �   */,
        [0x0042, 0x10] /* �   */,
        [0x0043, 0x10] /* �   */,
        [0x0044, 0x10] /* �   */,
        [0x0045, 0x10] /* �   */,
        [0x0046, 0x10] /* �   */,
        [0x0047, 0x10] /* �   */,
        [0x0048, 0x10] /* �   */,
        [0x0049, 0x10] /* SHY */,
        [0x004a, 0x10] /* �   */,
        [0x004b, 0x10] /* �   */,
        [0x004c, 0x10] /* �   */,
        [0x004d, 0x10] /* �   */,
        [0x004e, 0x10] /* �   */,
        [0x004f, 0x10] /* �   */,
        [0x0050, 0x10] /* �   */,
        [0x0051, 0x10] /* �   */,
        [0x0052, 0x10] /* �   */,
        [0x0053, 0x10] /* �   */,
        [0x0054, 0x10] /* �   */,
        [0x0055, 0x10] /* �   */,
        [0x0056, 0x10] /* �   */,
        [0x0057, 0x10] /* �   */,
        [0x0058, 0x10] /* �   */,
        [0x0059, 0x10] /* �   */,
        [0x005a, 0x10] /* �   */,
        [0x005b, 0x10] /* �   */,
        [0x005c, 0x10] /* �   */,
        [0x005d, 0x10] /* �   */,
        [0x005e, 0x10] /* �   */,
        [0x005f, 0x10] /* �   */,
        [0x0060, 0x10] /* �   */,
        [0x0061, 0x10] /* �   */,
        [0x0062, 0x10] /* �   */,
        [0x00aa, 0x0f] /* �   */,
        [0x0063, 0x10] /* �   */,
        [0x0064, 0x10] /* �   */,
        [0x0065, 0x10] /* �   */,
        [0x0066, 0x10] /* �   */,
        [0x0067, 0x10] /* �   */,
        [0x0068, 0x10] /* �   */,
        [0x0069, 0x10] /* �   */,
        [0x006a, 0x10] /* �   */,
        [0x006b, 0x10] /* �   */,
        [0x006c, 0x10] /* �   */,
        [0x006d, 0x10] /* �   */,
        [0x006e, 0x10] /* �   */,
        [0x006f, 0x10] /* �   */,
        [0x0070, 0x10] /* �   */,
        [0x0071, 0x10] /* �   */,
        [0x0072, 0x10] /* �   */,
        [0x0073, 0x10] /* �   */,
        [0x0074, 0x10] /* �   */,
        [0x0075, 0x10] /* �   */,
        [0x0076, 0x10] /* �   */,
        [0x0077, 0x10] /* �   */,
        [0x0078, 0x10] /* �   */,
        [0x0079, 0x10] /* �   */,
        [0x007a, 0x10] /* �   */,
        [0x007b, 0x10] /* �   */,
        [0x007c, 0x10] /* �   */,
        [0x007d, 0x10] /* �   */,
        [0x007e, 0x10] /* �   */,
        [0x007f, 0x10] /* �   */,
        [0x0080, 0x10] /* �   */,
        [0x0081, 0x10] /* �   */,
        [0x0082, 0x10] /* �   */,
        [0x0083, 0x10] /* �   */,
        [0x0084, 0x10] /* �   */,
        [0x0085, 0x10] /* �   */,
        [0x0086, 0x10] /* �   */,
        [0x0087, 0x10] /* �   */,
        [0x0088, 0x10] /* �   */,
        [0x0089, 0x10] /* �   */,
        [0x008a, 0x10] /* �   */,
        [0x008b, 0x10] /* �   */,
        [0x008c, 0x10] /* �   */,
        [0x008d, 0x10] /* �   */,
        [0x00ac, 0x0f] /* �   */,
        [0x008e, 0x10] /* �   */,
        [0x008f, 0x10] /* �   */,
        [0x0090, 0x10] /* �   */,
        [0x0091, 0x10] /* �   */,
        [0x0092, 0x10] /* �   */,
        [0x0093, 0x10] /* �   */,
        [0x00ae, 0x0f] /* �   */,
        [0x0094, 0x10] /* �   */,
        [0x0095, 0x10] /* �   */,
        [0x0096, 0x10] /* �   */,
        [0x0097, 0x10] /* �   */,
        [0x0098, 0x10] /* �   */,
        [0x0099, 0x10],
    ];

    /**
     * This is the table that reduces the size based on repeated patterns in the file.
     *
     * When we find a byte match in the ring buffer we use this table to encode the length of the matched bytes.
     *
     * - These are intentionally 32-bit.  The leftmost flag bit is 1 in each of these to tell the decoder to use match decoding.
     * - LZP hash bits are used to encode the position where the matched bytes start.
     * - We're allowed to match up to 298 bytes before we can't encode more (we need an entry in this table for each byte more).
     * - We can reach for matches 65KB behind the current LZ cursor (65KB is the ring buffer size and highest a 16-bit hash can reach).
     **/
    matchEncode = [
        /* [MATCH CODE, MATCH CODE BIT LENGTH] */
        [0x80000000, 0x01],
        [0x80000000, 0x03],
        [0xa0000000, 0x03],
        [0xc0000000, 0x03],
        [0xe0000000, 0x06],
        [0xe4000000, 0x06],
        [0xe8000000, 0x06],
        [0xec000000, 0x06],
        [0xf0000000, 0x06],
        [0xf4000000, 0x06],
        [0xf8000000, 0x06],
        [0xfc000000, 0x0b],
        [0xfc200000, 0x0b],
        [0xfc400000, 0x0b],
        [0xfc600000, 0x0b],
        [0xfc800000, 0x0b],
        [0xfca00000, 0x0b],
        [0xfcc00000, 0x0b],
        [0xfce00000, 0x0b],
        [0xfd000000, 0x0b],
        [0xfd200000, 0x0b],
        [0xfd400000, 0x0b],
        [0xfd600000, 0x0b],
        [0xfd800000, 0x0b],
        [0xfda00000, 0x0b],
        [0xfdc00000, 0x0b],
        [0xfde00000, 0x0b],
        [0xfe000000, 0x0b],
        [0xfe200000, 0x0b],
        [0xfe400000, 0x0b],
        [0xfe600000, 0x0b],
        [0xfe800000, 0x0b],
        [0xfea00000, 0x0b],
        [0xfec00000, 0x0b],
        [0xfee00000, 0x0b],
        [0xff000000, 0x0b],
        [0xff200000, 0x0b],
        [0xff400000, 0x0b],
        [0xff600000, 0x0b],
        [0xff800000, 0x0b],
        [0xffa00000, 0x0b],
        [0xffc00000, 0x0b],
        [0xffe00000, 0x13],
        [0xffe02000, 0x13],
        [0xffe04000, 0x13],
        [0xffe06000, 0x13],
        [0xffe08000, 0x13],
        [0xffe0a000, 0x13],
        [0xffe0c000, 0x13],
        [0xffe0e000, 0x13],
        [0xffe10000, 0x13],
        [0xffe12000, 0x13],
        [0xffe14000, 0x13],
        [0xffe16000, 0x13],
        [0xffe18000, 0x13],
        [0xffe1a000, 0x13],
        [0xffe1c000, 0x13],
        [0xffe1e000, 0x13],
        [0xffe20000, 0x13],
        [0xffe22000, 0x13],
        [0xffe24000, 0x13],
        [0xffe26000, 0x13],
        [0xffe28000, 0x13],
        [0xffe2a000, 0x13],
        [0xffe2c000, 0x13],
        [0xffe2e000, 0x13],
        [0xffe30000, 0x13],
        [0xffe32000, 0x13],
        [0xffe34000, 0x13],
        [0xffe36000, 0x13],
        [0xffe38000, 0x13],
        [0xffe3a000, 0x13],
        [0xffe3c000, 0x13],
        [0xffe3e000, 0x13],
        [0xffe40000, 0x13],
        [0xffe42000, 0x13],
        [0xffe44000, 0x13],
        [0xffe46000, 0x13],
        [0xffe48000, 0x13],
        [0xffe4a000, 0x13],
        [0xffe4c000, 0x13],
        [0xffe4e000, 0x13],
        [0xffe50000, 0x13],
        [0xffe52000, 0x13],
        [0xffe54000, 0x13],
        [0xffe56000, 0x13],
        [0xffe58000, 0x13],
        [0xffe5a000, 0x13],
        [0xffe5c000, 0x13],
        [0xffe5e000, 0x13],
        [0xffe60000, 0x13],
        [0xffe62000, 0x13],
        [0xffe64000, 0x13],
        [0xffe66000, 0x13],
        [0xffe68000, 0x13],
        [0xffe6a000, 0x13],
        [0xffe6c000, 0x13],
        [0xffe6e000, 0x13],
        [0xffe70000, 0x13],
        [0xffe72000, 0x13],
        [0xffe74000, 0x13],
        [0xffe76000, 0x13],
        [0xffe78000, 0x13],
        [0xffe7a000, 0x13],
        [0xffe7c000, 0x13],
        [0xffe7e000, 0x13],
        [0xffe80000, 0x13],
        [0xffe82000, 0x13],
        [0xffe84000, 0x13],
        [0xffe86000, 0x13],
        [0xffe88000, 0x13],
        [0xffe8a000, 0x13],
        [0xffe8c000, 0x13],
        [0xffe8e000, 0x13],
        [0xffe90000, 0x13],
        [0xffe92000, 0x13],
        [0xffe94000, 0x13],
        [0xffe96000, 0x13],
        [0xffe98000, 0x13],
        [0xffe9a000, 0x13],
        [0xffe9c000, 0x13],
        [0xffe9e000, 0x13],
        [0xffea0000, 0x13],
        [0xffea2000, 0x13],
        [0xffea4000, 0x13],
        [0xffea6000, 0x13],
        [0xffea8000, 0x13],
        [0xffeaa000, 0x13],
        [0xffeac000, 0x13],
        [0xffeae000, 0x13],
        [0xffeb0000, 0x13],
        [0xffeb2000, 0x13],
        [0xffeb4000, 0x13],
        [0xffeb6000, 0x13],
        [0xffeb8000, 0x13],
        [0xffeba000, 0x13],
        [0xffebc000, 0x13],
        [0xffebe000, 0x13],
        [0xffec0000, 0x13],
        [0xffec2000, 0x13],
        [0xffec4000, 0x13],
        [0xffec6000, 0x13],
        [0xffec8000, 0x13],
        [0xffeca000, 0x13],
        [0xffecc000, 0x13],
        [0xffece000, 0x13],
        [0xffed0000, 0x13],
        [0xffed2000, 0x13],
        [0xffed4000, 0x13],
        [0xffed6000, 0x13],
        [0xffed8000, 0x13],
        [0xffeda000, 0x13],
        [0xffedc000, 0x13],
        [0xffede000, 0x13],
        [0xffee0000, 0x13],
        [0xffee2000, 0x13],
        [0xffee4000, 0x13],
        [0xffee6000, 0x13],
        [0xffee8000, 0x13],
        [0xffeea000, 0x13],
        [0xffeec000, 0x13],
        [0xffeee000, 0x13],
        [0xffef0000, 0x13],
        [0xffef2000, 0x13],
        [0xffef4000, 0x13],
        [0xffef6000, 0x13],
        [0xffef8000, 0x13],
        [0xffefa000, 0x13],
        [0xffefc000, 0x13],
        [0xffefe000, 0x13],
        [0xfff00000, 0x13],
        [0xfff02000, 0x13],
        [0xfff04000, 0x13],
        [0xfff06000, 0x13],
        [0xfff08000, 0x13],
        [0xfff0a000, 0x13],
        [0xfff0c000, 0x13],
        [0xfff0e000, 0x13],
        [0xfff10000, 0x13],
        [0xfff12000, 0x13],
        [0xfff14000, 0x13],
        [0xfff16000, 0x13],
        [0xfff18000, 0x13],
        [0xfff1a000, 0x13],
        [0xfff1c000, 0x13],
        [0xfff1e000, 0x13],
        [0xfff20000, 0x13],
        [0xfff22000, 0x13],
        [0xfff24000, 0x13],
        [0xfff26000, 0x13],
        [0xfff28000, 0x13],
        [0xfff2a000, 0x13],
        [0xfff2c000, 0x13],
        [0xfff2e000, 0x13],
        [0xfff30000, 0x13],
        [0xfff32000, 0x13],
        [0xfff34000, 0x13],
        [0xfff36000, 0x13],
        [0xfff38000, 0x13],
        [0xfff3a000, 0x13],
        [0xfff3c000, 0x13],
        [0xfff3e000, 0x13],
        [0xfff40000, 0x13],
        [0xfff42000, 0x13],
        [0xfff44000, 0x13],
        [0xfff46000, 0x13],
        [0xfff48000, 0x13],
        [0xfff4a000, 0x13],
        [0xfff4c000, 0x13],
        [0xfff4e000, 0x13],
        [0xfff50000, 0x13],
        [0xfff52000, 0x13],
        [0xfff54000, 0x13],
        [0xfff56000, 0x13],
        [0xfff58000, 0x13],
        [0xfff5a000, 0x13],
        [0xfff5c000, 0x13],
        [0xfff5e000, 0x13],
        [0xfff60000, 0x13],
        [0xfff62000, 0x13],
        [0xfff64000, 0x13],
        [0xfff66000, 0x13],
        [0xfff68000, 0x13],
        [0xfff6a000, 0x13],
        [0xfff6c000, 0x13],
        [0xfff6e000, 0x13],
        [0xfff70000, 0x13],
        [0xfff72000, 0x13],
        [0xfff74000, 0x13],
        [0xfff76000, 0x13],
        [0xfff78000, 0x13],
        [0xfff7a000, 0x13],
        [0xfff7c000, 0x13],
        [0xfff7e000, 0x13],
        [0xfff80000, 0x13],
        [0xfff82000, 0x13],
        [0xfff84000, 0x13],
        [0xfff86000, 0x13],
        [0xfff88000, 0x13],
        [0xfff8a000, 0x13],
        [0xfff8c000, 0x13],
        [0xfff8e000, 0x13],
        [0xfff90000, 0x13],
        [0xfff92000, 0x13],
        [0xfff94000, 0x13],
        [0xfff96000, 0x13],
        [0xfff98000, 0x13],
        [0xfff9a000, 0x13],
        [0xfff9c000, 0x13],
        [0xfff9e000, 0x13],
        [0xfffa0000, 0x13],
        [0xfffa2000, 0x13],
        [0xfffa4000, 0x13],
        [0xfffa6000, 0x13],
        [0xfffa8000, 0x13],
        [0xfffaa000, 0x13],
        [0xfffac000, 0x13],
        [0xfffae000, 0x13],
        [0xfffb0000, 0x13],
        [0xfffb2000, 0x13],
        [0xfffb4000, 0x13],
        [0xfffb6000, 0x13],
        [0xfffb8000, 0x13],
        [0xfffba000, 0x13],
        [0xfffbc000, 0x13],
        [0xfffbe000, 0x13],
        [0xfffc0000, 0x13],
        [0xfffc2000, 0x13],
        [0xfffc4000, 0x13],
        [0xfffc6000, 0x13],
        [0xfffc8000, 0x13],
        [0xfffca000, 0x13],
        [0xfffcc000, 0x13],
        [0xfffce000, 0x13],
        [0xfffd0000, 0x13],
        [0xfffd2000, 0x13],
        [0xfffd4000, 0x13],
        [0xfffd6000, 0x13],
        [0xfffd8000, 0x13],
        [0xfffda000, 0x13],
        [0xfffdc000, 0x13],
        [0xfffde000, 0x13],
        [0xfffe0000, 0x13],
        [0xfffe2000, 0x13],
        [0xfffe4000, 0x13],
        [0xfffe6000, 0x13],
        [0xfffe8000, 0x13],
        [0xfffea000, 0x13],
        [0xfffec000, 0x13],
        [0xfffee000, 0x13],
        [0xffff0000, 0x13],
        [0xffff2000, 0x13],
        [0xffff4000, 0x13],
        [0xffff6000, 0x13],
        [0xffff8000, 0x13],
        [0xffffa000, 0x13],
        [0xffffc000, 0x13],
        [0xffffe000, 0x13],
        // We never should select these.  These were in the original executable so including them here.
        [0x00000000, 0x00],
        [0x00000000, 0x00],
    ];

    /**
     * Initialize the Lzpf class.
     *
     * @returns {undefined}
     */
    constructor() {
        this.reset();
    }

    /**
     * Sets starting values for the compression algorithm.
     *
     * @returns {undefined}
     */
    reset() {
        this.current_bit_length = 0;
        this.current_bits = 0;
        this.ring_bufer_index = 0xffff;
        this.working_data = 0;
        this.match_index = 0;
        this.compression_mode = 0;
        this.checksum = 0;
        this.ring_buffer.fill(this.filler_byte, 0, 0x2000);
        this.hash_table.fill(0xffff, 0, 0x1000);
        this.encoded_data = [];
    }

    /**
     * Appends a byte to the end of the compressed byte array.  Re-allocates as needed
     *
     * @param byte {Number} char code of the byte to be added.
     *
     * @returns {undefined}
     */
    AddByte(byte) {
        this.encoded_data.push(byte);
    }

    /**
     * Add bits onto the compressed bit stream.
     *
     * When we reach 8 bits we push a byte onto the compressed byte array.
     *
     * @param bits {Number} bits to add
     * @param bit_length {Number} bit length
     *
     * @returns {undefined}
     */
    AddBits(bits, bit_length) {
        this.current_bits |= bits >>> (this.current_bit_length & 0x1f);
        this.current_bit_length += bit_length;

        while (this.current_bit_length > 7) {
            this.AddByte((this.current_bits >>> 0x18) & 0xff);

            this.current_bit_length -= 8;
            this.current_bits = (this.current_bits << 8) & 0xffffffff;
        }
    }

    /**
     * Starts a compression stream
     *
     * @returns {undefined} Lzpf compression data
     */
    Begin() {
        this.reset();
    }

    /**
     * Encode a block of data.  Used for streamed chunks.
     *
     * @param unencoded_data {Buffer} data to encode
     * @param compress_data {Boolean} compress data
     *
     * @returns {Buffer} Lzpf encoded data
     */
    EncodeBlock(unencoded_data, compress_data) {
        this.encoded_data = [];
        var uncompressed_len = unencoded_data.byteLength;

        var i = 0;
        var hash_index = 0;
        while (i < uncompressed_len) {
            var code_length = -1;
            var code = -1;

            var byte = unencoded_data.readUInt8(i);
            this.ring_buffer[i & 0x1fff] = byte;

            if (this.match_index > 0) {
                // Cozy time
                if (
                    byte != this.ring_buffer[this.ring_bufer_index] ||
                    this.match_index > 0x0127
                ) {
                    // End of matching.  Either we no longer match or we reached out limit.
                    code_length = this.matchEncode[this.match_index][1];
                    code = this.matchEncode[this.match_index][0];
                    this.match_index = 0;
                    this.compression_mode = 3;
                } else {
                    // Previous iteration found a match so we continue matching until we can't.
                    this.match_index = (this.match_index + 1) & 0x1fff;
                    this.ring_bufer_index = (this.ring_bufer_index + 1) & 0x1fff;
                    this.checksum = (this.checksum + byte) & 0xffff;
                    this.working_data = (this.working_data * 0x0100 + byte) & 0xffffffff;
                    i++;
                }
            } else {
                this.ring_bufer_index = 0xffff;

                if (i >= 3) {
                    // Start recoding data so we can lookup matches.
                    hash_index =
                        ((this.working_data >>> 0x0b) ^ this.working_data) & 0x0fff;
                    this.ring_bufer_index = this.hash_table[hash_index];
                    this.hash_table[hash_index] = i & 0x1fff;
                } else {
                    // The first three uncompressed bytes aren't used for the matching algorithm.
                    this.compression_mode++;
                }

                if (this.ring_bufer_index == 0xffff) {
                    // We never seen this byte before so we encode it with our Huffman table.
                    code_length = this.nomatchEncode[byte][1];
                    code = this.nomatchEncode[byte][0] << 0x10;
                } else if (
                    byte == this.ring_buffer[this.ring_bufer_index] &&
                    compress_data
                ) {
                    // Wow dude, a match has been found.  Let's switch get our own room in the next iteration to see if we match further.
                    this.match_index = 1;
                    this.ring_bufer_index = (this.ring_bufer_index + 1) & 0x1fff;
                    this.compression_mode = 4;
                } else {
                    // We've seen these bytes before but the index in the ring buffer doesn't match so we revert to our neat Huffman table
                    // We add 1 flag bit of 0 to account for the fact we've had a hash table hit but no hit in the ring buffer.
                    code_length = this.nomatchEncode[byte][1] + 1;
                    code = this.nomatchEncode[byte][0] << 0x0f;
                }

                this.checksum = (this.checksum + byte) & 0xffff;
                // We work on a 2-byte context so we store the last two bytes so we can do cool lookups with it
                this.working_data = (this.working_data * 0x0100 + byte) & 0xffffffff;
                i++;
            }

            if (code_length > 0) {
                this.AddBits(code, code_length);
            }
        }
    }

    /**
     * Ends a compression stream.
     *
     * @param compression_mode {Number} the end type used to finalize
     *
     * @returns {Buffer} Lzpf compression data
     */
    Finish() {
        var code_length = -1;
        var code = -1;

        if (this.compression_mode == 2) {
            this.AddBits(0x00990000, 0x10);
        } else if (this.compression_mode >= 3) {
            if (this.compression_mode == 4) {
                code_length = this.matchEncode[this.match_index][1];
                code = this.matchEncode[this.match_index][0];
                this.AddBits(code, code_length);
            }

            var hash_index =
                ((this.working_data >>> 0x0b) ^ this.working_data) & 0x0fff;
            var ring_bufer_index = this.hash_table[hash_index];
            if (ring_bufer_index == 0xffff) {
                this.AddBits(0x00990000, 0x10);
            } else {
                this.AddBits(0x004c8000, 0x11);
            }
        }

        // Add checksum bits
        this.AddBits((this.checksum << 0x10) & 0xffffffff, 0x08);
        this.AddBits((this.checksum << 0x18) & 0xffffffff, 0x08);

        // If we have leftover bits then add it.
        if (this.current_bit_length > 0) {
            this.AddByte((this.current_bits >>> 0x18) & 0xff);
        }

        this.AddByte(this.filler_byte);

        return Buffer.from(this.encoded_data);
    }

    /**
     * Converts the data to a Javascript Buffer object
     *
     * @param data {String|Buffer} Data to convert
     *
     * @returns {Buffer} Javascript Buffer object
     */
    ConvertToBuffer(data) {
        data = new Buffer.from(data.toString("binary"));
        return data;
    }

    /**
     * Compress data using WebTV's Lzpf compression algorithm and adds the footer to the end.
     *
     * @param uncompressed_data {String|Buffer} data to compress
     *
     * @returns {Buffer} Lzpf compression data
     */
    Compress(uncompressed_data) {
        uncompressed_data = this.ConvertToBuffer(uncompressed_data);
        this.Begin();
        this.EncodeBlock(uncompressed_data, true);
        return this.Finish();
    }
}

module.exports = WTVLzpf;
