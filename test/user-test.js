import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { userTestData } from '../src/data/test-user-data';
import { recipeTestData } from '../src/data/test-recipe-data';

describe('User', () => {
  let user;
  let recipe1;
  let recipe2;

  beforeEach('Instantiate user', () => {
    user = new User(userTestData[0]);
    recipe1 = new Recipe(recipeTestData[0]);
    recipe2 = new Recipe(recipeTestData[1]);
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('Should have a name', () => {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('Should have an id', () => {
    expect(user.id).to.equal(1);
  });

  it('Should have an array that holds favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('Should be able to add to favorite recipes', () => {
    user.addFavoriteRecipe(recipe1)
    expect(user.favoriteRecipes).to.deep.equal(
      [{
        'id': 595736,
        'image': 'potato.org',
        'ingredients': [
          {
            "id": 20081,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 1,
              "unit": "tsp"
            }
          }
        ],
        'instructions': [
          {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}
        ],
        'name': 'Whole Grain Bread',
        'tags': ['bread']
      }]
    );
  });

  it('Should not add a favorite recipe more than once', () => {
    user.addFavoriteRecipe(recipe1)
    user.addFavoriteRecipe(recipe1)
    expect(user.favoriteRecipes).to.deep.equal(
      [{
        'id': 595736,
        'image': 'potato.org',
        'ingredients': [
          {
            "id": 20081,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 1,
              "unit": "tsp"
            }
          }
        ],
        'instructions': [
          {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}
        ],
        'name': 'Whole Grain Bread',
        'tags': ['bread']
      }]
    );
  });

   it('Should be able to remove from favorite recipes', () => {
    user.addFavoriteRecipe(595736, recipeTestData)
    user.removeFavoriteRecipe(595736)
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('Should have an array that holds recipes to cook this week', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should be able to add recipes to cook this week', () => {
    user.addToWeeklyMenu(recipe1);
    expect(user.recipesToCook).to.deep.equal([
      {
        'id': 595736,
        'image': 'potato.org',
        'ingredients': [
          {
            "id": 20081,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 1,
              "unit": "tsp"
            }
          }
        ],
        'instructions': [
          {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}
        ],
        'name': 'Whole Grain Bread',
        'tags': ['bread']
      }
    ]);
  });

  it('Should not add duplicate recipes to weekly menu', () => {
    user.addToWeeklyMenu(recipe1);
    user.addToWeeklyMenu(recipe1);
    expect(user.recipesToCook).to.deep.equal([
      {
        'id': 595736,
        'image': 'potato.org',
        'ingredients': [
          {
            "id": 20081,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 1,
              "unit": "tsp"
            }
          }
        ],
        'instructions': [
          {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}
        ],
        'name': 'Whole Grain Bread',
        'tags': ['bread']
      }
    ]);
  });

  it('Should be able to remove recipes from weekly menu', () => {
   user.addToWeeklyMenu(recipe1)
   user.removeFromWeeklyMenu(recipe1)
   expect(user.favoriteRecipes).to.deep.equal([]);
 });

  it('Should be able to filter favorite recipes by tag', () => {
    user.addFavoriteRecipe(recipe1)
    user.addFavoriteRecipe(recipe2)
    const filteredFavRecipes = user.filterFavoriteRecipeByTag('bread')
    expect(filteredFavRecipes).to.deep.equal([
     {
       'id': 595736,
       'image': 'potato.org',
       'ingredients': [
         {
           "id": 20081,
           "quantity": {
             "amount": 2,
             "unit": "c"
           }
         },
         {
           "id": 18372,
           "quantity": {
             "amount": 1,
             "unit": "tsp"
           }
         }
       ],
       'instructions': [
         {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
         {"instruction": "Mix with warm water", "number": 2}
       ],
       'name': 'Whole Grain Bread',
       'tags': ['bread']
     }
   ]);
 });
  // it('Should be able to filter favorite recipes by name, ingredients, tag', () => {
  //   expect().to.();
  // });

});
