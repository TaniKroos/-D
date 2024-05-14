import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />  
        <Hero />
        <Destinations />
        <Search />
        <Selects />
    </>
  )
}

export default App
