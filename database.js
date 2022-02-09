const mysql = require('mysql2');
const jsondata = require('./google');

//Create Connection pool
//const pool = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
 //   database: 'node-ita',
 //   password: 'fallon87'
//});

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-ita',
    password: 'fallon87'
});


///Manually adding books to the SQL Table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql = "INSERT INTO books (title, author, publisher) VALUES ?";
//   let values = [
//     ['Glory in Death', 'J.D. Robb', 'Penguin Books'],
//     ['Dance of Dragons', 'George R.R. Martin', 'Bantam Press'],
//     ['Of Mice and Men', 'John Steinbeck', 'Covivi Friede'],
//     ['Moby Dick', 'Herman Melville', "Harper Brothers"],
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

module.exports = con.promise();
