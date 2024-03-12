const express = require("express");

const route = express.Router();

const {createNewBook,getBook, updateBook, deleteBook, getBookByTitle}= require("../controller/controller")
route.post("/addbook", createNewBook);

route.get("/getBook",getBook);

route.put("/updateStatus/:id",updateBook);

route.delete("/deleteBook/:title",deleteBook);

route.get("/getBook/:title",getBookByTitle)


module.exports = route;