import React from 'react'

const nav2 = (props) => {
    return (
        <div className=' flex gap-5 text-white  justify-between itme-center'>
            <h4 className='text-black font-bold  text-2xl'> Home</h4>
            <h4 className='text-black font-bold  text-2xl'> About</h4>
            <h4 className='text-black font-bold  text-2xl'> Contact</h4>
            <h4 className='text-black font-bold  text-2xl'>Services</h4>
            <button className='text-bold p-3'>{props.theme}</button>
        </div>
    )
}

export default nav2