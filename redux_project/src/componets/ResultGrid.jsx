import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchvideos, fetchphotoes, fetchgifey } from '../APi/mediaapi'
import { setResult, setLoading, setError } from '../Redux/feature/searchslice'
import ResultCard from './ResultCard'
import { useState } from 'react'
const ResultGrid = () => {
    const { query, activeTab, result, loading, error } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    const [page, setpage] = useState(1)

    useEffect(() => {
        if (!query) return;

        const getdat = async () => {
            let res = []
            try {
                dispatch(setLoading())

                if (activeTab === 'photoes') {
                    const fetched = await fetchphotoes(query)
                    res = fetched.results.map((item) => ({
                        id: item.id,
                        type: "photos",
                        title: item.alt_description || "Photo",
                        url: item.urls?.regular || item.urls?.small // Safely check for URLs
                    }))
                }
                else if (activeTab === 'videos') {
                    const fetched = await fetchvideos(query)

                    // DEBUGGING: This will print the actual API data to your browser console
                    console.log("RAW VIDEO DATA:", fetched);

                    // Support for both Pexels and Pixabay video APIs
                    res = fetched.videos ? fetched.videos.map((item) => ({
                        id: item.id,
                        type: "videos",
                        title: item.title || "Video",
                        // Safely check Pexels structure first, then fallback to standard url
                        url: item.video_files?.[0]?.link || item.videos?.medium?.url || item.url
                    })) : fetched.hits ? fetched.hits.map((item) => ({
                        // Pixabay structure support
                        id: item.id,
                        type: "videos",
                        url: item.videos?.medium?.url
                    })) : []
                }
                else if (activeTab === 'gifey') {
                    const fetched = await fetchgifey(query)


                    console.log("RAW GIF DATA:", fetched);

                    res = fetched.data.map((item) => ({
                        id: item.id,
                        type: "gifey",
                        title: item.title || "Gif",
                        // Safely check for Giphy image paths
                        url: item.images?.original?.url || item.images?.fixed_height?.url
                    }))
                }
            } catch (err) {
                console.error("API Fetch Error:", err);
                dispatch(setError(err.message))
            }
            dispatch(setResult(res))
        }

        getdat()
    }, [query, activeTab, dispatch])

    if (loading) return <div className="text-gray-500 m-5 text-center text-xl w-full">Loading media...</div>
    if (error) return <div className="text-red-500 m-5 text-center">Error loading data! Check console.</div>

    return (
        <div className='flex flex-wrap gap-4 overflow-auto px-8 justify-center pb-10'>
            {result?.map((item, index) => (
                <ResultCard key={item.id || index} item={item} />
            ))}

            <div className='flex justify-center items-center gap-5 my-5'>

                <button className='w-20 h-10 bg-yellow-200 rounded-2xl' onClick={() => { setpage(page - 1) }}> prev</button>
                <h2 className='text-xl font-semibold text-white'>page {page}</h2>
                <button className='w-20 h-10 bg-yellow-200 rounded-2xl' onClick={() => { setpage(page + 1) }
                }> next</button>

            </div>
        </div>

    )
}

export default ResultGrid