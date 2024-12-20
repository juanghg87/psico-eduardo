import React from 'react'
import "../pages/home.scss"
import "../components/navbar/Navbar"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Button from '../components/button/Button'
import Presentation from '../components/presentation/Presentation'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Button />
        <Presentation />
    </div>
  )
}

export default Home