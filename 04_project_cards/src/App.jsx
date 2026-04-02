import React from 'react'
import Cards from './componets/Cards'

export const App = () => {
  return (
    <div className='parent'>
      <Cards
        image="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
        company="Google"
        posted="30 days ago"
        description="Graphic Designer"
        time="Part-Time"
        level="Flexible Schedule"
        salary="$150-220k"
        location="Kochi, India"
      />
    </div>
  )
}
export default App
