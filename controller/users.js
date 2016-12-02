var express = require('express');
var router = express.Router();
var connection = require('./../models/databaseConnection');

/* GET users listing. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM EMPLOYEES', function (err, rows, fields) {
        res.render('users', {user: rows, title:'User List'});
        console.log(rows);
    });
});

module.exports = router;
