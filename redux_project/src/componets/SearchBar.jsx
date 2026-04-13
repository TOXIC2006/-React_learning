import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/feature/searchslice'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("")

    const submihandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div className='w-full gap-8'>

            <form onSubmit={submihandler} className="flex      items-center gap-2 py-5 px-8">

                <input type="text"
                    required
                    placeholder='search'
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                    className='border w-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <button type="submit" className='active:scale-105   bg-blue-600 rounded-2xl px-3 py-2 text-white   w-20  font-semibold'>
                    search
                </button>

            </form>

        </div>
    )
}

export default SearchBar