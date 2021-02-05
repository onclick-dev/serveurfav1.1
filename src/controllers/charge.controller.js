'use strict';
const Charge = require('../models/charge.model');
exports.findAll = function (req, res) {
  Charge.findAll(function (err, charge) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', charge);
    res.send(charge);
  });
};
exports.create = function (req, res) {
  const new_charge = new Charge(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Charge.create(new_charge, function (err, charge) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "charge added successfully!", data: charge });
    });
  }
};
exports.findById = function (req, res) {
  Charge.findById(req.params.id_ch, function (err, charge) {
    if (err)
      res.send(err);
    res.json(charge);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Charge.update(req.body.id_ch, req.body, function (err, charge) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'charge successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Charge.delete(req.params.id_ch, function (err, charge) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'charge successfully deleted' });
  });
};