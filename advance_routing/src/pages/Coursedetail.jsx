import React from 'react'
import { useParams } from 'react-router-dom'
const Coursedetail = () => {

    const course = useParams()
    return (
        <div>
            <h1>Course Detail {course.id}</h1>

        </div>
    )
}

export default Coursedetail