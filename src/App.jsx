import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Marquee from "react-fast-marquee";


const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <br />
      <Navbar setCategory={setCategory}/>
      <Marquee className='badge bg-warning fs-5'>Latest News Headline Of India Today</Marquee>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
