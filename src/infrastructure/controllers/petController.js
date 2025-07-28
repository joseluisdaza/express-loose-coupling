const PetService = require("../../application/services/PetService");
// const MongoPetRepository = require("../repositories/MongoPetRepository");
const MongoPetRepository = require("./repositories/mongoPetRepository");

// Initialize dependencies
const petRepository = new MongoPetRepository();
const petService = new PetService(petRepository);

exports.createPet = async (req, res) => {
  try {
    const pet = await petService.createPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPets = async (req, res) => {
  try {
    const pets = await petService.getAllPets();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id);
    res.status(200).json(pet);
  } catch (error) {
    if (error.message === "Pet not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await petService.updatePet(req.params.id, req.body);
    res.status(200).json(pet);
  } catch (error) {
    if (error.message === "Pet not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

exports.deletePet = async (req, res) => {
  try {
    await petService.deletePet(req.params.id);
    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    if (error.message === "Pet not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
