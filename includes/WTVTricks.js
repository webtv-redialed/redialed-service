class WTVTricks {
    minisrv_config = [];
    type = null;

    //i would NEVER copy this code from another file, that would be programatical malpractice!
    constructor(minisrv_config = null) {
        this.minisrv_config = minisrv_config;
    }

    getPasswordByType(type) {
        if (type == "high" && (this.minisrv_config.services["wtv-tricks"].passwordHigh)) {
            return this.minisrv_config.services["wtv-tricks"].passwordHigh;
        } else if (type == "low" && this.minisrv_config.services["wtv-tricks"].passwordLow) {
            return this.minisrv_config.services["wtv-tricks"].passwordLow;
        } else {
            throw ` * Tricks password type "${type}" not known or undefined in config, THIS IS BAD!`;
        }
    }

    getVersion(givenBuild) {
        let versionMap = [
            { build: 0, vers: `1.0` },
            { build: 200, vers: `1.1` },
            { build: 300, vers: `1.2` },
            { build: 1000, vers: `1.3` },
            { build: 1090, vers: `1.3Retail` },
            { build: 1127, vers: `1.4Retail` },
            { build: 1150, vers: `1.4` },
            { build: 2000, vers: `2.0` },
            { build: 2100, vers: `2.0J` },
            { build: 2150, vers: `2.0.1J` },
            { build: 2200, vers: `2.0.1` },
            { build: 2300, vers: `2.0.3` },
            { build: 2500, vers: `2.0.5` },
            { build: 3000, vers: `2.1` },
            { build: 3065, vers: `2.1.1` },
            { build: 3070, vers: `2.1.5` },
            { build: 3250, vers: `2.1.7` },
            { build: 3450, vers: `Springboard2.2` },
            { build: 3600, vers: `2.0.2J` },
            { build: 3700, vers: `2.2.1J` },
            { build: 3800, vers: `2.2.5` },
            { build: 5000, vers: `2.3` },
            { build: 5200, vers: `Fiji` },
            { build: 5500, vers: `2.3.5` },
            { build: 5700, vers: `2.3.7` },
            { build: 5750, vers: `2.3.8` },
            { build: 5759, vers: `2.3.8-NAND` },
            { build: 6000, vers: `3.0` }, // WNI actually did this, i'm pretty sure they gave up
            { build: 32767, vers: `Private` },
        ];
        return (versionMap.at(versionMap.findIndex(({ build }) => build > givenBuild) - 1).vers);
    }

    decodeChipversion(chipversion) {
        let soloVersion = (chipversion & 0xf00000) >> 0x14;
        let soloFab = (chipversion & 0xf0000) >> 0x10;

        switch (chipversion >> 0x18) {
            case 1:
                return "FIDO1";
            case 3:
                return `SOLO-${soloVersion}, fab ${soloFab}`;
            case 4:
                return `SOLO2-${soloVersion}, fab ${soloFab}`; // don't know much about this one
            default:
                return "?";
        }
    }

    // TODO: determine bank 0 and 1 flash speed
    decodeSysconfig(romtype, sysconfig) {
        if (romtype == "bf0app") {
            /*  "I don't even know how it works."
                -Bruce Leak, Thursday, October 12, 1995 1:53:28 AM */

            // pretty sure this is correct but genuinely who has a box with a multiplier other than 2x
            function getCPUMult() {
                let cpuMultAnd = sysconfig & 0xc000;
                if (cpuMultAnd == 0x4000) return 4;
                else if (0x4000 < cpuMultAnd) {
                    if (cpuMultAnd == 0x8000) return 2;
                    else if (cpuMultAnd == 0 || cpuMultAnd != 0xc000) return 5;
                }
            }

            // determine box SGRAM speed
            function getSGSpeed() {
                let SGRAMand = sysconfig & 0xc00000;
                if (SGRAMand == 0x400000) return 66;
                else if (0x400000 < SGRAMand)
                    if (SGRAMand == 0x800000) return 77;
                    else if (SGRAMand == 0xc00000) return 83; // potentially incorrect but looks like it should return 83MHz on known existing hardware
                    else if (SGRAMand == 0) return 100;
            }

            // determine box video chip
            function getVideoChip() {
                let videoChipAnd = sysconfig & 0x600;

                if (videoChipAnd == 0x200) return "Bt851";
                else if (videoChipAnd < 0x201 && videoChipAnd !== 0) return "Unknown";
                else if (videoChipAnd == 0x400) return "Bt852";
                else return "Philips7187/Bt866";
            }

            let boardTypeB;
            // determine box board type
            switch (sysconfig & 0xc) {
                case 8:
                    boardTypeB = "Trial";
                    break;
                case 0xc:
                    boardTypeB = "FCS";
                    break;
                default:
                    boardTypeB = "Unknown Type";
            }

            // This is a mess, but you can still see how it works. Shouldn't have to be touched again until Redialed 2.0
            return `CPU Clk Mult = ${getCPUMult()}x Bus Clk, CPU output bufs @ ${(sysconfig & 0x2000) == 0 ? 100 : 50}%
ROM Bank 0:  ${sysconfig < 0 ? "Mask" : "Flash"}, ${(sysconfig & 0x40000000) == 0 ? "Normal" : "PageMode"}, 120ns/60ns
ROM Bank 1:  ${(sysconfig & 0x8000000) == 0 ? "Flash" : "Mask"}, ${(sysconfig & 0x40000000) == 0 ? "Normal" : "PageMode"}, 150ns/75ns
SGRAM:  ${getSGSpeed()}MHz
Audio:  ${(sysconfig & 0xc0000) == 0xc0000 ? "AKM4310/4309" : "Unknown"}, ${(sysconfig & 0x20000) == 0 ? "SPOT" : "External"} Clk
Video:  ${getVideoChip()}, ${(sysconfig & 0x800) == 0 ? "PAL" : "NTSC"}, ${(sysconfig & 0x10000) == 0 ? "External" : "SPOT"} Clk
Board:  ${boardTypeB}, Rev = ${0xf - ((sysconfig & 0xf0) >> 4)} (${(sysconfig & 0xf0) >> 4})`;
        } else {
            let boardType = (sysconfig & 0x7000) >> 0xc;
            let boardRev = (sysconfig & 0xf00) >> 8;

            return `Video = ${(sysconfig & 8) == 0 ? "NTSC" : "PAL"}, storage = ${(sysconfig & 4) == 0 ? "disk" : "flash"}
CPU type = ${(sysconfig & 0x100000) == 0 ? 5230 : 4640}, ${(sysconfig & 0x80000) == 0 ? "little" : "big"}-endian
CPU clock mult = ${(sysconfig & 0x20000) == 0 ? 3 : 2}x
SmartCard 0 ${(sysconfig & 0x400000) == 0 ? "supported" : "not supported"}, SmartCard 1 ${(sysconfig & 0x200000) == 0 ? "supported" : "not supported"}
Board type = ${boardType}, board rev = ${boardRev}`;
        }
    }
}

module.exports = WTVTricks;
