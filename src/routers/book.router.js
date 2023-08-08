const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

router.get("/", async (req, res) => {
  try {
    const allbooks = await Book.find({});
    return res.send(allbooks);
  } catch (error) {
    res.status(401).send("books not found");
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const bookId = req.params.id;

    //todo-use findOne and then if
    const bookById = await Book.findOne({ _id: bookId });
    if (!bookById) {
      return res.status(400).send("Invalid book ID");
    }
    res.send(bookById);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const bookDetails = req.body;
  try {
    const newBook = await Book.create(bookDetails);

    res.send(newBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports =  router ;
