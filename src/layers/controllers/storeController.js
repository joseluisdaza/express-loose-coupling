
const Pet = require('../models/pet.js');

exports.getAvailablePets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkout = async (req, res) => {
    const { petIds } = req.body;

    if (!petIds || !Array.isArray(petIds)) {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    try {
        const pets = await Pet.find({ '_id': { $in: petIds } });

        if (pets.length !== petIds.length) {
            return res.status(404).json({ message: 'One or more pets not found' });
        }

        // This is a simplified checkout process.
        // In a real application, you would have more complex logic here, 
        // such as creating an order, processing payment, and updating inventory.

        res.status(200).json({ message: 'Checkout successful', pets });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
