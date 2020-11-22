const Contact = require('./contact-model');

module.exports = {
  listContacts: async (req, res) => {
    try {
      const ci   
    } catch (error) {
      
    }
    Contact.find().then(records => res.send(records));
  },

  createContact: (req, res) => {
    const contact = new Contact(req.body);
    contact.save()
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
  }
}