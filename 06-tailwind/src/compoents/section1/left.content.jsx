import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
    return (
        <div className=' h-full w-1/3 flex flex-col justify-between p'>
            <div className='p-6'>
                <p className=' mb-4 text-6xl font-bold'>Prospective<br />
                    <span className='text-gray-300'>customer</span>
                    <br />segmentation</p>
                <br />
                <p className='text-gray-500 font-medium' > Lorem ipsum, dolores dolorem ipsam repudiandae hic mollitia sed neque. In, porro? Labore tenetur aut laudantium? Aspernatur, recusandae at.</p>
            </div>
            <div >
                <ArrowUpRight size={70} />
            </div>
        </div>
    )
}

export default LeftContent