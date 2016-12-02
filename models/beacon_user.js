/**
 * Created by wilbe on 16/11/2016.
 */
var connection = require('./databaseConnection');

module.exports = {
    'addCounter': function (req, res) {
        var uuid = req.body.uuid;
        var fbid = req.body.fbid;
        // y('INSERT into employees set ?', anewuser ,function (err, result)

        connection.query('SELECT counter FROM beacon WHERE uuid = ?', uuid ,function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                var beaconCounter = rows[0].counter;

                connection.query('UPDATE beacon SET counter = ? WHERE uuid = ?', [beaconCounter+1, uuid] ,function (err, rows) {
                    if(err){
                    } else {

                    }
                });

            }
        });

        connection.query('SELECT counter FROM users WHERE facebook_id = ?', fbid ,function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                var beaconCounter = rows[0].counter;
                console.log("beacon counter is" + beaconCounter);

                connection.query('UPDATE users SET counter = ? WHERE facebook_id = ?', [beaconCounter+1, fbid] ,function (err, rows) {
                    if(err){
                        res.status(500).send(err);
                    } else {
                        console.log("SUCCESSS");
                    }
                });

            }
        });

        connection.query('SELECT counter FROM beacon_user WHERE facebook_id = ? AND uuid = ?', [fbid, uuid] ,function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                console.log("length is"+rows.length);
                if(rows.length == 0){
                    connection.query('INSERT INTO beacon_user (facebook_id, uuid, counter) VALUES (?,?,?)', [fbid, uuid, 1] ,function (err, rows) {
                        if(err){
                            res.status(500).send(err);
                        } else {
                        }
                    });
                }
                else{
                    var beaconCounter = rows[0].counter;
                    connection.query('UPDATE beacon_user SET counter = ? WHERE facebook_id = ? AND uuid = ?', [beaconCounter+1, fbid, uuid] ,function (err, rows) {
                        if(err){
                            res.status(500).send(err);
                        } else {
                        }
                    });
                }
            }
        });

        res.status(200).send("");


    }
};
