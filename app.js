const express = require('express');
const bookRouter = require('./routes/book')

const port = 3000;

var app = express();

app.get('/', (req, res) => {
    res.send('Welcome home!');
});

app.use('/books', bookRouter);

app.listen(port, () => console.log("Listening on port " + port));
