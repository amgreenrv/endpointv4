const Joi = require('joi'); //validates
const express = require('express');
const app = express();
const books = require('./routes/books');
const home = require('./routes/home');
const bodyParser = require('body-parser');
const sqlDatabase = require('./database');
const google = require('./google');

app.set('view engine', 'pug');
app.set('views', './views')

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false})); // key=value&key=value
app.use(express.static('public'));
app.use('/api/books', books);
app.use('/', home);


//MySQL Database connection
sqlDatabase.execute('SELECT * FROM books')
    .then(result => {
    //console.log(result[0]);
})
    .catch(err => {
    console.log(err);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));
