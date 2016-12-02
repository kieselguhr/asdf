/**
 * Created by Aldi on 11/16/2016.
 */
var connection = require('./databaseConnection');
module.exports = {
    'beaconList': function (req, res) {
        connection.query('SELECT * FROM BEACON', function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'editMessage': function (req, res) {
        var anewmessage = {
            uuid: req.body.uuid,
            minor: req.body.minor,
            major: req.body.major,
            message: req.body.message
        };
        connection.query('SELECT * FROM BEACON', function (err, rows) {
            if(rows.length == 0){
                console.log('not exist');
                connection.query('INSERT INTO beacon SET ?', anewmessage, function(err){
                    if(err) {
                        res.send(err);
                    } else {
                        res.send(200);
                    }
                });
            } else {
                console.log('exist');
                connection.query('UPDATE beacon SET message = ? where uuid = ?', [anewmessage.message, anewmessage.uuid], function(err){
                    if(err){
                        res.send(err);
                    } else {
                        res.send(200);
                    }
                });
            }
        });
    },
    'getPromo':function (req, res) {
        var uuid = req.query.uuid;
        console.log(uuid);
        connection.query('SELECT message from beacon where uuid = ? ', uuid, function (err, rows) {
            //console.log('Success');
            if(err){
                res.sendStatus(404);
            }
            res.json(rows);


        });
    }
};