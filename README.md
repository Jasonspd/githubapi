### Jason Luu NodeJS Exercise

#### How to run
Run tests: `npm run test`
Run dev: `npm run dev`

#### Routes
React client is on: `localhost:3000`
NodeJS server is on: `localhost:5000`
To view Repos API: 
`localhost:5000/repos/[REPO USER]` 
`e.g. localhost:5000/repos/nodejs`
To view Issues for NodeJS Repo: `localhost:5000/issues/[REPO NAME]`
`e.g. localhost:5000/issues/automation`

#### Files:
**Index.j**s - main nodejs express server
**app/** - directory for react client
**app/components/repos/repos.js** - main component that lists repo's and opens issues on click

#### Process:
- Created a simple nodejs server with express and nodemon
- Use concurrently to run both server and client scripts in one
- Use request to request github API and display as json
- Used react-create-app to quickly get a react template
- Wrote some inital user story tests
- Fetched API's from my own backend using a proxy
- Displayed results with states and map function

#### TODO:
- Complete tests
- Show issues from only the specifically targeted repo