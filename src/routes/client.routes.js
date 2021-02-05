const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller');
// Retrieve all produit
router.get('/', clientController.findAll);
// Create a new produit
router.post('/', clientController.create);
// Retrieve a single produit with id
router.get('/:id_client', clientController.findById);
// Update a produit with id
router.put('/', clientController.update);
// Delete a produit with id
router.delete('/:id_client', clientController.delete);
module.exports = router