var express = require('express');
var router = express.Router();
var beacon = require('./../../../models/beacon');


module.exports = function (app) {
   app.get('/listbeacon', function (req, res) {
      res.render('beacon');
   });

};
/**
 * Created by Aldi on 11/9/2016.
 */
