'use strict';

var dbConn = require('./../../config/db.config');

//clients object create

// display add client page  (`Societe`,`reference`,`categorie`,`prix`,`disponibilite`,`description`




var Client = function (client) {
  this.Societe = client.Societe;
  this.I_unique = client.I_unique;
  this.Tel = client.Tel;
  this.Email = client.Email;
  this.Adresse = client.Adresse;
  this.TVA = client.TVA;
  this.Gerant = client.Gerant;
  this.Forme_juridique = client.Forme_juridique;
  this.Fodec = client.Fodec;
  this.Exonore = client.Exonore;
  this.Capital = client.Capital;
  this.created_at = new Date();
  this.updated_at = new Date();

};

Client.create = function (newCli, result) {

  dbConn.query("INSERT INTO clients set ?", newCli, function (err, res) {

    if (err) {

      console.log("error: ", err);

      result(err, null);

    }

    else {

      console.log(res.insertId_client);

      result(null, res.insertId_client);

    }

  });

};

Client.findById = function (id_client, result) {

  dbConn.query("Select * from clients where id_client = ? ", id_client, function (err, res) {

    if (err) {

      console.log("error: ", err);

      result(err, null);

    }

    else {

      result(null, res);

    }

  });

};

Client.findAll = function (result) {

  dbConn.query("Select * from clients", function (err, res) {

    if (err) {

      console.log("error: ", err);

      result(null, err);

    }

    else {

      console.log('clients : ', res);

      result(null, res);

    }

  });

};





Client.update = function (id_client, client, result) {

  dbConn.query("UPDATE clients SET Societe=?,I_unique=?,Tel=?,Email=?,Adresse=?,TVA=?,Gerant=?,Forme_juridique=?,Fodec=?,Exonore=?,Capital=? WHERE id_client = ?", [client.Societe, client.I_unique, client.Tel, client.Email, client.Adresse, client.TVA, client.Gerant, client.Forme_juridique, client.Fodec, client.Exonore, client.Capital, id_client], function (err, res) {

    if (err) {

      console.log("error: ", err);

      result(null, err);

    } else {

      result(null, res);

    }

  });

};

Client.delete = function (id_client, result) {

  dbConn.query("DELETE FROM clients WHERE id_client = ?", [id_client], function (err, res) {

    if (err) {

      console.log("error: ", err);

      result(null, err);

    }

    else {

      result(null, res);

    }

  });

};

module.exports = Client;