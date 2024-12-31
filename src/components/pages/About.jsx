const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-[1200px] mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-bold">World Trading</span>, we are passionate about delivering high-quality products that blend
          style and comfort. Our mission is to provide an exceptional shopping experience with curated collections for every
          occasion. Founded with a vision to inspire confidence and creativity, we are here to redefine fashion for everyone.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Innovation</h4>
              <p className="text-gray-600">We aim to stay ahead of the trends, constantly innovating to bring you the best.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Quality</h4>
              <p className="text-gray-600">Every product is crafted with attention to detail and a commitment to excellence.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4">Sustainability</h4>
              <p className="text-gray-600">We care about the planet and strive to make sustainable choices in our processes.</p>
            </div>
          </div>
        </div>
      </section>

      Team Section
       {/* <section className="py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
            <div className="text-center">
              <img
                src="/images/team-member-1.jpg"
                alt="Team Member"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-bold text-lg">John Doe</h4>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
       
            <div className="text-center">
              <img
                src="/images/team-member-2.jpg"
                alt="Team Member"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Jane Smith</h4>
              <p className="text-sm text-gray-600">Creative Director</p>
            </div>
         
            <div className="text-center">
              <img
                src="/images/team-member-3.jpg"
                alt="Team Member"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Mike Johnson</h4>
              <p className="text-sm text-gray-600">Marketing Manager</p>
            </div>
         
            <div className="text-center">
              <img
                src="/images/team-member-4.jpg"
                alt="Team Member"
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Emily Davis</h4>
              <p className="text-sm text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>  */}

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
