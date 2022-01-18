import Expense from "../../src/entities/expense";

describe('Expense', () => {
  it('ensure it create an instance', () => {
    expect(new Expense()).toBeTruthy();
  });
});
