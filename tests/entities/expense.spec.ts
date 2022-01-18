import Expense from "../../src/entities/expense";

describe('Expense', () => {
  it('ensure it create an instance', () => {
    expect(new Expense('any_id', 'any_desc', 10.00, '2021-12-01 12:00:00')).toBeTruthy();
  });
  it('ensure it throws an error when a empty id has been passed', () => {
    expect(() => new Expense(null, 'any_desc', 10.00, '2021-12-01 12:00:00')).toThrowError();
  })
});