import React from 'react'
import Card from './card'
import { Link } from 'react-router-dom'
const content = () => {
    return (
        <div className=" flex felx-col item-center justify-center p-6 gap-10 absolute top-1/4 overflow-auto">
            <Card
                title="Notes-APP"
                description="Form handling((like text fields, buttons) using state and event handlers.) and Hooks"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                link="/notesapp"
            />
            <Card
                title="Gallery-APP"
                description="Axios (used to make HTTP requests to external servers or APIs to fetch or send data.)."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                link="/galleryproject"
            />
            <Card
                title="Props-project"
                description="Props(parent  to child component) And
                            UI and Droduct desgin."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                link='/propsproject'
            />
            <Card
                title="Countdown-project"
                description="UseState (built-in object used to store and manage data that can change over time.)."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                link='/countdown'
            />



        </div>
    )
}

export default content