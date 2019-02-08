#!/usr/bin/env bash

I=0

while [ ${I} -le 50 ]; do
I=`/usr/bin/expr ${I} + 15`
/home/rshtets/devOps_projects/study_tasks/cron/test_script.sh
sleep 15
done