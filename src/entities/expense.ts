export default class Expense {
  id: string;
  description: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
    this.setDescription(description);
  }

  setId(id: string) {
    if (id === '' || id === null) {
      throw new Error('Id cannot be empty');
    }
    this.id = id;
  }

  setDescription(description: string) {
    if (description === '' || description === null) {
      throw new Error('Description cannot be empty');
    }
    this.description = description;
  }
}
