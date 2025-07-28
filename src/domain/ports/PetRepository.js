class PetRepository {
  async create(pet) {
    throw new Error("PetRepository.create not implemented");
  }

  async findAll() {
    throw new Error("PetRepository.findAll not implemented");
  }

  async findById(id) {
    throw new Error("PetRepository.findById not implemented");
  }

  async update(id, pet) {
    throw new Error("PetRepository.update not implemented");
  }

  async delete(id) {
    throw new Error("PetRepository.delete not implemented");
  }
}

module.exports = PetRepository;
