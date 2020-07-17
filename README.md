# ShoppingListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

`ng generate component component-name --skipTest true` to generate to new component without the testing file.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

<h3>Planning Project</h3>

<div class="main">

<div class="root">
    <h4>Root</h4>
</div>

<div class="header">
    <h4>Header</h4>
</div>

<div class="shoppingList">
    <h4>Shopping-list</h4>
</div>

<div class="shopping-list">
    <h4>Shopping list</h4>
</div>

<div class="shopping-list-edit">
    <h4>Shopping List Edit</h4>
</div>

<div class="ingredient">
    <h4>Ingredient</h4>
</div>

<div class="recipeBook">
    <h4>Recipe Book</h4>
</div>

<div class="recipe-list">
    <h4>Recipe List</h4>
</div>

<div class="recipe-item">
    <h4>Recipe Item</h4>
</div>

<div class="recipe-detail">
    <h4>Recipe Detail</h4>
</div>

<div class="recipe">
    <h4>Recipe</h4>
</div>
</div>

<div class="information-1">
    <h3>Model</h3>
</div>

<div class="information-2">
    <h3>Component</h3>
</div>

<div class="information-3">
    <h3>Features</h3>
</div>

<style>
    *{
    padding: 0;
    margin:0
  }
  
  .main {
    display: grid;
    grid-template-columns: 2fr 0.2fr 2fr;
    height: 100vh;
    width: 100vw;
    grid-gap: 10px;
    grid-template-areas: 
    "root root root"
    "header header header"
    "shoppingList . recipeBook"
    "shopping-list . recipe-list"
     "shopping-list-edit . recipe-item"
    "ingredient . recipe-detail"
    ". . recipe"
    ;
    color: white;
    border: 2px solid black;
}
.root{
    display: flex;
    position: relative;
    background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: root;
    border: 1px solid black;
}    

h4{
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: header;
    border: 1px solid black;
}

.shoppingList {
    display: flex;
    position: relative;
     background-color: #4B1F49;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: shoppingList;
    border: 1px solid black;
}

.recipeBook {
    display: flex;
    position: relative;
     background-color: #4B1F49;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: recipeBook;
    border: 1px solid black;
}

.shopping-list {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: shopping-list;
    border: 1px solid black;
}

.recipe-list {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: recipe-list;
    border: 1px solid black;
}

.shopping-list-edit {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: shopping-list-edit;
    border: 1px solid black;
}

.recipe-item {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: recipe-item;
    border: 1px solid black;
}

.ingredient {
    display: flex;
    position: relative;
     background-color: #E09D69;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: ingredient;
    border: 1px solid black;
}

.recipe-detail {
    display: flex;
    position: relative;
     background-color: #F7862C;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: recipe-detail;
    border: 1px solid black;
}

.recipe{
    display: flex;
    position: relative;
    background-color: #E09D69;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-area: recipe;
    border: 1px solid black;
}

.information-1{
    margin-top : 20px;
    padding : 20px;
    border : 1px solid black;
    background-color: #E09D69;
}

.information-2{
margin-top : 20px;
    padding : 20px;
    border : 1px solid black;
    background-color: #F7862C;
}

.information-3 {
margin-top : 20px;
    padding : 20px;
    border : 1px solid black;
    background-color: #4B1F49;
}

</style>
