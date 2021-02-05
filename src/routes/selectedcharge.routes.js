const express = require('express')
const router = express.Router()
const selectedchargeController = require('../controllers/selectedcharge.controller');
// Retrieve all produit
router.get('/', selectedchargeController.findAll);
// Create a new produit
router.post('/', selectedchargeController.create);
// Retrieve a single produit with id
router.get('/:id_facture', selectedchargeController.findByIdfacture);
// Update a produit with id
router.put('/', selectedchargeController.update);
// Delete a produit with id
router.delete('/:id_ch', selectedchargeController.delete);
module.exports = router