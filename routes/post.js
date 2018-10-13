const mongoose = require('mongoose');
const router = require('express').Router();
const Message = require('../models/message');
router.post("/api/contact/", (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.message) {
        res.status(400).json({
            "status": 400,
            "success": false,
            "message": "Not enough arguments"
        });
        return;
    }
    let element = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    });
    console.info('Post request with: ' + element.toString());
    element.save(function (err) {
        if (err) {
            console.log('error');
        }
        else {
            console.log(element + 'Element saved successfully');
            res.status(200).json({
                "status": 200,
                "message": "Success"
            });
        }
    })

});

module.exports = router;