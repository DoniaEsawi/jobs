FROM ubuntu:latest
MAINTAINER empyre@empyrehq.com

# Project files
ADD crontab /etc/cron.d/crontab
ADD . /jobs
RUN chmod 0644 /etc/cron.d/crontab
RUN touch /var/log/cron.log

# Install dependencies
RUN apt-get update \
    && apt-get install -y curl cron gnupg \
    && apt-get -y autoclean

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v

RUN cd /jobs && npm install

CMD cron && tail -f /var/log/cron.log