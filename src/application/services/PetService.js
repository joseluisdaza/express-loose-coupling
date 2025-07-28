// const Pet = require("../../domain/models/Pet");

const Pet = require("../../domain/models/Pet");
class PetService {
  constructor(petRepository) {
    this.petRepository = petRepository;
  }

  async createPet(petData) {
    const pet = new Pet(petData);
    pet.validate();
    return await this.petRepository.create(pet);
  }

  async getAllPets() {
    return await this.petRepository.findAll();
  }

  async getPetById(id) {
    const pet = await this.petRepository.findById(id);
    if (!pet) {
      throw new Error("Pet not found");
    }
    return pet;
  }

  async updatePet(id, petData) {
    const existingPet = await this.getPetById(id);
    const updatedPet = new Pet({ ...existingPet, ...petData });
    updatedPet.validate();
    return await this.petRepository.update(id, updatedPet);
  }

  async deletePet(id) {
    const pet = await this.getPetById(id);
    await this.petRepository.delete(id);
    return pet;
  }
}

module.exports = PetService;
