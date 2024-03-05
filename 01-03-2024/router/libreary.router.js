const express = require("express");
const { showBooks, showBookByTitle, createNewBook, updateBook, deleteBook, borrowBook, returnBook } = require("../controller/libreary.controller.js");

const libRouter = express.Router();

libRouter.get("/",showBooks);

libRouter.get("/:title", showBookByTitle);

libRouter.post("/addbook", createNewBook);

libRouter.post("/borrow/:title", borrowBook);

libRouter.post("/return/:title", returnBook);

libRouter.put("/:title", updateBook);

libRouter.delete("/:title", deleteBook);

module.exports = libRouter;