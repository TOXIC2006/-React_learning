import React from 'react'
import SearchBar from './componets/SearchBar'
import Tabs from './componets/tabs'
import ResultGrid from './componets/ResultGrid.jsx'
const App = () => {
  return (
    <div className='min-h-screen w-screen bg-gray-50'>
      <SearchBar />
      <Tabs />
      <ResultGrid />

    </div>
  )
}

export default App