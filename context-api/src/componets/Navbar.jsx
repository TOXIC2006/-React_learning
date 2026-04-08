import React from 'react'
import Nav2 from './nav2'
const Navbar = (props) => {
    return (
        <div className=' flex  justify-between py-8 px-8 bg-blue-500'>
            <h1 className='text- black font-bold  text-2xl'> Sheriyans school</h1>
            <Nav2 theme={props.theme} />


        </div>
    )
}

export default Navbar