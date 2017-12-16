

Instructions for assembling a project

To run the sample, follow these steps:

    Install nvm: $ sudo apt-get install build-essential libssl-dev $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash $ source ~/.profile View the list of available versions:

$ nvm ls-remote 2. Install any version: $ nvm install v8.9.1 $ nvm use 8.9.1 Check your version:

$ node -v 3. Clone this repository: with SSH:

$ git clone git@github.com:alexmaximovna/palo-alto.git or with HTTPS:

$ git clone https://github.com/alexmaximovna/palo-alto.git 4. Go to project's folder: $ cd palo-alto 5. Install dependencies: $ npm install 6. Install gulp globally npm install --global gulp-cli 7. Run application: $ gulp
