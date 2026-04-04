import React from 'react'

const App = () => {
  const btnclik = () => {
    console.log("button clicked")
  }
  const inoutchanging = (value) => {
    console.log(value);
  }
  return (
    <div>
      <input type="text" placeholder='enter your name' onChange={function (elem) {
        inoutchanging(elem.target.value)
      }} />
      <button onClick={btnclik}>click me</button>
      <div className='box' onMouseMove={(elem) => {
        console.log(elem.clientX);
      }}></div>
    </div>
  )
}

export default App