'use strict';
var dbConn = require('./../../config/db.config');
//transaction object create


var Transaction = function (transaction) {
  this.client = transaction.client;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Transaction.create = function (newTran, result) {
  dbConn.query("INSERT INTO transactions set ?", newTran, function (err, res) {
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
Transaction.findById = function (id_tr, result) {
  dbConn.query("Select * from transactions where id_tr = ? ", id_tr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Transaction.findAll = function (result) {
  dbConn.query("Select * from transactions", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('transactions : ', res);
      result(null, res);
    }
  });
};
// display add transaction page  (`nom`,`reference`,`categorie`,`prix`,`disponibilite`,`description`

Transaction.update = function (id_tr, change, result) {
  dbConn.query("UPDATE transactions SET client=? WHERE id_tr = ?", [transaction.client, id_tr], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Transaction.delete = function (id_tr, result) {
  dbConn.query("DELETE FROM transactions WHERE id_tr = ?", [id_tr], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Transaction;




