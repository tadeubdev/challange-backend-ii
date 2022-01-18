import Recipe from "../../src/entities/recipe";

describe('Recipies', () => {
  test('ensure it can create an object', () => {
    const sut = new Recipe();

    expect(sut).toBeInstanceOf(Recipe);
  });
});
