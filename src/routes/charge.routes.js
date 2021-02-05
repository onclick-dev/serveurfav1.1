const express = require('express')
const router = express.Router()
const chargeController = require('../controllers/charge.controller');
// Retrieve all produit
router.get('/', chargeController.findAll);
// Create a new produit
router.post('/', chargeController.create);
// Retrieve a single produit with id
router.get('/:id_ch', chargeController.findById);
// Update a produit with id
router.put('/', chargeController.update);
// Delete a produit with id
router.delete('/:id_ch', chargeController.delete);
module.exports = router