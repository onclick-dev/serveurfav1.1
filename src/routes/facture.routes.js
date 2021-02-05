const express = require('express')
const router = express.Router()
const factureController = require('../controllers/facture.controller');
// Retrieve all produit
router.get('/', factureController.findAll);
// Create a new produit
router.post('/', factureController.create);
// Retrieve a single produit with id
router.get('/:id', factureController.findById);
router.get('/', factureController.findByclient);


// Update a produit with id
router.put('/', factureController.update);
// Delete a produit with id
router.delete('/:id', factureController.delete);
module.exports = router