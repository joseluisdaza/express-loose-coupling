
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Pet', petSchema);
