'use strict';
var dbConn = require('./../../config/db.config');


var Facture = function (facture) {
  this.id_client = facture.id_client;
  this.Numero = facture.Numero;
  this.payement = facture.payement;
  this.Societe = facture.Societe;
  this.Adresse = facture.Adresse;
  this.I_unique = facture.I_unique;
  this.STotal = facture.STotal;

  this.totalcharge = facture.totalcharge;
  this.STHonoraires = facture.STHonoraires;
  this.STHon = facture.STHon;
  this.frac = facture.frac;
  this.REMISE = facture.REMISE;
  this.sous_total = facture.sous_total;
  this.ttva = facture.ttva;
  this.total = facture.total;
  this.enlettre = facture.enlettre;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Facture.create = function (newFac, result) {
  dbConn.query("INSERT INTO factures set ?", newFac, function (err, res) {
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

Facture.findById = function (id, result) {
  dbConn.query("Select * from factures where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Facture.findByclient = function (id_client, result) {
  dbConn.query("Select * from factures where id_client = ? ", id_client, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Facture.findAll = function (result) {
  dbConn.query("Select * from factures", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('factures : ', res);
      result(null, res);
    }
  });
};
Facture.update = function (id, facture, result) {
  dbConn.query("UPDATE factures SET Numero=?,payement =?,Societe =?,Adresse=?,I_unique=?,totalcharge=?,STHonoraires =?,STHon=?,frac=?,REMISE=?,ttva =?,total=?,enlettre=? WHERE id = ?", [facture.Numero,facture.payement, facture.Societe, facture.Adresse, facture.I_unique, facture.Numero, facture.Societe, facture.Adresse, facture.I_unique, facture.totalcharge, facture.STHonoraires, facture.STHon, facture.frac, facture.REMISE, facture.ttva, facture.total, facture.enlettre, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Facture.delete = function (id, result) {
  dbConn.query("DELETE FROM factures WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = Facture;




