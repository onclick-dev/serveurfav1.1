const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())



app.use(cors());

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require produit routes
const clientRoutes = require('./src/routes/client.routes');
const chargeRoutes = require('./src/routes/charge.routes');
const factureRoutes = require('./src/routes/facture.routes');
const factureclientRoutes = require('./src/routes/factureclient.routes');

const honoraireRoutes = require('./src/routes/honoraire.routes');
const changeRoutes = require('./src/routes/change.routes');
const selectedchargeRoutes = require('./src/routes/selectedcharge.routes');
const selectedhonoraireRoutes = require('./src/routes/selectedhonoraire.routes');
const transactionRoutes = require('./src/routes/transaction.routes');

// using as middleware
app.use('/api/v1/clients', clientRoutes);
app.use('/api/v1/charges', chargeRoutes);
app.use('/api/v1/factures', factureRoutes);
app.use('/api/v1/factureclient', factureclientRoutes);

app.use('/api/v1/honoraires', honoraireRoutes);
app.use('/api/v1/changes', changeRoutes);
app.use('/api/v1/transactions', transactionRoutes);
app.use('/api/v1/selectedcharges', selectedchargeRoutes);
app.use('/api/v1/selectedhonoraires', selectedhonoraireRoutes);



// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 