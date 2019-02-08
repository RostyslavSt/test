#!/usr/bin/env bash
#-----------TASK 4. Log all performed actions

LOGFILE=./log/program.log

#use this variable that to add to log file
TIMESTAMP=`date "+%Y-%m-%d %H:%M:%S"`

exec 1>>$LOGFILE 2>>$LOGFILE

set -x

#executing different commands
whoami
pwd
cat /home/rshtets/111.txt
ls -la
touch test.txt