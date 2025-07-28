class Pet {
  constructor({ id, name, species, age, price }) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.age = age;
    this.price = price;
  }

  validate() {
    if (!this.name) throw new Error("Name is required");
    if (!this.species) throw new Error("Species is required");
    if (!this.age || this.age < 0) throw new Error("Valid age is required");
    if (!this.price || this.price < 0)
      throw new Error("Valid price is required");
  }
}

module.exports = Pet;
