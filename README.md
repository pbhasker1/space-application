## About the application
This application helps in bringing information about the space flights that happened in the world history. It also gives you an option to fliter the data based on  the launch year, launch status and landing status.

## Project structure

1.The src/app folder contains the content section component and the shared folder. The contentsection is responsible for displaying the data of various flights.

2. The shared folder contains services folder and sidebar component. The sidebar components contains the logic for displaying various filers and applying them to the dat displayed in content section component.

3. THe services folder contain two services files -: data.service.ts and DataFilter.service.ts. data.service.ts contains the hhtp call for fetching the data from the api and DataFilter.service.ts contains the mechanism to update the filter parameters by means of observables imported from rxjs library. This helps in reflecting the changes in the filter criteria in side bar component to content Section component.

# SpaceApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
