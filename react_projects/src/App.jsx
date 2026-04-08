import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/content'
import NotesApp from './projects/NotesApp'
// import test from './projects/test'
import { Routes, Route } from 'react-router-dom'
import Test from './projects/test'
import { BrowserRouter } from 'react-router-dom'
import GalleryProject from './projects/GalleryProject'
import PropsProject from './projects/PropsProject'
import Countdown from './projects/Countdown'
import Notfound from './components/404Notfound'
import AboutPage from './components/AboutPage'
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/notesapp' element={<NotesApp />}></Route>
          <Route path='/galleryproject' element={<GalleryProject />}></Route>
          <Route path='/propsproject' element={<PropsProject />}></Route>
          <Route path='/countdown' element={<Countdown />}></Route>
          <Route path='*' element={<Notfound />} />
          <Route path='/aboutpage' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App