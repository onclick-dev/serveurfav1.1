'use strict';
var dbConn = require('../../config/db.config');
//charge object create


var Selectedhonoraire = function (selectedhonoraire) {
  this.designation = selectedhonoraire.designation;
  this.ref = selectedhonoraire.ref;
  this.price = selectedhonoraire.price;
  this.id_facture = selectedhonoraire.id_facture;



  this.created_at = new Date();
  this.updated_at = new Date();
};
Selectedhonoraire.create = function (newHon, result) {
  dbConn.query("INSERT INTO selectedhonoraires set ?", newHon, function (err, res) {
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

Selectedhonoraire.findByIdfacture = function (id_facture, result) {
  dbConn.query("Select * from selectedhonoraires where id_facture = ? ", [id_facture], function (err, res) {
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

Selectedhonoraire.findAll = function (result) {
  dbConn.query("Select * from selectedhonoraires", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('selectedhonoraires : ', res);
      result(null, res);
    }
  });
};
// display add charge page  (`nom`,`reference`,`categorie`,`prix`,`disponibilite`,`description`

Selectedhonoraire.update = function (id_hon, selectedhonoraire, result) {
  dbConn.query("UPDATE selectedhonoraires SET designation=?,ref=?,price=?WHERE id_hon = ?", [selectedhonoraire.designation, selectedhonoraire.ref, selectedhonoraire.price, id_hon], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Selectedhonoraire.delete = function (id, result) {
  dbConn.query("DELETE FROM selectedhonoraires WHERE id_hon = ?", [id_hon], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Selectedhonoraire;




