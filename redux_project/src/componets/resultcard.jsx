import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const ResultCard = ({ item, isCollection = false, onRemove }) => {
    const [color, setColor] = useState("green");
    const [saved, setSaved] = useState("Save");

    const addtocollection = (item) => {
        const oldata = JSON.parse(localStorage.getItem("collection")) || []
        // Check for duplicate to avoid adding same item multiple times
        const isDuplicate = oldata.some((savedItem) => savedItem.id === item.id)

        if (!isDuplicate) {
            const newcollection = [...oldata, item]
            localStorage.setItem("collection", JSON.stringify(newcollection));
            alert("Added to collection!");
        } else {
            alert("Item is already in your collection!");
        }
    }


    if (!item.url) return null;

    return (
        <div className='bg-gray-100 relative rounded-2xl h-80 w-80 overflow-hidden hover:shadow-2xl transition duration-300 mt-8'>

            {/* Media Container */}
            <a target='_blank' href={item.url} className='h-full'>
                {item.type === "photos" && (
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover object-center" />
                )}

                {item.type === "videos" && (
                    <video autoPlay loop muted playsInline src={item.url} className="w-full h-full object-cover object-center" />
                )}

                {item.type === "gifey" && (
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover object-center" />
                )}
            </a>

            {/* Bottom Overlay */}
            <div
                id="bottom"
                className='absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-10 flex items-center z-10'
            >
                <h2 className='text-white text-lg capitalize drop-shadow-md line-clamp-2 flex-1 mr-4 mt-1 overflow-hidden'>
                    {item.title}
                </h2>

                {isCollection ? (
                    <button className='bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-full font-medium mt-2'
                        onClick={() => onRemove && onRemove(item.id)}
                    >
                        Remove
                    </button>
                ) : (
                    <button className={`bg-${color}-500 text-white px-4 py-2 rounded-full font-medium mt-2 active:bg-amber-400`}
                        onClick={() => { setColor("yellow"), addtocollection(item), setSaved("saved") }}
                    >
                        {saved}
                    </button>
                )}
            </div>

        </div>
    )
}

export default ResultCard