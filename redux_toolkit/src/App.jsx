import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, absoulte, incrementByAmount } from './redux/feature'
import { useState } from 'react'
const App = () => {
  const [input, setInput] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1 className='h1'> {count}</h1>
      <button className='button' onClick={() => { dispatch(increment()) }}>Increment</button>
      <button className='button' onClick={() => { dispatch(decrement()) }}>Decrement</button>
      <button className='button' onClick={() => { dispatch(absoulte()) }}>Ab solute</button>
      <input classNmae="button" onChange={(e) => { setInput(e.target.value) }} ></input>
      <button className='button' onClick={() => { dispatch(incrementByAmount(Number(input))) }}>Increment by {input}</button>
    </div>
  )
}

export default App