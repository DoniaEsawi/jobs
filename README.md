# alexbrady jobs

This project is dockerized cronjobs.

See `bin/install.sh` for how to set up a linux machine to run this project.
See `Dockerfile` for information on what dependencies are available to the scripts running in the container.
The cron schedule is located in `crontab`

# How to Setup Locally

Create the environment variable file from the template: `$ cp .env.dist .env` and fill in with any pertinent environment variables.

Set up the host computer.

## Install docker and docker-compose onto the host computer

Run `$ ./bin/install.sh` 

**If you are on Windows Subsustem Linux (WSL2),** you must setup Docker Desktop for Windows. [See this walkthrough](https://docs.docker.com/desktop/windows/wsl/) for instructions.

When Docker and it's support libraries are installed, `$ docker-compose up -d` will start the Docker container in detached mode.

`$ docker ps` will list Docker processes.

# Development

## jobs

Scripts that should be run at a regular interval should be defined within `/src`. Any changes made in the `src` directory are immediately reflected in the Docker container filesystem.

When the container is built for production, the `/src` directory is run through the JavaScript Babel transpiler and output to the `/dist` directory.

The process that should be run regularly must be added to the crontab for regular invocation. Use the `/dist` version of the job (the once that is produced from the `npm run build` step) when listing it in crontab.

## crontab

Altering the crontab file does not automatically register within the Docker container. After altering the crontab file, you must rebuild the image.

```
$ docker-compose down
$ docker-compose up --build
```

Because building takes a non-trivial amount of time, it is suggested that you do not rely on modifying crontab as part of the development process.

1. Write and test your code like a local JS script.
2. Run `npm build` when you are ready to test the script's performance within the Docker container
3. `docker-compose up -d`, and manually run and test the script in the Docker container
4. When you're satisified with the result, modify the crontab file to invoke the process at the desired schedule
5. If you would like to witness the script being invoked via crontab `docker-compose down` and `docker-compose up --build`, or in some other way bring up the docker container with a rebuilt image.
6. Watch the log file where you expect to see output.

In short, modify crontab last.

---

alexbrady open source