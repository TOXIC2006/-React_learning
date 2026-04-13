import React from "react";
import SearchBar from "../componets/SearchBar";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-gray-500 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

                {/* Logo */}
                <Link to="/">
                    <button className="text-white text-2xl font-bold hover:text-gray-200">
                        MediaSearch
                    </button>
                </Link>



            </div>
        </nav>
    );
};

export default Navbar;