export default class Recipe {
  private id: string;
  private description: string;
  private value: number;
  private date: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
    this.setDescription(description);
  }

  setId(id: string) {
    if (id === '') {
      throw new Error('Id cannot be empty');
    }
    this.id = id;
  }

  setDescription(description: string) {
    if (description === '') {
      throw new Error('Description cannot be empty');
    }
    this.description = description;
  }
}
