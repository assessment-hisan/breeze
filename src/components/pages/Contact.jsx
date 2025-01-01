import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2">
        {/* Left Section: Company Details */}
        <div className="hidden md:block p-6">
          <h2 className="text-2xl font-poppins font-semibold mb-4">WORLD BREEZE INTERNATIONAL L.L.C</h2>
          <p className=" text-base  font-semibold mb-2">رونق النسيم العالمية ش.م.م</p>
          <p className="text-base  font-semibold mb-4">FOOTWEAR | UNDER GARMENTS | BABY PRODUCTS</p>
          <div className="hidden md:block text-sm text-gray-700 space-y-2">
            <p>
              P.O. Box: <span className="font-semibold ">328, Postal Code: 124</span>
            </p>
            <p className="font-semibold ">مسقط، سلطنة عمان</p>
            <p className="font-semibold ">Muscat, Sultanate of Oman</p>
            <p>
              Mob:{" "}
              <a
                href="tel:+96892308022"
                className="font-semibold "
              >
                +968 92308022
              </a>
            </p>
            <p>
              Tel:{" "}
              <a
                href="tel:+96826779709"
                className="font-semibold "
              >
                +968 26779709
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:worldbreezeinti@gmail.com"
                className="font-semibold "
              >
                worldbreezeinti@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
