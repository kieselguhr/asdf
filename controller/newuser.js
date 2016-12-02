
var express = require('express');
var router = express.Router();
var connection = require('./../models/databaseConnection');
var atime = new Date();
//var gcm = require('node-gcm-service');

router.post('/', function (req, res) {
    var anewuser = {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        email: req.body.email,
        time: atime
    };
    connection.query('INSERT into employees set ?', anewuser ,function (err) {
        if (err) {
            res.sendStatus(err);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;