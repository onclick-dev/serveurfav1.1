'use strict';
var dbConn = require('./../../config/db.config');
//honoraire object create

var Honoraire = function (honoraire) {
  this.Designation = honoraire.Designation;
  this.Reference = honoraire.Reference;
  this.Prix = honoraire.Prix;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Honoraire.create = function (newHon, result) {
  dbConn.query("INSERT INTO honoraires set ?", newHon, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId_hon);
      result(null, res.insertId_hon);
    }
  });
};
Honoraire.findById = function (id_hon, result) {
  dbConn.query("Select * from honoraires where id_hon = ? ", id_hon, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Honoraire.findAll = function (result) {
  dbConn.query("Select * from honoraires", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('honoraires : ', res);
      result(null, res);
    }
  });
};
// display add honoraire page  (`nom`,`Referenceerence`,`categorie`,`prix`,`disponibilite`,`description`

Honoraire.update = function (id_hon, honoraire, result) {
  dbConn.query("UPDATE honoraires SET Designation=?,Reference=?,Prix=?WHERE id_hon = ?", [honoraire.Designation, honoraire.Reference, honoraire.Prix, id_hon], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Honoraire.delete = function (id_hon, result) {
  dbConn.query("DELETE FROM honoraires WHERE id_hon = ?", [id_hon], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Honoraire;




