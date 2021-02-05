'use strict';
const Honoraire = require('../models/honoraire.model');
exports.findAll = function (req, res) {
  Honoraire.findAll(function (err, honoraire) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', honoraire);
    res.send(honoraire);
  });
};
exports.create = function (req, res) {
  const new_honoraire = new Honoraire(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Honoraire.create(new_honoraire, function (err, honoraire) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "honoraire added successfully!", data: honoraire });
    });
  }
};
exports.findById = function (req, res) {
  Honoraire.findById(req.params.id_hon, function (err, honoraire) {
    if (err)
      res.send(err);
    res.json(honoraire);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Honoraire.update(req.body.id_hon, req.body, function (err, honoraire) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'honoraire successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Honoraire.delete(req.params.id_hon, function (err, honoraire) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'honoraire successfully deleted' });
  });
};