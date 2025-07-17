import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx' 
import AboutCampus from '../components/AboutCampus.jsx'
import Clubs from '../components/Clubs.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutCampus/>
      <Clubs/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default Home
