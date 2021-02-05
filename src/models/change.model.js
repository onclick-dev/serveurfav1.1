'use strict';
var dbConn = require('./../../config/db.config');
//charge object create


var Change = function (change) {
  this.id_tr = change.id_tr;
  this.payee = change.payee;
  this.reste = change.reste;
  this.nouveau_solde = change.nouveau_solde;



  this.created_at = new Date();
  this.updated_at = new Date();
};
Change.create = function (newChan, result) {
  dbConn.query("INSERT INTO changes set ?", newChan, function (err, res) {
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

Change.findByclient = function (id_tr, result) {
  dbConn.query("Select * from changes where id_tr = ? ", id_tr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Change.findAll = function (result) {
  dbConn.query("Select * from changes", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('changes : ', res);
      result(null, res);
    }
  });
};
// display add charge page  (`nom`,`reference`,`categorie`,`prix`,`disponibilite`,`description`

Change.update = function (id_chan, change, result) {
  dbConn.query("UPDATE changes SET payee=?,reste=?,nouveau_solde=? WHERE id_chan = ?", [ change.payee, change.reste, change.nouveau_solde, id_chan], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Change.delete = function (id_chan, result) {
  dbConn.query("DELETE FROM changes WHERE id_chan = ?", [id_chan], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Change;




