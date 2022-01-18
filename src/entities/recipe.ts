export default class Recipe {
  id: string;
  description: string;
  value: number;
  date: string;

  constructor(id: string, description: string, value: number, date: string) {
    this.setId(id);
    this.setDescription(description);
    this.setValue(value);
    this.setDate(date);
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

  setValue(value: number) {
    if (value === 0 || value === null) {
      throw new Error('Value cannot be empty');
    }
    this.value = value;
  }

  setDate(date: string) {
    if (date === '' || date === null) {
      throw new Error('Date cannot be empty');
    }
    let isValidDate = Date.parse(date);
    if (isNaN(isValidDate)) {
      throw new Error('Date is not valid');
    }
    this.date = date;
  }
}
