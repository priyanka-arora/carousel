# README #

# Responsive Carousel Solution

A Lightweight, CSS based Fully Responsive Carousel in AngularJS 4 that has no jQuery dependency.

This is responsive and asynchronous carousel using AngularJS 4, Type script, HTML5, SASS and CSS3.
It is carousel component with controls which loads its content via HTTP service asynchronously and plays with user navigation.

# Technology Stack

Web Languages - HTML5, SASS CSS3, Javascript, Angular 4, Angular CLI, NPM, Typescript

Testing Frameworks- Karma, Jasmine 

## Components

1) Responsive Carousel with controls
3) Web Fonts - 'Ropa Sans'

# Get Started

## Install Node Dependencies after clone

Run `npm install -g @angular/cli` command if angular-cli is not installed
Run `npm install` command

## Start development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. 

## Build

Run `ng build` or `npm build` to build the project. 
The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

# Testing
Tested with very basic unit test and lint validation.

## Running unit tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running lint to validate the code 

Run `ng lint` to execute the validate the code base.

# Technical Documentation

## Responsive Style

Regarding responsive style break point of screen in different devices like Mobile, Tablet and Desktop is respectively : 
```html
  @media (min-width: 468px)
  @media (min-width: 768px)
  @media (min-width: 992px)
````
## Responsive Style

Global CSS is defined in `assets/css/style.css`, where as all the individual component's responsive css(sass) is written in component folder itself.
```html
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
```

## Carousel service

Caroudal service which helps to get the data for slider

```js 
  fetchCarouselData(): Observable<any> {
    return this.http.get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo&page=1&per_page=6').map(response => response.json());
  }
```

## Carousel Controls

Navigate to previous slide on click of prev button

```js 
   prevSlides() {
    this.showSlides(this.slideIndex -= 1);
  }
```

Navigate to next slide on click of next button

```js  
   nextSlides() {
    this.showSlides(this.slideIndex += 1);
  }

```
