import React from 'react'
import LeftContent from './left.content'
import RightContent from './rightcontent'
const Content = () => {
    return (
        <div className='py-3 h-[90vh] flex items-center gap-10 justify-around  px-18'>
            <LeftContent />
            <RightContent />

        </div>
    )
}

export default Content