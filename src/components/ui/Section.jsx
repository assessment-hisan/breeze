import React from 'react'

const Section = ({title, products, }) => {
  return (
    <div className="max-w-[120rem] mx-auto px-4 py-8">
    <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
    <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-sm overflow-hidden transform transition delay-200 duration-300 hover:scale-95"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium">{product.title}</h3>
            <p className="text-xl text-zinc-900 font-bold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Section