import { useState } from 'react'
import { Navbar } from './Components/Navigationbar/nav'
import { HeroSection } from './Components/Hero/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  )
}

export default App
