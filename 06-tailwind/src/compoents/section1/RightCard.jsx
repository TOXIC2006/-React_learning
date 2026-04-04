import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = ({ props, id }) => {
    return (
        <div className='h-full w-80 shrink-0 rounded-4xl overflow-hidden relative '>

            <img className='object-cover h-full w-full absolute inset-0 ' src={props.img} alt="Cover" />


            <div className='absolute inset-0 rom-[#cccccf] via-[#1a1a2e]/60 to-transparent'></div>


            <div className='relative z-10 h-full flex flex-col justify-between p-6'>

                <div className='bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-semibold'>
                    {id + 1}
                </div>


                <div>
                    <p className='text-gray-300 text-lg text-shadow-m font-medium leading-relaxed mb-5 '>
                        {props.intro}
                    </p>

                    <div className='flex items-center justify-between'>
                        <button className='bg-[#107aa0] text-gray-300 px-6 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-cyan-500 to-blue-500'>
                            {props.description}
                        </button>
                        <button className='bg-[#107aa0] text-white w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500'>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard