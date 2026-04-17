import React from 'react'
import SearchBar from './componets/SearchBar'
import Tabs from './componets/tabs'
import ResultGrid from './componets/ResultGrid.jsx'
import { Routes, Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import Collection from './page/collection'
import { useSelector } from 'react-redux'

const App = () => {
  const theme = useSelector((state) => state.setdarkmode.theme);

  return (
    <div className={`min-h-screen w-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-900'}`}>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>

    </div>
  )
}

export default App