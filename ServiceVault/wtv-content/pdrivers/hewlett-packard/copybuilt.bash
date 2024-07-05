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
## instead of ~/c25/objects.

cp ~/c25/objects/app-dbg-int-ram/obj/HP400.mod    HP400dbg.mod
cp ~/c25/objects/app-dbg-int-ram/obj/HP540.mod    HP540dbg.mod
cp ~/c25/objects/app-dbg-int-ram/obj/HP600.mod    HP600dbg.mod
cp ~/c25/objects/app-dbg-int-ram/obj/HP660690.mod HP660690dbg.mod
cp ~/c25/objects/app-dbg-int-ram/obj/HP8XX.mod    HP8XXdbg.mod
cp ~/c25/objects/app-dbg-int-ram/obj/HP9XX.mod    HP9XXdbg.mod

cp ~/c25/objects/app-ndbg-int-ram/obj/HP400.mod    HP400.mod
cp ~/c25/objects/app-ndbg-int-ram/obj/HP540.mod    HP540.mod
cp ~/c25/objects/app-ndbg-int-ram/obj/HP600.mod    HP600.mod
cp ~/c25/objects/app-ndbg-int-ram/obj/HP660690.mod HP660690.mod
cp ~/c25/objects/app-ndbg-int-ram/obj/HP8XX.mod    HP8XX.mod
cp ~/c25/objects/app-ndbg-int-ram/obj/HP9XX.mod    HP9XX.mod

