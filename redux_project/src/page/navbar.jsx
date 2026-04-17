import React from "react";
import SearchBar from "../componets/SearchBar";
import { Link } from "react-router-dom"
import { BookmarkOff } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { settheme } from "../Redux/feature/Darknode";

const Navbar = () => {
    const theme = useSelector((state) => state.setdarkmode.theme);
    const dispatch = useDispatch();

    return (
        <nav className={`shadow-md ${theme === 'dark' ? 'bg-gradient-to-r from-blue-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-gray-500'}`}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 min-h-[60px] py-2">

                {/* Logo */}
                <h1 className="text-white text-2xl font-bold">
                    MediaSearch
                </h1>

                {/* Search Box */}
                <div className="flex w-full md:w-auto gap-2">
                    <SearchBar />
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/collection">
                        <button className="text-white font-semibold cursor-pointer hover:text-gray-200 flex flex-row items-center">
                            Collections <BookmarkOff size={20} className="ml-1" />
                        </button>
                    </Link>
                    <button
                        className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white px-4 py-2 rounded-full text-sm active:bg-gray-800 transition-colors absolute right-4`}
                        onClick={() => dispatch(settheme(theme === "light" ? "dark" : "light"))}
                    >
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;