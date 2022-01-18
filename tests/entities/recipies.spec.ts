import Recipe from "../../src/entities/recipe";

describe('Recipies', () => {
  test('ensure it can create an object', () => {
    const sut = new Recipe('any_id', 'any_description', 0.00, '2022-01-18 16:53:00');

    expect(sut).toBeInstanceOf(Recipe);
  });
  test('ensure it trhows an error if a empty id has been passed', () => {
    expect(() => {
      new Recipe('', 'any_description', 0.00, '2022-01-18 16:53:00');
    }).toThrowError();
  });
  test('ensure it trhows an error if a description id has been passed', () => {
    expect(() => {
      new Recipe('any_id', '', 0.00, '2022-01-18 16:53:00');
    }).toThrowError();
  });
});
