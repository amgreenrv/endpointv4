const mysql = require('mysql2');
const fetch = require('node-fetch');
let search = 'Danielle Steel';

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

//Author name is variable, but hard coded in a value above, how to make that more generateable on a UI?


//Fetch Path
fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&limit=10`)
  .then(response => {
    return response.json();
  })
  .then(data => {

    const bookInfo0 = data.items[0];
    const bookInfo1 = data.items[1];
    const bookInfo2 = data.items[2];
    const bookInfo3 = data.items[3];
    const bookInfo4 = data.items[4];

    const comboTitle0 = (bookInfo0.volumeInfo.title);
    const comboAuthor0 = (bookInfo0.volumeInfo.authors);
    const comboPublisher0 = (bookInfo0.volumeInfo.publisher);

    const comboTitle1 = (bookInfo1.volumeInfo.title);
    const comboAuthor1 = (bookInfo1.volumeInfo.authors);
    const comboPublisher1 = (bookInfo1.volumeInfo.publisher);

    const comboTitle2 = (bookInfo2.volumeInfo.title);
    const comboAuthor2 = (bookInfo2.volumeInfo.authors);
    const comboPublisher2 = (bookInfo2.volumeInfo.publisher);

    const comboTitle3 = (bookInfo3.volumeInfo.title);
    const comboAuthor3 = (bookInfo3.volumeInfo.authors);
    const comboPublisher3 = (bookInfo3.volumeInfo.publisher);

    const comboTitle4 = (bookInfo4.volumeInfo.title);
    const comboAuthor4 = (bookInfo4.volumeInfo.authors);
    const comboPublisher4 = (bookInfo4.volumeInfo.publisher);



//Question for Nic => Better way to iterate over the array/object?
//Feeling restricted by the [0] in data.items

// Array for Each, struggling to get it to target the right information
//  bookArray.forEach(element => console.log(element));

// let reformattedArray = bookArray.map(obj => {
//   let rObj = {}
//   rObj[obj.title] = obj.title
//   return rObj
// });

// console.log(reformattedArray);

//Manually adding books to the SQL Table
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    

        //Right now, this is going into a single table, this needs to be split out into a books, author, publisher table with SQL.
        //Need a cleaner way to iterate above before trying to add that into it.

        const sql = "INSERT INTO books (title, author, publisher) VALUES ?";
    let values = [
        [comboTitle0, comboAuthor0, comboPublisher0],
        [comboTitle1, comboAuthor1, comboPublisher1],
        [comboTitle2, comboAuthor2, comboPublisher2],
        [comboTitle3, comboAuthor3, comboPublisher3],
        [comboTitle4, comboAuthor4, comboPublisher4]
    ];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

    });

module.exports = con.promise();
