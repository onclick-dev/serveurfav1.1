const express = require('express')
const router = express.Router()
const selectedhonoraireController = require('../controllers/selectedhonoraire.controller');
// Retrieve all produit
router.get('/', selectedhonoraireController.findAll);
// Create a new produit
router.post('/', selectedhonoraireController.create);
// Retrieve a single produit with id
// Retrieve a single produit with id
router.get('/:id_facture', selectedhonoraireController.findByIdfacture);
// Update a produit with id
router.put('/', selectedhonoraireController.update);
// Delete a produit with id
router.delete('/:id_hon', selectedhonoraireController.delete);
module.exports = router