
var express = require('express');
var router = express.Router();
var connection = require('./../models/databaseConnection');

router.post('/', function (req, res) {
    var anewmessage = {
        uuid: req.body.uuid,
        minor: req.body.minor,
        major: req.body.major,
        message: req.body.message
    };
    connection.query('SELECT * FROM beacon WHERE UUID = ?' , anewmessage.uuid, function (err, rows) {
        if(rows.length == 0){
            console.log('not exist');
            connection.query('INSERT INTO beacon SET ?', anewmessage, function(err){
                if(err) {
                    res.sendStatus(err);
                } else {
                    res.sendStatus(200);
                }
            });
        } else {
            console.log('exist');
            connection.query('UPDATE beacon SET message = ? where uuid = ?', [anewmessage.message, anewmessage.uuid], function(err){
               if(err){
                   res.sendStatus(err);
               } else {
                   res.sendStatus(200);
               }
            });
        }
    });
});

module.exports = router;