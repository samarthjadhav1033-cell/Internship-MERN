import { FaBookOpen } from "react-icons/fa";

function Navbar() {
return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
        <div className="bg-emerald-500 p-3 rounded-xl shadow-md">
            <FaBookOpen className="text-white text-2xl" />
        </div>

        <div>
            <h1 className="text-2xl font-bold text-white">
            Book<span className="text-emerald-400">Hub</span>
            </h1>

            <p className="text-gray-400 text-sm">
            Manage Your Library Easily
            </p>
        </div>
        </div>

        {/* Right Side */}
        <div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl font-semibold transition duration-300">
            Dashboard
        </button>
        </div>

    </div>
    </nav>
);
}

export default Navbar;