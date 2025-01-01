import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="hidden md:relative bg-cover bg-center h-[100px] md:h-[400px]"
        style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 md:bg-opacity-50"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black md:text-white">About Us</h1>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="max-w-[96rem] mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6"> World Breeze International L.L.C</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          رونق النسيم العالمية ش.م.م <br />
          <strong>WORLD BREEZE INTERNATIONAL L.L.C</strong>
        </p>
        <p className="text-lg text-gray-600 mt-4">
          <strong>FOOTWEAR | UNDER GARMENTS | BABY PRODUCTS</strong>
        </p>
        <p className="text-lg text-gray-600 mt-4">
          ست ١٥٧٤٩ صب ٠ ٣٢٨ الرمز البريدي : ١٢٤ مسقط، سلطنة عمان، نقال : ۹۷۳۸۳۲، هاتف : ۲۱۷۷۹۷۰۹ <br />
          C.R. 1157409, RO Box: 328, Postal Code: 124, Muscat, Sultanate of Oman, Mob: 92308022, Tel: 26779709
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Email: <a href="mailto:worldbreezeinti@gmail.com" className="text-blue-500">worldbreezeinti@gmail.com</a>, 
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12 px-4">
  <div className="max-w-[1200px] mx-auto text-center">
    <h3 className="text-3xl font-bold mb-6">Our Values</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-4">Innovation</h4>
        <p className="text-gray-600">
          We aim to stay ahead of the trends, constantly innovating to bring you the best. 
          From cutting-edge designs in footwear to modern and functional innerwear, our focus is on creating products that adapt to your evolving needs. 
          By integrating advanced materials and creative styles, we ensure you stand out in every walk of life.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-4">Quality</h4>
        <p className="text-gray-600">
          Every product is crafted with attention to detail and a commitment to excellence. 
          Our footwear offers unparalleled comfort and durability, while our men’s t-shirts and innerwear are designed to provide a seamless fit, exceptional softness, and lasting performance. 
          Quality isn’t just a standard for us; it’s a promise to deliver the best to our customers every time.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-4">Sustainability</h4>
        <p className="text-gray-600">
          We care about the planet and strive to make sustainable choices in our processes. 
          From responsibly sourced materials to eco-friendly manufacturing practices, we prioritize reducing our environmental impact. 
          Sustainability is at the heart of what we do, ensuring a greener tomorrow for future generations while delivering products that don’t compromise on quality.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-4">Diverse Product Range</h4>
        <p className="text-gray-600">
          Our collection includes high-quality footwear, stylish men’s t-shirts, and durable innerwear like trunks. 
          Each product is designed to combine comfort, durability, and modern fashion trends. 
          Whether you’re looking for professional footwear, casual t-shirts, or reliable innerwear, we cater to your everyday needs with unmatched style and functionality.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h4 className="text-xl font-bold mb-4">Customer Satisfaction</h4>
        <p className="text-gray-600">
          With a legacy of serving lakhs of satisfied customers, our brand prides itself on delivering exceptional value and fostering long-term relationships built on trust and reliability. 
          We listen to your feedback and continuously improve to exceed expectations. 
          Your happiness is our success, and we remain dedicated to providing personalized service and premium products for every customer.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Footer Call-to-Action */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
          <p className="text-lg mb-6">
            Stay updated with the latest trends, exclusive offers, and exciting events.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-bold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
