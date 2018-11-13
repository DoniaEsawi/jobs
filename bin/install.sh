#! /bin/bash

sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

# Get Docker
echo "Checking for Docker"
if ! [ -x "$(command -v docker)" ]; then
    echo "Fetching docker"
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"

    sudo apt-get update
    sudo apt-get install docker-ce
fi
echo "We have docker"
echo docker -v

# Get docker-compose
echo "Checking for docker-compose"
if ! [ -x "$(command -v docker-compose)" ]; then
    echo "Fetching docker-compose"
    sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi
echo "We have docker-compose"
echo docker-compose -v

docker-compose up -d
