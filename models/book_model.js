/**This a book model that will interact with the database.*/
let books = [
    {name: "The Alchemist", author: "Paulo Coelho"},
    {name: "The Power of Now", author: "Eckhart Tolle"},
    {name: "The Art of War", author: "Sun Tzu"},
    {name: "The 48 Laws of Power", author: "Robert Greene"}
];

const book = {
    getAll(callback) {
        // call the callback function and pass the data to it.
        callback(books);
    },

    getById(id, callback) {
        callback(books[id]);
    }
}

// export the book object
module.exports=book;

