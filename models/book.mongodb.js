import mongoose, { trusted } from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        // enum: ["Fiction", "Non-Fiction", "Fantasy", "Sci-Fi", "Romance", "Mystery", "Other"],
        default: "Other",
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    yearPublished: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Book = mongoose.model("Book", bookSchema);

export default Book;