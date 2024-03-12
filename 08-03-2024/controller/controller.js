
const bookModel = require("../model/library.model");

const mongoose  = require('mongoose');

async function createNewBook(req, res) {

    const book = req.body;
    const newBook = await bookModel.create(book);

    if (newBook) {
        return res.status(201).json(newBook.toJSON());
    }
    else {
        console.log('Error while adding a Book')
    };

};


async function getBook(req, res) {

    const books = await bookModel.find();
    console.log(books);

    if (!books) return res.status(404).send({ message: "internal server error..." });

    else {
        return res.status(200).send(books);
    }

};


async function updateBook(req, res) {

    const body = req.body;
    const id = req.params.id;

    const book = await bookModel.findOneAndUpdate({ _id: id }, body);

    if (!book) {
        return res.status(500).send("There was an issue updating this book")
    } else {
        return res.status(200).send(book.toJSON());
    }

};

async function deleteBook(req, res) {

    const title = req.params.title;
    console.log(title);
    
    try {
        let result = await bookModel.deleteOne({ title: title });
        if (result.deletedCount === 1) {
            res.status(200).send(`Book "${title}" deleted successfully.`);
        } else {
            res.status(404).send(`Book "${title}" not found.`);
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Internal server error.');
    }
   
};

async function getBookByTitle(req, res) {

    const title = req.params.title;
    console.log(title);

    const book = await bookModel.findOne({ title: title });
    console.log(book);

    if (!book) return res.status(404).send({ message: "No such book found in the libreary" })
    else {
        return res.status(200).send(book);
    }
};


module.exports = {createNewBook,getBook, updateBook, deleteBook, getBookByTitle};



// const title = req.params.title;
// console.log(title);
// let book = await bookModel.deleteOne({  title: title });

// res.status(200).send(`book deleted ${book}`);