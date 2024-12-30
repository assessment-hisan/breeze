import React from 'react'

const Section = ({title, products, }) => {
  return (
    <div className="max-w-[120rem] mx-auto px-4 py-8">
    <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-xl text-green-600 font-bold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Section