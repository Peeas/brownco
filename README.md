# brownco

## Available Scripts

In the project directory, you can run:

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

### `clone and install`

After repo is cloned and installed locally (be sure to run npm i in the root and then in the client directory) <br>
run git fetch origin

### `workflow`

on master branch<br>
run git checkout origin master
run git checkout -b BRANCHNAME i.e. git checkout -b PHASE2-22 
now you should be on PHASE2-22 branch 
on active development branch<br>
run git pull --rebase origin master
--> make changes


