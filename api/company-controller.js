const Company = require('./company-model');

module.exports = {
  listCompanies: (req, res) => {
    Company.find().then(records => res.send(records));
  },

  createCompany: (req, res) => {
    const company = new Company(req.body);
    company.save()
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
  }
}