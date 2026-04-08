import React, { useState } from 'react'

const NotesApp = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [task, setTask] = useState([])

    const submithandler = (e) => {
        e.preventDefault();
        console.log("form submitted by", title, description);

        const copytask = [...task]
        copytask.push({ title, description })
        setTask(copytask)

        setTitle('');
        setDescription('');
    }

    const deletetask = (index) => {
        const copytask = [...task]
        copytask.splice(index, 1)
        setTask(copytask)
    }

    return (
        <div className='h-screen flex flex-col'>

            {/* Navbar */}
            <nav className='flex items-center justify-between px-8 py-4 bg-slate-800 border-b border-slate-700 shadow-lg'>
                <div className='flex items-center gap-3'>
                    <span className='text-3xl'>📝</span>
                    <h1 className='text-2xl font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                        F Note App
                    </h1>
                </div>
            </nav>

            <div className='flex flex-1 min-h-0 flex-col lg:flex-row'>

                <form onSubmit={submithandler} className='flex flex-col lg:w-1/3 items-start p-10 bg-blue-400'>

                    <input
                        className='border text-xl rounded-md text-black px-2 py-2 m-1 p-5 rounded-2xl bg-slate-400 w-full'
                        type="text"
                        placeholder='enter your Notes heading'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className='border text-m rounded-md px-2 py-2 m-1 p-5 rounded-2xl bg-yellow-100 w-full h-20'
                        placeholder='enter your task'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button
                        type="submit"
                        className='bg-green-400 text-white px-2 py-2 rounded-xl w-full active:bg-green-600'
                    >
                        ADD-Notes
                    </button>
                </form>

                <div className='flex flex-col gap-4 p-10 lg:w-1/2 bg-blue-400 flex-1 min-h-0 lg:border-l'>
                    <h1 className='text-2xl font-semibold flex items-center justify-center rounded-xl bg-emerald-400 h-10 w-full'>
                        Recent Notes
                    </h1>

                    <div className='flex flex-row flex-wrap gap-2 mt-5 flex-1 min-h-0 overflow-y-auto content-start'>
                        {task.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='h-60 w-60 shrink-0 rounded-2xl p-4 bg-cover bg-center relative'
                                    style={{ backgroundImage: "url('https://www.pngmart.com/files/7/Note-PNG-Image.png')" }}
                                >

                                    <h1 className='font-bold px-2 py-1 bg-amber-950 text-white flex items-center justify-center'>
                                        {item.title}
                                    </h1>

                                    <p className='text-xs text-gray-700 p-5 font-bold'>
                                        {item.description}
                                    </p>

                                    <button
                                        className='absolute bottom-4 right-4 bg-red-400 text-white px-3 py-1 rounded-xl active:bg-red-600'
                                        onClick={() => deletetask(index)}
                                    >
                                        Delete
                                    </button>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotesApp