import React from 'react'
import Breadcrumb from '../ui/Breadcrumb '
const Brands = () => {
  const images = [
    {id :4, src : "/brands/Morris-Becker.jpg"},
    {id : 2, src : "/brands/Espanio.jpg"},
    {id : 1, src : "/brands/En-And-Cee.jpg"},
    {id:5, src : "/brands/Safty-Shoe.jpg"},
    {id :3, src :"/brands/Maxwell.jpg"},
    {id : 6, src : "/brands/Walkers.jpg"}
  ]
  return (
    <div className=''>
      <div>
       <Breadcrumb page={"Our Brands"}/>
      </div>
       <div className='max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4'>
       {images.map(({id, src})=>(
          <img key={id} src={src} alt="" srcset=""  />
        ))}
       </div>
    </div>
  )
}

export default Brands