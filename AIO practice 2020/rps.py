#!/usr/bin/env python
import sys
sys.setrecursionlimit(1000000000)

#
# Solution Template for RPS
# 
# Australian Informatics Olympiad 2019
# 
# This file is provided to assist with reading and writing of the input
# files for the problem. You may modify this file however you wish, or
# you may choose not to use this file at all.
#


# Open the input and output files.
f = open("rpsin.txt", "r")
output_file = open("rpsout.txt", "w")

n = f.readline()

op = f.readline()
op = op.split()
ra = int(op[0])
pa = int(op[1])
sa = int(op[2])

me = f.readline()
me = me.split()
rb = int(me[0])
pb = int(me[1])
sb = int(me[2])

score = 0

for x in range(ra, 0, -1):
    if pb != 0:
        ra = ra-1
        pb = pb-1
        score = score + 1
    elif rb != 0:
        ra = ra-1
        rb = rb-1
    else:
        ra = ra-1
        sb = sb-1
        score = score - 1      

for x in range(pa, 0, -1):
    if sb != 0:
        pa = pa-1
        sb = sb-1
        score = score + 1
    elif pb != 0:
        pa = pa-1
        pb = pb-1
    else:
        ra = ra-1
        rb = rb-1
        score = score - 1

for x in range(sa, 0, -1):
    if rb != 0:
        sa = sa-1
        rb = rb-1
        score = score + 1
    elif sb !=0:
        sb = sb-1
        sa = sa-1
    if pb != 0:
        sa = sa-1
        pb = pb-1
        score = score - 1

# TODO: This is where you should compute your solution. Store the answer (the
# maximum number of points you could score after N rounds have been played) in
# the variable answer.

# Write the answer to the output file.
output_file.write("%d\n" % (score))

# Finally, close the input/output files.
f.close()
output_file.close()
