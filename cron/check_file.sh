#!/usr/bin/env bash

if [ -f /tmp/start.lock ]
then
sh /home/rshtets/devOps_projects/study/test_script.sh
else
notify-send "ATTENTION !!! The start.lock file is absent"
fi

#comments
#When file "start.lock" doesnt exist If it necessary - we could use sed command that completely remove jod from crontab
#for example - "sed -i '/\*\/1 \* \* \* \* \/home\/rshtets\/devOps_projects/study\/check_file.sh' /var/spool/cron/crontabs/user

