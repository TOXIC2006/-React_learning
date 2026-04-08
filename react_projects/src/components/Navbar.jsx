import { useState } from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                <div className="text-xl font-bold">MyApp</div>


                <ul className="hidden md:flex space-x-6">
                    <Link to='/'> <div className="hover:text-gray-300 cursor-pointer">Home</div></Link>
                    <Link to='/aboutpage'> <div className="hover:text-gray-300 cursor-pointer">About-React</div></Link>
                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>


            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2">
                    <li className="block hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="block hover:text-gray-300 cursor-pointer">About-React</li>
                </ul>
            )}
        </nav>
    );
}
export default Navbar