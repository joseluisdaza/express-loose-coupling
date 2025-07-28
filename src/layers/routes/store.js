
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js');

router.get('/pets', storeController.getAvailablePets);
router.post('/checkout', storeController.checkout);

module.exports = router;
