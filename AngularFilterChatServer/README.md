# for task 4: chat server, need to spin up a server. 
# here used a node server
# node installed:
# run 
node app.js
# port 5000

# ng build already in the repo
# when moved to the laptop, doesn't need to retun, 
# and doesn't solve the issue

# CodingTest
# Angular 6.0.8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Note for spin up the task 4, spin up a server node

ng g service layout/task4/websocket --module=app.task4.module
CREATE src/app/layout/task4/websocket.service.spec.ts (392 bytes)
CREATE src/app/layout/task4/websocket.service.ts (138 bytes)



turn up the express server first, 
then ng serve spin up the 4200 port, 
and finally the 404 error is gone

reference for Task4:
https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/

npm install 
installing dependent packages; 
 
run from a new repo
npm install

