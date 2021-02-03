Code Day Project
================

This is my code day project. Currently it is only the backend API with a database.

Everything is setup to run within a VSCode "devcontainer".

[Technology Stack Outlined Here](https://github.com/tinydogio-joshua/code-day/issues/1)

**Requirements**
* [Docker](https://www.docker.com)
* [VS Code](https://code.visualstudio.com)
* [VS Code Remote Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Backend Services
----------------
All the following commands are to be run from within the `devcontainer`.

**Install Dependencies**
* Enter `cd backend && yarn start` in the terminal.

**Setup Database**
* Go to the `backend` directory in your terminal.
* Once you're sure all dependencies have been installed and the MariaDB container is up and running; run the following two commands.
  * `yarn db:migrate`
  * `yarn db:seed`

**Running the Backend Application**
* From within the `backend` directory, enter `yarn start` in the terminal.
  * Backend services runs at the following URL locally: [http://localhost:8000](http://localhost:8000)

Notes
-----
There are a Sequel Pro bookmark and Postman Collection (export) in the `backend/utilities` directory.
