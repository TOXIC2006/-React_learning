import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchvideos, fetchphotoes, fetchgifey } from '../APi/mediaapi'
import { setResult, setLoading, setError, clearresult, setQuery, setActiveTab } from '../Redux/feature/searchslice'
import { useEffect } from 'react'

const ResultGrid = () => {
    const { query, activeTab, result, loading, error } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    useEffect(() => {

        const getdat = async () => {


            try {
                dispatch(setLoading())
                let res
                if (activeTab === 'photoes') {
                    const fetched = await fetchphotoes(query)
                    res = fetched.results.map((item) => ({
                        id: item.id,
                        type: "photos",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        url: item.urls.regular,
                        alt: item.alt_description
                    }))
                }
                else if (activeTab === 'videos') {
                    const fetched = await fetchvideos(query)
                    res = fetched.videos.map((item) => ({
                        id: item.id,
                        type: "videos",
                        title: item.title,
                        thumbnail: item.image,
                        url: item.url,
                        alt: item.title
                    }))
                }
                else if (activeTab === 'gifey') {
                    const fetched = await fetchgifey(query)
                    res = fetched.data.map((item) => ({
                        id: item.id,
                        type: "gifey",
                        title: item.title,
                        thumbnail: item.images.fixed_height.url,
                        url: item.url,
                        alt: item.title
                    }))
                }
            } catch (err) {
                dispatch(setError(err))
            }
            dispatch(setResult(res))
            console.log(res)

        }
        getdat()
    }, [query, activeTab])

    return (
        <div>

        </div>
    )
}

export default ResultGrid