'use strict';
const Selectedcharge = require('../models/selectedcharge.model');
exports.findAll = function (req, res) {
  Selectedcharge.findAll(function (err, selectedcharge) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', selectedcharge);
    res.send(selectedcharge);
  });
};
exports.create = function (req, res) {
  const new_selectedcharge = new Selectedcharge(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Selectedcharge.create(new_selectedcharge, function (err, selectedcharge) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "selectedcharge  added successfully!", data: selectedcharge });
    });
  }
};
exports.findByIdfacture = function (req, res) {
  Selectedcharge.findByIdfacture(req.params.id_facture, function (err, selectedcharge) {
    if (err)
      res.send(err);
    res.json(selectedcharge);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Selectedcharge.update(req.body.id_ch, req.body, function (err, selectedcharge) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Selectedcharge  successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Selectedcharge.delete(req.params.id_ch, function (err, selectedcharge) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'selectedcharge  successfully deleted' });
  });
};