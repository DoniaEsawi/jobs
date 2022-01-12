"use strict";

// This function is useful for testing that the crontab is able to execute
// The execution of this function is commented out in ../../crontab.
// *  *  * * * root node /jobs/dist/ping/pingLog.js >> /var/log/cron.log 2>&1
// When this command is enabled and working in via cron,
// There will be a running log of "[timestamp]: Ping and Pong!"
// within the docker container's filesystem at /var/log/cron.log
function pingLog() {
  console.log(`${new Date().toISOString()}: Ping and Pong!`);
}

pingLog();