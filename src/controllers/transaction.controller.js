'use strict';
const Transaction = require('../models/transaction.model');
exports.findAll = function (req, res) {
  Transaction.findAll(function (err, transaction) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', transaction);
    res.send(transaction);
  });
};
exports.create = function (req, res) {
  const new_transaction = new Transaction(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Transaction.create(new_transaction, function (err, transaction) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "transaction added successfully!", data: transaction });
    });
  }
};
exports.findById = function (req, res) {
  Transaction.findById(req.params.id_tr, function (err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Transaction.update(req.body.id_tr, req.body, function (err, transaction) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'transaction successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Transaction.delete(req.params.id_tr, function (err, transaction) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'transaction successfully deleted' });
  });
};