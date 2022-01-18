import Recipe from "../../src/entities/recipe";

describe('Recipies', () => {
  it('ensure it create an instance', () => {
    expect(new Recipe('any_id', 'any_description', 10.00, '2022-01-18 16:53:00')).toBeTruthy();
  });
  test('ensure it trhows an error if a empty id has been passed', () => {
    expect(() => {
      new Recipe(null, 'any_description', 10.00, '2022-01-18 16:53:00');
    }).toThrowError();
  });
  test('ensure it trhows an error if a empty description has been passed', () => {
    expect(() => {
      new Recipe('any_id', '', 10.00, '2022-01-18 16:53:00');
    }).toThrowError();
  });
  test('ensure it trhows an error if a empty value has been passed', () => {
    expect(() => {
      new Recipe('any_id', 'any_description', 0.00, '2022-01-18 16:53:00');
    }).toThrowError();
  });
  test('ensure it trhows an error if a empty date has been passed', () => {
    expect(() => {
      new Recipe('any_id', 'any_description', 10.00, '');
    }).toThrowError();
  });
  test('ensure it trhows an error if a invalid date has been passed', () => {
    expect(() => {
      new Recipe('any_id', 'any_description', 10.00, '2022-01-35 16:53:00');
    }).toThrowError();
  });
});
