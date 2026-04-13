import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../Redux/feature/searchslice';
import { useSelector } from 'react-redux';

const Tabs = () => {
    const tabList = ['photoes', 'videos', 'gifey']
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        // Changed this container to handle the layout for all buttons
        <div className='flex justify-center gap-6 mt-5 mb-8 w-full'>
            {tabList.map((tab, index) => (
                // Removed the extra wrapping div and put the key on the button
                <button
                    key={index}
                    className={`${activeTab === tab ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded-2xl px-6 py-2 text-xl font-semibold capitalize transition-colors duration-200`}
                    onClick={() => { dispatch(setActiveTab(tab)) }}
                >
                    {/* Optional: Clean up the display names if you want */}
                    {tab === 'photoes' ? 'Photos' : tab === 'gifey' ? 'Gifs' : tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs