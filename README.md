# brownco

## Available Scripts

In the project directory (keep in mind this directory is the server directory/full-stack if any installs are needed client side cd into client directory), you can run:

### `npm run client`

for style updates and frontend only changes with a dev server (no backend edits)
alternatively if you are in the client directory you can run npm run start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits
You will also see any lint errors in the console.

### `npm start`

Spins up the node api for the application pointing to the /build directorys index.html file
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run server`

Spins up nodemon for the node api application so that edits can be made serverside 
edits can be made and the application will reload.

### `npm run dev`

Full Stack Development this will concurrently spin up the backend api node application and the frontend react application <br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.<br>

edits can be made and the application will reload.<br>


## Development workflow

### clone and install
 
`git clone https://github.com/Peeas/brownco.git`
After repo is cloned and installed locally (be sure to run npm i in the root and then in the client directory)
`npm i`
`cd client npm i`


### workflow

#### on master branch
in root directory 
- `git checkout master`
- `git checkout pull origin master`
- `git checkout -b BRANCHNAME` i.e. git checkout -b PHASE2-22 
    now you should be on PHASE2-22 branch <br>
#### on active development branch

- `git pull --rebase origin master`
--> make changes <-- 
- `git add .`
- `git commit -m"YOUR COMMIT"`
--> example: `git commit -m"PHASE2-22: make hero div same size done"`
- `git pull --rebase origin master`
- `git push origin BRANCHNAME`
--> example `git push origin PHASE2-22`

#### in github 
- go to pushed branch
- create a new pull request into master (feel free to ask me to review any code by adding me as a reviewer)
- review changes and merge into master 

## Deployment
- GitHub deployment should be connected so that every push the master branch triggers a deployment or you can use the heroku cli in your terminal
- heroku cli follow directions located here: https://dashboard.heroku.com/apps/mighty-springs-32875/deploy/heroku-git
