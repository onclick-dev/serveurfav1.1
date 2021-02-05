const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction.controller');
// Retrieve all produit
router.get('/', transactionController.findAll);
// Create a new produit
router.post('/', transactionController.create);
// Retrieve a single produit with id
router.get('/:id_tr', transactionController.findById);

// Update a produit with id
router.put('/', transactionController.update);
// Delete a produit with id
router.delete('/:id_tr', transactionController.delete);
module.exports = router  