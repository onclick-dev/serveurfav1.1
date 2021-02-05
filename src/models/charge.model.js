'use strict';
var dbConn = require('./../../config/db.config');
//charge object create


var Charge = function (charge) {
  this.Designations = charge.Designations;
  this.Prix = charge.Prix;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Charge.create = function (newChar, result) {
  dbConn.query("INSERT INTO charges set ?", newChar, function (err, res) {
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
Charge.findById = function (id_ch, result) {
  dbConn.query("Select * from charges where id_ch = ? ", id_ch, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Charge.findAll = function (result) {
  dbConn.query("Select * from charges", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('charges : ', res);
      result(null, res);
    }
  });
};
// display add charge page  (`nom`,`reference`,`categorie`,`prix`,`disponibilite`,`description`

Charge.update = function (id_ch, charge, result) {
  dbConn.query("UPDATE charges SET Designations=?,Prix=? WHERE id_ch = ?", [charge.Designations, charge.Prix, id_ch], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Charge.delete = function (id_ch, result) {
  dbConn.query("DELETE FROM charges WHERE id_ch = ?", [id_ch], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Charge;




