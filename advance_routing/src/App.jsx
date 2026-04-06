import React from 'react'
import Navbar from './compopnets/Navbar'
import Fotter from './compopnets/fotter'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/NotFound'
import Women from './pages/women'
import Courses from './pages/courses'
import { Routes, Route } from 'react-router-dom'
import Coursedetail from './pages/Coursedetail'
import Men from './pages/men'
const App = () => {
  return (
    <div className=' bg-black'>
      <Navbar />
      <h2>hello world</h2>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/contact/men' element={<Men />} />
        <Route path='/contact/women' element={<Women />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<Coursedetail />} />
      </Routes>

      <Fotter />
    </div>
  )
}

export default App