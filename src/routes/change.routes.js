const express = require('express')
const router = express.Router()
const changeController = require('../controllers/change.controller');
// Retrieve all produit
router.get('/', changeController.findAll);
// Create a new produit
router.post('/', changeController.create);

// Retrieve a single produit with id
router.get('/:id_tr', changeController.findByclient);
// Update a produit with id
router.put('/', changeController.update);
// Delete a produit with id
router.delete('/:id_chan', changeController.delete);
module.exports = router