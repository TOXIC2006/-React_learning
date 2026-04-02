import React from 'react'
import { Bookmark } from 'lucide-react'

const Cards = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <img src={props.image} alt={props.company} />
                <button className='save'>Saved <Bookmark size={14} /></button>
            </div>

            <div className='company-row'>
                <h1>{props.company}</h1>
                <span className='time-ago'>{props.posted}</span>
            </div>

            <p className='role'>{props.description}</p>

            <div className='card-tags'>
                <span className='tag'>{props.time}</span>
                <span className='tag'>{props.level}</span>
            </div>

            <div className='card-footer'>
                <div className='salary-block'>
                    <span className='salary'>{props.salary}</span>
                    <span className='location'>{props.location}</span>
                </div>
                <button className='apply-button'>Apply now</button>
            </div>
        </div>
    )
}

export default Cards