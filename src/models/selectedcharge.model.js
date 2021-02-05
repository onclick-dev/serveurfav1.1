'use strict';
var dbConn = require('../../config/db.config');
//charge object create


var Selectedcharge = function (selectedcharge) {
  this.descriptions = selectedcharge.descriptions;
  this.prices = selectedcharge.prices;
  this.id_facture = selectedcharge.id_facture;

  this.created_at = new Date();
  this.updated_at = new Date();
};
Selectedcharge.create = function (newChar, result) {
  dbConn.query("INSERT INTO selectedcharges set ?", newChar, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Selectedcharge.findByIdfacture = function (id_facture, result) {
  dbConn.query("Select * from selectedcharges where id_facture = ? ", [id_facture], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
      console.log(res);
    }
  });
};
Selectedcharge.findAll = function (result) {
  dbConn.query("Select * from selectedcharges", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('selectedcharges : ', res);
      result(null, res);
    }
  });
};
// display add charge page  (`nom`,`reference`,`categorie`,`prix`,`disponibilite`,`description`

Selectedcharge.update = function (id_ch, selectedcharge, result) {
  dbConn.query("UPDATE selectedcharges SET descriptions=?,prices=? WHERE id_ch = ?", [selectedcharge.descriptions, selectedcharge.prices, id_ch], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Selectedcharge.delete = function (id, result) {
  dbConn.query("DELETE FROM selectedcharges WHERE id_ch = ?", [id_ch], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Selectedcharge;




