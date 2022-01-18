export default class Recipe {
  private id: string;
  private description: string;
  private value: number;
  private date: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
  }

  setId(id: string) {
    if (id === '') {
      throw new Error('Id cannot be empty');
    }
    this.id = id;
  }
}
