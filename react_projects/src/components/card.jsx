import React from 'react'
import { Link } from 'react-router-dom'
const card = ({ title, description, image, link }) => {
    return (
        <Link to={link}>
            <div className="max-w-sm bg-blue-500 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100 w-85">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-800 text-sm"><b className='text-black font-semibold'>Learning:</b> {description}</p>
                </div>
            </div>
        </Link>
    );
}

export default card



//  <Link to={link}><button className=' text-bold p-4 bg-green-400 rounded-xl active:scale-95'>Open-project</button></Link>
//         // </div>