## Table of Contents

- [Get started](#get-started)
- [Available scripts](#available-scripts)
- [Notes](#notes)
- [To do](#to-do)

## Get started

Instructions for using this repo:

* `clone this repo`
  ```
  $ git clone git@github.com:blackfry/c-ts-react-woof.git
  ```
* `install dependencies`
  ```
  $ cd c-ts-react-woof
  $ yarn install
  ```

## Available Scripts

In the project directory, you can run:

### `npm run now-start`

Builds a production version of the app and serves it locally.<br>
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

### `npm run dev`

Will start a hot-reloading server for development using webpack-dev-server.<br>
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm run deploy`

Builds and deploys the app live using Zeit's now service.<br>
Create a NOW_TOKEN at [https://zeit.co](https://zeit.co) and
store it as a local environment variable to deploy. You will see a link to the deployed app in your Now desktop app, in your zeit web account, and in the terminal when running this script.

## Notes
* Some packages that should be in devDependencies - are not. There is an issue where Travis doesn't build out the dist folder. I have tried `skip_cleanup: true` which is supposed to keep artefacts of previous steps - ie webpack builds.
* Travis builds and Now deployments are triggered by pushes to git, if you register this cloned repo with your `travis-org` account at [https://travis-ci.org/](https://travis-ci.org/) and update the encypted secret in `travis.yml`

## To dos
* Fix devDependencies
* Write comprehensive tests
* The test script was removed from Travis because it is barfing on scss files. Mocah runs tests fine on local env.
* There are some styling issues in Safari related to `background-size: cover`.
* Test layout in Edge (IE11 :sob:)
