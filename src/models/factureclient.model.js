'use strict';
var dbConn = require('./../../config/db.config');


var Facture = function (facture) {
  this.id_cli = facture.id_cli;
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
  dbConn.query("INSERT INTO factureclient set ?", newFac, function (err, res) {
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



Facture.findByclient = function (id_cli, result) {
  dbConn.query("Select * from factureclient where id_cli=?",+id_cli, function (err, res) {
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
  dbConn.query("Select * from factureclient", function (err, res) {
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
  dbConn.query("UPDATE factureclient SET Numero=?,payement =?,Societe =?,Adresse=?,I_unique=?,totalcharge=?,STHonoraires =?,STHon=?,frac=?,REMISE=?,ttva =?,total=?,enlettre=? WHERE id = ?", [facture.Numero,facture.payement, facture.Societe, facture.Adresse, facture.I_unique, facture.Numero, facture.Societe, facture.Adresse, facture.I_unique, facture.totalcharge, facture.STHonoraires, facture.STHon, facture.frac, facture.REMISE, facture.ttva, facture.total, facture.enlettre, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Facture.delete = function (id, result) {
  dbConn.query("DELETE FROM factureclient WHERE id = ?", [id], function (err, res) {
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




