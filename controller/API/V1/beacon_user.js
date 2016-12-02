var express = require('express');
var router = express.Router();
var beacon_user = require('./../../../models/beacon_user');
/**
 * Created by Aldi on 11/9/2016.
 */

module.exports = function (app) {

    app.post('/api/v1/addcounter',beacon_user.addCounter);

};