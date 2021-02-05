'use strict';
const Selectedhonoraire = require('../models/selectedhonoraire.model');
exports.findAll = function (req, res) {
  Selectedhonoraire.findAll(function (err, selectedhonoraire) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', selectedhonoraire);
    res.send(selectedhonoraire);
  });
};
exports.create = function (req, res) {
  const new_selectedhonoraire = new Selectedhonoraire(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Selectedhonoraire.create(new_selectedhonoraire, function (err, selectedhonoraire) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "selectedhonoraire added successfully!", data: selectedhonoraire });
    });
  }
};

exports.findByIdfacture = function (req, res) {
  Selectedhonoraire.findByIdfacture(req.params.id_facture, function (err, selectedhonoraire) {
    if (err)
      res.send(err);
    res.json(selectedhonoraire);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Selectedhonoraire.update(req.body.id_hon,req.body, function (err, selectedhonoraire) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'selectedhonoraire successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Selectedhonoraire.delete(req.params.id_hon, function (err, selectedhonoraire) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'selectedhonoraire successfully deleted' });
  });
};