import React from 'react'

const Cards = (props) => {
    return (
        <div className='card'>
            <img className='card-img' src={props.image} />
            <h1>{props.user},{props.age}</h1>
            <p>{props.description}</p>
            <p>Company :{props.company}<br /> slaray:{props.salary}</p>
            <button className='class-button'>View profile</button>

        </div>
    )
}

export default Cards
