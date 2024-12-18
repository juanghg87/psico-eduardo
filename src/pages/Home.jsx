import React from 'react'
import "../pages/home.scss"
import "../components/navbar/Navbar"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Button from '../components/button/Button'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Button />
    </div>
  )
}

export default Home