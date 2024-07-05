## This file is a shell to be run under bash from the HP directory.
## It's provided as documentation as to how to put together the
## ".mod" files.
##
## Basically, you want to do a build for Plus and Plus nondebug.
## The reason to use Plus is that it uses the 4640 processor which
## is not quite as full-featured as the 5230; Plus object code
## will run fine on Derby, Plus2.5 and BPS, but the same is not
## true in the reverse direction.
##
## Anyway, do a build - "gmake;gmake nondebug".  Then run this
## script.  If you have not altered your Makefile.include
## to place the objects directory on the ~ level (search
## Makefile.include for "objects" and you'll see what I mean),
## then you'll have to alter this file to use ~/client/objects
## instead of ~/client2.5/objects.

cp ~/client2.5/objects/app-dbg-int-ram/obj/EpsonPrinters.mod EpsonDebug.mod

cp ~/client2.5/objects/app-ndbg-int-ram/obj/EpsonPrinters.mod EpsonPrinters.mod

