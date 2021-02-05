'use strict';
const Facture = require('../models/factureclient.model');
exports.findAll = function (req, res) {
  Facture.findAll(function (err, facture) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', facture);
    res.send(facture);
  });
};




exports.create = function (req, res) {
  const new_facture = new Facture(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Facture.create(new_facture, function (err, facture) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "facture added successfully!", data: facture });
    });
  }
};

exports.findByclient = function (req, res) {
  Facture.findByclient(req.params.id, function (err, facture) {
    if (err)
      res.send(err);
    res.json(facture);
   
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Facture.update(req.body.id,req.body, function (err, facture) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'facture successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Facture.delete(req.params.id, function (err, facture) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'facture successfully deleted' });
  });
};