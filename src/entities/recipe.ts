export default class Recipe {
  private id: string;
  private description: string;
  private value: number;
  private date: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
    this.setDescription(description);
    this.setValue(value);
    this.setDate(date);
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

  setValue(value: number) {
    if (value === 0) {
      throw new Error('Value cannot be empty');
    }
    this.value = value;
  }

  setDate(date: string) {
    if (date === '') {
      throw new Error('Date cannot be empty');
    }
    let isValidDate = Date.parse(date);
    if (isNaN(isValidDate)) {
      throw new Error('Date is not valid');
    }
    this.date = date;
  }
}
