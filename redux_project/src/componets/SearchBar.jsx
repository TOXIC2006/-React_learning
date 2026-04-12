import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/feature/searchslice'

const SearchBar = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(setQuery(text))
            console.log("Searched:", text)
        }
    }

    return (
        <div className='w-screen bg-white'>

            <form className="flex  flex-col   items-center gap-2 bg-amber-200 py-5" onSubmit={submitHandler}>
                <input type="text"
                    required
                    placeholder='search'
                    value={text}
                    onChange={(val) => { setText(val.target.value) }}
                    className='border w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <button type="submit" className='active:scale-105   bg-blue-600 rounded-2xl px-4 py-2 text-white mt-2'
                >search</button>

            </form>
        </div>
    )
}

export default SearchBar