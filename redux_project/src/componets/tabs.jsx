import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../Redux/feature/searchslice';
import { useSelector } from 'react-redux';

const Tabs = () => {
    const tabList = ['photoes', 'videos', 'gifey']
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div className=' flex justify-center gap-2'>
            {tabList.map((tab, index) => (
                <button key={index}
                    className={` ${activeTab === tab ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}  rounded-2xl px-2 py-2 text-xl mt-5`}

                    onClick={() => { dispatch(setActiveTab(tab)) }}>

                    {tab}</button>
            ))}
        </div>
    )
}

export default Tabs