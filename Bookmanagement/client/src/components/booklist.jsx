import { FaBookOpen, FaUser, FaRupeeSign, FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import API from "../services/api";

function BookList({ books, setBooks, setEditBook }) {


const fetchBooks = async () => {
try {
    const response = await API.get("/getBook");
    setBooks(response.data.data);
} catch (error) {
    console.log(error);
}
};

const deleteBook = async (id) => {
try {
    await API.delete(`/deleteBook/${id}`);

    alert("Book Deleted Successfully");

    fetchBooks();
} catch (error) {
    console.log(error);
    alert("Failed to delete book");
}
};

useEffect(() => {
    fetchBooks();
}, []);

return (
    <div className="max-w-5xl mx-auto mt-10">
    <h2 className="text-4xl font-bold text-slate-800 mb-8">
    📚 Library Collection
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
    <div
    key={book._id}
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
    >
    {/* Top Section */}
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-5 flex justify-center">
    <FaBookOpen className="text-5xl text-emerald-400" />
    </div>

    {/* Card Content */}
    <div className="p-6">

    <h3 className="text-2xl font-bold text-slate-800 mb-5">
        {book.title}
    </h3>

    <div className="space-y-3">

    <div className="flex items-center gap-3">
    <FaUser className="text-blue-500" />
    <span className="text-gray-600">
        {book.author}
    </span>
    </div>

    <div className="flex items-center gap-3">
    <FaRupeeSign className="text-green-600" />
    <span className="font-bold text-green-600 text-lg">
        {book.price}
    </span>
        </div>

    </div>

    <div className="flex justify-between mt-8">

        <button
        onClick={() => setEditBook(book)}
        className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-5 py-2 rounded-xl transition"
        >
        <FaEdit />
        Edit
        </button>

        <button
        onClick={() => deleteBook(book._id)}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
        >
        <FaTrash />
        Delete
        </button>

    </div>

    </div>
</div>
))}
    </div>
    </div>
);
}

export default BookList;