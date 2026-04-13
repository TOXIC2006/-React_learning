import React, { useState, useEffect } from 'react'
import Navbarcoll from './navbarcoll'
import ResultCard from '../componets/resultcard'

const Collection = () => {
    const [savedItems, setSavedItems] = useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("collection")) || []
        setSavedItems(items)
    }, [])

    const handleRemove = (id) => {
        const updatedItems = savedItems.filter(item => item.id !== id)
        setSavedItems(updatedItems)
        localStorage.setItem("collection", JSON.stringify(updatedItems))
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbarcoll />
            <div className="p-8">
                <h2 className="text-3xl text-white font-bold mb-6 text-center">Your Collection</h2>
                <div className='flex flex-wrap gap-4 justify-center pb-10'>
                    {savedItems.length > 0 ? (
                        savedItems.map((item, index) => (
                            <ResultCard
                                key={item.id || index}
                                item={item}
                                isCollection={true}
                                onRemove={handleRemove}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400 text-xl text-center mt-10">No items saved yet in your collection.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Collection