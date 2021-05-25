# What's Cookin'!

1. [Project Overview](https://github.com/k-atwhite/whats-cookin/blob/main/README.md#project-overview)
2. [Contributors](https://github.com/k-atwhite/whats-cookin/blob/main/README.md#contributors)
3. [How to use the app](https://github.com/k-atwhite/whats-cookin/blob/main/README.md#how-to-use-the-app)
4. [Technologies Used](https://github.com/k-atwhite/whats-cookin/blob/main/README.md#technologies-used)
5. [Future Additions](https://github.com/k-atwhite/whats-cookin/blob/main/README.md#future-additions)

## Project Overview
What's cooking is our biggest project yet!

ITERATION 0: This project was our first real opportunity to implement Test Driven Development. With the concept of happy and sad paths in mind, we wrote tests to ensure our properties and methods would be funcitonal. 

ITERATION 1: Our first tasks were to create the classes that would do most of the heavy lifting for this project. We made an effort to set up a buffer between the raw data and the manipulationof data by setting up classes that would search through and interpret the data before passing it on into the DOM. We wrote constructors and the methods withing for Ingredients, Recipes, a Recipe Repository, and Users. 

ITERATION 2: Our second phase of work was to start using our classes to populate and maniplulate the DOM. We used the idea of "user stories" to inform our coding decisions.
Our user should have a wide range of functionality (covered in detail below) - such as filtering through the recipes by name, ingredients, and tags. Saving recipes to their "favorite recipes" or their "weekly menu". 

ITERATION 3: Our final phase was to toss aside the built in datasets and start using fetch calls to request data from an API. 

Project Goals:
- Implement ES6 classes that communicate to each other as needed
- Use object and array prototype methods to perform data manipulation
- Create a user interface that is easy to use and displays information in a clear way on multiple screens
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Make network requests to API endpoints to retrieve and manipulate data


## Contributors
[Kat White!](https://github.com/k-atwhite) + [Lauren Kessell!](https://github.com/LKessell) + [Erica Spitz!](https://github.com/e-spitz)


## How to use the app


## Technologies Used
* HTML
* CSS
* JavaScript
* Webpack
* ESLint


## Future Additions
There are so many ways to grow this site. Several examples could be:
1. Add a Pantry: This addiction would add logic and functionality to determine whether a user's pantry has enough ingredients to cook a given meal. And what the user still needs to cook that mean!

2. 3rd Party Library: Use a 3rd party library to improve user experience - especialy a carouselthat could rotate through recipes. Or an extension to improve our  modal.

3. Rating System: Favoriting recipes is nice, but implementing a rating system would be even more helpful for a user! This could include a 5 star rating system and a way to leave reviews. 
