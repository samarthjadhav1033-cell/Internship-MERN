import { FaBookOpen, FaRupeeSign, FaUser } from "react-icons/fa";

function DashboardCards({ books }) {
const totalBooks = books.length;

const totalValue = books.reduce(
    (sum, book) => sum + Number(book.price),
    0
);

const totalAuthors = new Set(
    books.map((book) => book.author)
).size;

return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4">
            <FaBookOpen className="text-4xl text-emerald-500" />
            <div>
            <p className="text-gray-500">Total Books</p>
            <h2 className="text-3xl font-bold">{totalBooks}</h2>
            </div>
        </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4">
            <FaRupeeSign className="text-4xl text-green-600" />
            <div>
            <p className="text-gray-500">Total Value</p>
            <h2 className="text-3xl font-bold">₹{totalValue}</h2>
            </div>
        </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4">
            <FaUser className="text-4xl text-blue-500" />
            <div>
            <p className="text-gray-500">Authors</p>
            <h2 className="text-3xl font-bold">{totalAuthors}</h2>
            </div>
        </div>
        </div>

    </div>
    </div>
);
}

export default DashboardCards;