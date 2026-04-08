import React from 'react'
import { useNavigate } from 'react-router-dom'
const about = () => {
    let home = useNavigate()
    const btnclicked = () => {
        home("/")
            < q ></q >
    }
    return (
        <div>
            <div>
                <button onClick={btnclicked} className='bg-blue-500 text-white px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'>return to home</button>
            </div>
            <h1>About</h1>
        </div>
    )
}

export default about