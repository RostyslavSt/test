#!/usr/bin/env bash

#-archive files older than N days should be rotated
#-remove archives files if free space is lower than X megabytes/gigabytes
#-notify user(s) when some kind of shit happens
#-log all performed actions

#TASK - 1. Archive files older than N days should be rotated
LOG_DIR="/home/rshtets/test_logrotate/"
DAYS_LIMIT=5
find $LOG_DIR -mtime +$DAYS_LIMIT -name "*.tar.gz" | xargs rm -rf

#TASK - 2. Remove archives files if free space is lower than X megabytes/gigabytes
FILESYSTEM=/dev/sda6
CRITICAL_FREE_SPACE=170025396

CURRENT_FREE_SPACE=$(df -k $FILESYSTEM | tail -1 | awk '{print $4}')

if [ $CURRENT_FREE_SPACE -le $CRITICAL_FREE_SPACE ]; then
    find $LOG_DIR -name "*.tar.gz" | xargs rm -rf
fi

#TASK - 3. Notify user(s) when some kind of shit happens
#Let's "some kind of shit" will be critical free space

if [ $CURRENT_FREE_SPACE -le $CRITICAL_FREE_SPACE ]; then
    CURR_FREE_SPACE_VOL=$(df -Pl -h | grep "/dev/sda6" | awk '{print $4'})
    CURR_FREE_SPACE_PER=$(df -Pl -h | grep "/dev/sda6" | awk '{print $5'})
    notify-send  -t 0 "ATTENTION !!! YOUR free disk space is $CURR_FREE_SPACE_VOL - $CURR_FREE_SPACE_PER"
fi

#TASK 4. Log all performed actions
