const express = require('express')
const router = express.Router()
const honoraireController = require('../controllers/honoraire.controller');
// Retrieve all produit
router.get('/', honoraireController.findAll);
// Create a new produit
router.post('/', honoraireController.create);
// Retrieve a single produit with id
router.get('/:id_hon', honoraireController.findById);
// Update a produit with id
router.put('/', honoraireController.update);
// Delete a produit with id
router.delete('/:id_hon', honoraireController.delete);
module.exports = router