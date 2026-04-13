import React from 'react'
import SearchBar from '../componets/SearchBar'
import Tabs from '../componets/tabs'
import ResultGrid from '../componets/ResultGrid.jsx'
import Navbar from './navbar'
import { useSelector } from 'react-redux'
const Homepage = () => {
    const { query, activeTab, result, loading, error } = useSelector((state) => state.search)

    return (
        <div>
            <Navbar />
            {/* <SearchBar /> */}
            <Tabs />
            <ResultGrid />
        </div>
    )
}

export default Homepage