import React from 'react'
import { fetchphotoes } from './APi/mediaapi'
import { fetchvideos } from './APi/mediaapi'
import { fetchgifey } from './APi/mediaapi'
export const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white gap-8'>
      <button onClick={async () => {
        const data = await fetchphotoes("car");
        console.log(data)
      }} className='bg-blue-500 text-white px-4 py-2 rounded-md'>click phtoes</button>

      <button onClick={async () => {
        const data = await fetchvideos("car");
        console.log(data)
      }} className='bg-blue-500 text-white px-4 py-2 rounded-md'>click videos</button>

      <button onClick={async () => {
        const data = await fetchgifey("car");
        console.log(data)
      }} className='bg-blue-500 text-white px-4 py-2 rounded-md'>click gifey</button>
    </div>
  )
}
export default App