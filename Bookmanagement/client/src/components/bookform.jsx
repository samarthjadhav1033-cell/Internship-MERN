import API from "../services/api";
import { useState, useEffect } from "react";

function BookForm({ editBook, setEditBook, setBooks }) {
const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
});

useEffect(() => {
    if (editBook) {
    setBook({
    title: editBook.title,
    author: editBook.author,
    price: editBook.price,
    });
}
}, [editBook]);

const handleChange = (e) => {
    setBook({
    ...book,
    [e.target.name]: e.target.value,
    });
};

const fetchBooks = async () => {
  try {
    const response = await API.get("/getBook");
    setBooks(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
    if (editBook) {
      // Update Book
    const response = await API.put(
        `/updateBook/${editBook._id}`,
        book
    );

    alert(response.data.message);

    setEditBook(null);

    } else {
      // Add Book
    const response = await API.post("/addBook", book);

    alert(response.data.message);
    }

    setBook({
    title: "",
    author: "",
    price: "",
    });

    fetchBooks();

} catch (error) {
    console.log(error);
    alert("Something went wrong");
}
};

return (
<div className="max-w-6xl mx-auto mt-10 px-4">
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

    <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
        {editBook ? "✏️ Update Book" : "📚 Add New Book"}
        </h2>

        <p className="text-gray-500 mt-2">
        Fill in the details below to manage your library.
        </p>
    </div>

    <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-6"
    >

        <div>
        <label className="block mb-2 font-semibold text-slate-700">
            Book Title
        </label>

        <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={book.title}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        </div>

        <div>
        <label className="block mb-2 font-semibold text-slate-700">
            Author
        </label>

        <input
            type="text"
            name="author"
            placeholder="Author name"
            value={book.author}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        </div>

        <div>
        <label className="block mb-2 font-semibold text-slate-700">
            Price
        </label>

        <input
            type="number"
            name="price"
            placeholder="₹ Price"
            value={book.price}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        </div>

        <div className="md:col-span-3">
        <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg"
        >
            {editBook ? "Update Book" : "Add Book"}
        </button>
        </div>

    </form>

    </div>
</div>
);
}

export default BookForm;