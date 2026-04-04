import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {

    const users = [
        {

            img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
            intro: "Hi I am Rahul a passionate developer who loves building modern web applications",
            description: "Developer"
        },
        {

            img: "https://images.unsplash.com/photo-1727352545142-62a2a9925ada?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Hey I am Aman an enthusiastic AI/ML Enginer",
            description: "Programmer"
        },
        {

            img: "https://plus.unsplash.com/premium_photo-1661576736099-4d4e613bddca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Hello I am Priya a creative designer focused on crafting beautiful and user friendly interfaces",
            description: "Designer"
        },
        {

            img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D",
            intro: "Hi I am Rahul a passionate developer who loves building modern web applications",
            description: "Developer"
        },
        {

            img: "https://images.unsplash.com/photo-1727352545142-62a2a9925ada?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Hey I am Aman an enthusiastic AI/ML Enginer",
            description: "Programmer"
        },
        {

            img: "https://plus.unsplash.com/premium_photo-1661576736099-4d4e613bddca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "Hello I am Priya a creative designer focused on crafting beautiful and user friendly interfaces",
            description: "Designer"
        }


    ];
    return (
        <div id='right' className='p-4 h-full w-2/3 flex flex-nowrap gap-5 overflow-x-scroll'>
            {users.map((user, index) => (
                <RightCard key={index} props={user} id={index} />
            ))}
        </div>
    )
}

export default RightContent