const Book = require("../model/bookModel");

// Add Book
const addBook = async (req, res) => {
    try {
        const { title, author, price } = req.body;

        const book = new Book({
            title,
            author,
            price
        });

        await book.save();

        res.status(201).json({
            success: true,
            message: "Book Added Successfully",
            data: book
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            success: true,
            data: books
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// delete book
const deleteBook = async(req,res)=>{
    try {
        const {id} = req.params;

        const book = await Book.findByIdAndDelete(id);

        if(!book){
            return res.status(404).json({
                message:"Book not found"
            });
        }

        res.status(200).json({
            message:"Book deleted successfully"
        });

    } catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book: updatedBook
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    addBook,
    getAllBooks,
    deleteBook,
    updateBook
};