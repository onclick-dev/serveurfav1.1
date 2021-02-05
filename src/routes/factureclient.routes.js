const express = require('express')
const router = express.Router()
const factureclientController = require('../controllers/factureclient.controller');
// Retrieve all produit
router.get('/', factureclientController.findAll);
// Create a new produit
router.post('/', factureclientController.create);
// Retrieve a single produit with id
router.get('/:id', factureclientController.findByclient);


// Update a produit with id
router.put('/', factureclientController.update);
// Delete a produit with id
router.delete('/:id', factureclientController.delete);
module.exports = router