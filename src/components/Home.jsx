import React from 'react'
import Hero from './Hero'
import Section from './ui/Section'

import products from '../utilis/featured.js'
import TwoImageSection from './ui/TwoImageSection.jsx'
const Home = () => {
  return (
    <div >
      <Hero/>
      <Section title="Featured Products" products={products}/>
      <TwoImageSection/>
    </div>
  )
}

export default Home