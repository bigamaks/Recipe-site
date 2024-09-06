// import { useState } from 'react'
// import './App.'
import Body from "./Components/Body"
import Hero from "./Components/Hero"
import Ingredients from "./Components/Ingredients"
import Instructions from "./Components/Instructions"
import Nutrition from "./Components/Nutrition"
import Preparation from "./Components/Preparation"



function App() {
  return (
    <>
      <div className='bg-[#f3e6d8] w-full overflow-hidden'>
       <Body>
         <Hero />
         <Preparation />
         <Ingredients />
         <Instructions />
         <Nutrition />
       </Body>
      </div>

    </>
  )
}

export default App
