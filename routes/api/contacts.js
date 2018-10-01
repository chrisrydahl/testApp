const express = require('express');
const router = express.Router();

// Item Model
const Contact = require('../../models/Contact');

router.post('/', (req, res) => {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message
    });
  
    newContact.save().then(contact => res.json(contact))
    .catch(err => console.log(err));
  });


module.exports = router;