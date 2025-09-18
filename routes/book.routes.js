import express from "express";
import { addBook, getBooks, getBookById, updateBook, deleteBook } from "../controllers/book.controller.js";
import Book from "../models/book.mongodb.js";
const router = express.Router();
// Add a new book to Db
router.post('/books/add', addBook)
// to add Many books
router.post('/books/addMany', async (req, res) => {
    try {
        const books = await Book.insertMany(req.body);
        res.status(201).json(books);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.get('/books', getBooks)
router.get('/books/:id', getBookById)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)


export default router;