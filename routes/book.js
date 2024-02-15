/**This a book controller module.*/

const express = require('express')
// book model (object)
const book = require('../models/book_model')

const router = express.Router();

// all books
router.get('/', (req, res) => {
    // We pass a callback function to book.getALL() and it will be called from inside the book.getAll()
    book.getAll((result) => {
        res.send(result);
    });
});
// book by id
router.get('/:id', (req, res) => {
    book.getById(req.params.id, (result) => {
        res.send(result);
    });
});

module.exports=router;