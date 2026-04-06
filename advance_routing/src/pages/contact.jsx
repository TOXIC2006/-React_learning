import React from 'react'
import { Link } from 'react-router-dom'
const contact = () => {
    return (
        <div>
            <div className=' flex flex-col gap-5 item-center justify-center'>
                <Link to="/contact/men">Men</Link>
                <Link to="/contact/women">Women</Link>
            </div>
            <h1>contact</h1>
        </div>
    )
}

export default contact