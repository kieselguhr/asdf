/**
 * Created by Aldi on 11/7/2016.
 */
var mysql = require('mysql');
module.exports = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'beacon'
});