import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Aboutus from './pages/aboutus'

const App = () => {
  return (
    <div>

      <nav>
        <div>
          <h1> siddharth</h1>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to="/aboutus">Aboutus</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>

    </div>
  )
}

export default App