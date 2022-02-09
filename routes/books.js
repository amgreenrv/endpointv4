const express = require('express');
const router = express.Router();

const books = [
    {id: 1, title: 'title1', author: 'author1', publisher: 'publisher1'},
    {id: 2, title: 'title2', author: 'author2', publisher: 'publisher2'},
    {id: 3, title: 'title3', author: 'author3', publisher: 'publisher3'},
    {id: 1, title: 'title4', author: 'author4', publisher: 'publisher4'},
    {id: 2, title: 'title5', author: 'author5', publisher: 'publisher5'},
    {id: 3, title: 'title6', author: 'author6', publisher: 'publisher6'}
];

//GET books path
router.get('/', (req, res) => {
    res.send(books);
});

//POST books path
router.post('/', (req, res) => {
    const { error } = validateBook(req.body); //result.error with destructuring
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const book = {
        id: bookstore.length +1,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher
    };
    books.push(book);
    res.send(book);
});


//GET author path
router.get('/:author', (req, res) => {
    const book = books.find(b => b.author === req.params.author);
    if (!book) return res.status(404).send('No books for this author were found.');
    res.send(book);
});


function validateBook(book) {
    const schema = {
        title: Joi.string().required(),
        author: Joi.string().required(),
        publisher: Joi.string().required()
    };

    return Joi.validate(book, schema);
}

module.exports = router;