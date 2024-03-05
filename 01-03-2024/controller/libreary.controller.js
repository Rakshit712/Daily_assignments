const bookModel = require("../model/libreary.model.js");

//.....................Get all books...................................

async function showBooks(req, res) {

    const books = await bookModel.find();

    if (!books) return res.status(404).send({ message: "internal server error..." });

    else {
        return res.status(200).send(books);
    }

};

//.........................Get book by title............................

async function showBookByTitle(req, res) {

    const title = req.params.title;
    console.log(title);

    const book = await bookModel.findOne({ title: title });
    console.log(book);

    if (!book) return res.status(404).send({ message: "No such book found in the libreary" })
    else {
        return res.status(200).send(book);
    }
};

//.......................Adding a new book.........................


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


//....................Updating a book.........................

async function updateBook(req, res) {

    const body = req.body;
    const title = req.params.title;

    const book = await bookModel.findOneAndUpdate({ title: title }, body);

    if (!book) {
        return res.status(500).send("There was an issue updating this book")
    } else {
        return res.status(200).send(book.toJSON());
    }

};

//..................Deleting a book............................


async function deleteBook(req, res) {
    const title = req.params.title;
    let book = await bookModel.deleteOne({ title: title });

    res.status(200).send(`book deleted ${book}`);
};


//.................Borrowing a book.....................


async function borrowBook(req, res) {
    const title = req.params.title;

    try{
        const book = await bookModel.findOne({title: title}); 
        if(!book){
            return res.status(404).send({message: "The book is not available in the library"})
            }
        if(book.available == false){
            return res.status(404).send({message: "This book is already borrowed."})}
        else{ book.available = false;
           
            res.status(201).send({message:"book borrowed successfully"});

            await book.save();
            
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }

};

//......................returning  a book...............


async function  returnBook(req,res){
    const title = req.params.title;
    try{
        const book = await bookModel.findOne({title: title}); 
        if(!book){
            return res.status(404).send({message: "The book is not available in the library"})
            }
        if(book.available ==true){
                return res.status(404).send({message: "This book is already availalble."})}
            else{ book.available = true;
                // console.log(book.available);
                res.status(201).send({message:"book returned successfully"});
                // console.log(book);
                await book.save();
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { showBooks, showBookByTitle, updateBook, createNewBook, deleteBook, borrowBook, returnBook };