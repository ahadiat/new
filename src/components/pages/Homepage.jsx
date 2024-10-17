import React from 'react'
import NavOri from './NavOri'
import Intro from './intro'
import Hero from './Hero'
import Contact from './contact'
import Me from './Me'
import Footer from './footer'


const Homepage = () => {
  return (
   <div className='bg-purple-900'> 
   <NavOri />
   <Intro />
   <Hero />
    <Contact />
    <Me />
    <Footer />
  
    </div>
  )
}

export default Homepage