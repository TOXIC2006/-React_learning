import React, { useState } from 'react'
import { ArrowBigUp, ArrowBigDown, LucideUserStar } from 'lucide-react'
import { ArrowBigRightDash } from 'lucide-react'
import { ArrowBigLeftDash } from 'lucide-react'
const Countdown = () => {
    const [a, setA] = useState(0)
    function setspecial() {
        setA(4)
    }


    const [user, setUser] = useState({ name: "John", age: 30 })
    function changeuser() {
        const newuser = { ...user }
        newuser.age = 18;
        newuser.name = "sumit"
        setUser(newuser)
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-9xl font-semibold rounded-2xl bg-gray-500 px-2 py-2  h-50 w-50  m-10  p-20  flex items-center justify-center '> {a}</h1>


            <div className='flex flex-row items-center gap-2'>
                <button onClick={() => { setA(a - 5) }}><ArrowBigLeftDash /></button>
                <button onClick={() => { setA(a - 1) }}><ArrowBigLeftDash /></button>


                <button onClick={() => setA(a + 1)}><ArrowBigRightDash /></button>
                <button onClick={() => setA(a + 5)}><ArrowBigRightDash /></button>

            </div>
            <button className=' id=reset text-white bg-red-500 px-2 py-2 rounded-2xl' onClick={() => { setA(0) }}>Reset</button>

            {/* <div>
        <h1> {user.name}, {user.age}</h1>
        <button onClick={changeuser}>change user</button>
      </div> */}
        </div>
    )
}

export default Countdown