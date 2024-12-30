import React from 'react'
import Hero from './Hero'
import Section from './ui/Section'

import products from '../utilis/featured.js'
const Home = () => {
  return (
    <div className="">
      <Hero/>
      <Section title="Featured Products" products={products}/>
    </div>
  )
}

export default Home