'use strict';
const Change = require('../models/change.model');
exports.findAll = function (req, res) {
  Change.findAll(function (err, change) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', change);
    res.send(change);
  });
};
exports.create = function (req, res) {
  const new_change = new Change(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Change.create(new_change, function (err, change) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "change added successfully!", data: change });
    });
  }
};

exports.findByclient = function (req, res) {
  Change.findByclient(req.params.id_tr, function (err, change) {
    if (err)
      res.send(err);
    res.json(change);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Change.update(req.body.id_chan,req.body, function (err, change) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'change successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  Change.delete(req.params.id_chan, function (err, change) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'change successfully deleted' });
  });
};