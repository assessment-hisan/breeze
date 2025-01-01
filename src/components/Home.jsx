import React from 'react'
import Hero from './Hero'
import Section from './ui/Section'

import products from '../utilis/products.js'
import TwoImageSection from './ui/TwoImageSection.jsx'
const Home = () => {
  return (
    <div >
      <Hero/>
      <Section title="Featured Products" products={products}/>
      <TwoImageSection/>
      

      <section>
        <div className='w-full flex flex-col justify-center items-center  my-12'>
          <h1 className='text-3xl md:text-5xl font-bold text-center'>Our Brands</h1>
          <div className='mt-5 '>
            <img src="/Logos-Photo.jpg" alt=""  />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home