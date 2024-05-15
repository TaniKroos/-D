import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import TestimonialSection from './components/TestimonialSection'
import Search2 from './components/Search2'
import Se from './components/Se'
// import TestimonialSection from './components/TestimonialSection'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
        <Navbar />  
        <Hero  />
    
        <Destinations />
      
        
        <Search2 />
       
        <Selects />
        {/* <Carousel /> */}
        <Search />
       <TestimonialSection />

        <Footer />
        
    </>
  )
}

export default App
