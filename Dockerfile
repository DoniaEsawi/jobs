FROM ubuntu:latest
MAINTAINER iamalexbrady@gmail.com

# Project files
ADD . /jobs

# Debian Linux and its derivative Ubuntu have peculiarities that may prevent your cron jobs from executing;
# in particular, the files in /etc/cron.d, /etc/cron.{hourly,daily,weekly,monthly} must:
# * be owned by root
# * only be writable by root
# * not be writable by group or other users
# * have a name without any dots '.' or any other special character but '-' and '_' .
# See https://serverfault.com/a/754104 for
ADD crontab /etc/cron.d/crontab
RUN chmod 0644 /etc/cron.d/crontab
RUN touch /var/log/cron.log

# Install dependencies
# curl, cron, gnupg
RUN apt-get update \
    && apt-get install -y curl cron gnupg \
    && apt-get -y autoclean

# Install NodeJS 17
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v

WORKDIR /jobs
RUN npm install
RUN npm run build

CMD cron && tail -f /var/log/cron.log