import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className=' flex  justify-between py-8 px-8 bg-blue-500'>
            <h2 className='text-white font-bold  text-2xl'>RAWAT</h2>
            <div className='flex gap-5 '>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar