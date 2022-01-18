export default class Expense {
  id: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
  }

  setId(id: string) {
    if (id === '' || id === null) {
      throw new Error('Id cannot be empty');
    }
    this.id = id;
  }
}
