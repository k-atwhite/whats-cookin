import { expect } from 'chai';
import User from '../src/classes/User';
import { userTestData } from '../src/data/test-user-data.js';

describe('User', () => {
let user

  beforeEach('Instantiate user', () => {
    user = new User(testUsers[0]);
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('Should have a name', () => {
    expect(user.name).to.equal();
  });

  it('Should have an id', () => {
    expect(user.id).to.equal();
  });

  it('Should have an array that holds favorite recipes', () => {
    expect(user.favoriteRecipes).to.be.an('array');
  });

  it('Should be able to add to favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal();
  });

   it('Should be able to remove from favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal();
  });


  it('Should have an array that holds recipes to cook this week', () => {
    expect(user.recipesToCook).to.be.an('array');
  });
});

  it('Should be able to filter favorite recipes by name, ingredients, tag', () => {
    expect().to.();
  });
