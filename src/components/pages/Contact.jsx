import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-600">We would love to hear from you. Please reach out to us using the form below or the provided contact information.</p>
          </div>
    
          {/* Contact Form Section */}
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
    
          {/* Contact Info Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              You can also reach us via email at{" "}
              <a href="mailto:contact@artsfest.com" className="text-primary font-semibold">
                contact@Worldbreezetrading.com
              </a>
              , or give us a call at{" "}
              <a href="tel:+1234567890" className="text-primary font-semibold">
                +1 (234) 567-890
              </a>
              .
            </p>
            <p className="text-gray-700 mt-2">123 Arts Fest Street, City, Country</p>
          </div>
        </div>
      );
}

export default Contact