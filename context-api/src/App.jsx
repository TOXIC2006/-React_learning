import React from 'react'
import Navbar from './componets/Navbar'
import { useState } from 'react'
import { useContext } from 'react'
import { Themedatacontext } from './context/themecontezt'

const App = () => {
  const [theme, setTheme] = useState("light")
  const data = useContext(Themedatacontext)
  console.log(data);
  return (
    <div>

      <Navbar theme={theme} />
    </div>
  )
}

export default App