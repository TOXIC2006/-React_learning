import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')


  const fromsubmit = (e) => {
    e.preventDefault();
    console.log("formSubmit");
  }
  return (


    <div>

      <form onSubmit={(e) => {
        fromsubmit(e);
        setTitle('');// set tiel ki value  empty looks like it is reaf the page
      }}>
        <input
          type="text" placeholder='enter your name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className='border border-gray-300 rounded-md px-2 py-2 m-1' />
        <br />
        <button className='  bg-amber-200  text-xl w-20  rounded-2xl'>Submit</button>
        <h1> {title}</h1>
      </form>
    </div>
  )
}

export default App