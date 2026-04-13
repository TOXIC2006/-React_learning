import React from "react";
import SearchBar from "../componets/SearchBar";
import { Link } from "react-router-dom"
import { BookmarkOff } from 'lucide-react';
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-gray-500 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">

                {/* Logo */}
                <h1 className="text-white text-2xl font-bold">
                    MediaSearch
                </h1>

                {/* Search Box */}
                <div className="flex w-full md:w-auto gap-2">
                    <SearchBar />
                </div>
                <Link to="/collection">
                    <button className=" text-white font-semibold cursor-pointer hover:text-gray-200 flex  flex-row items-center" > Collections <BookmarkOff size={20} /></button>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;