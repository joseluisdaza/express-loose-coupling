const mongoose = require("mongoose");
const Pet = require("../../domain/models/Pet");
const PetRepository = require("../../domain/ports/PetRepository");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
});

const PetModel = mongoose.model("Pet", petSchema);

class MongoPetRepository extends PetRepository {
  async create(pet) {
    const mongoosePet = new PetModel({
      name: pet.name,
      species: pet.species,
      age: pet.age,
      price: pet.price,
    });

    const savedPet = await mongoosePet.save();
    return new Pet({
      id: savedPet._id.toString(),
      name: savedPet.name,
      species: savedPet.species,
      age: savedPet.age,
      price: savedPet.price,
    });
  }

  async findAll() {
    const pets = await PetModel.find();
    return pets.map(
      (pet) =>
        new Pet({
          id: pet._id.toString(),
          name: pet.name,
          species: pet.species,
          age: pet.age,
          price: pet.price,
        })
    );
  }

  async findById(id) {
    const pet = await PetModel.findById(id);
    if (!pet) return null;

    return new Pet({
      id: pet._id.toString(),
      name: pet.name,
      species: pet.species,
      age: pet.age,
      price: pet.price,
    });
  }

  async update(id, petData) {
    const pet = await PetModel.findByIdAndUpdate(
      id,
      {
        name: petData.name,
        species: petData.species,
        age: petData.age,
        price: petData.price,
      },
      { new: true }
    );

    if (!pet) return null;

    return new Pet({
      id: pet._id.toString(),
      name: pet.name,
      species: pet.species,
      age: pet.age,
      price: pet.price,
    });
  }

  async delete(id) {
    const pet = await PetModel.findByIdAndDelete(id);
    if (!pet) return null;

    return new Pet({
      id: pet._id.toString(),
      name: pet.name,
      species: pet.species,
      age: pet.age,
      price: pet.price,
    });
  }
}

module.exports = MongoPetRepository;
