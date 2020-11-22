const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/address', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const contacts = require('./api/contact-controller');
const companies = require('./api/company-controller');

app.get('/api/companies', companies.listCompanies);
app.post('/api/companies', companies.createCompany);

app.get('/api/contacts', contacts.listContacts);
app.post('/api/contacts', contacts.createContact);

// This serves all files placed in the /build
app.use(express.static('build'));

// Include your own logic here (so it has precedence over the wildcard
// route below)

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'build', 'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("Server is now listening on port 8080!");
})
