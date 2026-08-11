import { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [editBook, setEditBook] = useState(null);
  const [books, setBooks] = useState([]);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <DashboardCards books={books} />

      <BookForm
  editBook={editBook}
  setEditBook={setEditBook}
  setBooks={setBooks}
/>

      <BookList
        books={books}
        setBooks={setBooks}
        setEditBook={setEditBook}
      />
    </div>
  );
}

export default App;