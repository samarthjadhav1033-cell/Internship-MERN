const mongoose = require("mongoose");

// Create Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

// Create Model
const Book = mongoose.model("Book", bookSchema);

// Export Model
module.exports = Book;