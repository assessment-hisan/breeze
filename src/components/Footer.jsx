import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Logo and About */}
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase">world Breeze</h2>
          <p className="text-sm">
            Discover the latest collections and enjoy the best shopping experience. Quality and style, all in one place.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/brands" className="hover:underline">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span>Phone: </span>
              <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
            </li>
            <li>
              <span>Email: </span>
              <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
            </li>
            {/* <li>
              <span>Location: </span>
              123 Main Street, City, Country
            </li> */}
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 hover:opacity-75" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6 hover:opacity-75" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 hover:opacity-75" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6 hover:opacity-75" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 world Breeze. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
