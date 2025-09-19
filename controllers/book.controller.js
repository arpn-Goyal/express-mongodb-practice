import Book from "../models/book.mongodb.js";


export const addBook = async (req, res) => {
    try {
        const newBook = await Book.insertOne(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

// Basic Filtering 
export const getBooks = async (req, res) => {
    try {
        let filter = {};

        // if(req.query.author) filter.author = req.query.author;
        // if(req.query.genre) filter.genre = req.query.genre;

        console.log(req.query)
        // comparing operators
        if(req.query['price[gt]']){
            filter.price = {...filter.price, $gt : Number(req.query["price[gt]"])};
        }
        if(req.query['price[lt]']){
            filter.price = {...filter.price, $lt : Number(req.query["price[lt]"])};
        }

        if(req.query['genre[in]']){
            filter.genre = {$in: req.query['genre[in]'].split(',')}
        }
        
        console.log("Filter being applied:", filter);

        const books = await Book.find(filter);  
        res.json(books);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBookById = async (req, res) => {
    try {
        // console.log(req.params.id);
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({message: "Book not found"});
        res.json(book);
    } catch (error) {
        res.status(500).json({message: err.message})
    }
}
export const updateBook = async (req, res) => {
    try {
        const book = await Book.updateOne(req.params.id, req.body, {new: true});
        if(!book) return res.status(404).json({message: "Book not found"});
        res.json(json({message: "Book not found"}))
    } catch (error) {
        res.status(500).json({message: err.message})
    }
}
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) return res.status(404).json({message: "Book not found"});
        res.json(json({message: "Book not found"}))
    } catch (error) {
        res.status(500).json({message: err.message});
    }
}