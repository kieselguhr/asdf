var express = require('express');
var router = express.Router();
var beacon = require('./../../../models/beacon');
/**
 * Created by Aldi on 11/9/2016.
 */

module.exports = function (app) {

    app.get('/api/v1/listbeacon',beacon.beaconList);
    app.post('/api/v1/editmessage',beacon.editMessage);
    app.get('/api/v1/getpromo',beacon.getPromo);


};