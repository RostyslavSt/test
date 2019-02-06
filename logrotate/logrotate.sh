#!/usr/bin/env bash

#-archive files older than N days should be rotated
#-remove archives files if free space is lower than X megabytes/gigabytes
#-notify user(s) when some kind of shit happens
#-log all performed actions

LOG_DIR="/home/rshtets/test_logrotate/*"

#TASK 1- archive files older than N days should be rotated
for file in $LOG_DIR
do
echo $file
done


