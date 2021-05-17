import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {

  let ingredient;

  beforeEach('Instantiate ingredient', () => {
    ingredient = new Ingredient(1123, 'eggs', 472);
  });

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('Should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('Should have an id', () => {
    expect(ingredient.id).to.equal(1123);
  });

  it('Should have an id that is a number', () => {
    expect(ingredient.id).to.be.a('number');
  });

  it('Should have an name', () => {
    expect(ingredient.name).to.equal('eggs');
  });

  it('Should have an name that is a string', () => {
    expect(ingredient.name).to.be.a('string');
  });

  it('Should have an cost per unit in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(472);
  });

  it('Should have a cost that is a number', () => {
    expect(ingredient.estimatedCostInCents).to.be.a('number');
  });
})
