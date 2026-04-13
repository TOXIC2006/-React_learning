import React from 'react'
import SearchBar from './componets/SearchBar'
import Tabs from './componets/tabs'
import ResultGrid from './componets/ResultGrid.jsx'
import { Routes, Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import Collection from './page/collection'
const App = () => {
  return (
    <div className='min-h-screen w-screen bg-black'>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collection />} />
      </Routes>

    </div>
  )
}

export default App