import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Logo and About */}
        <div>
          <h2 className="text-lg font-bold mb-4 uppercase ">World Breeze International L.L.C</h2>
          <p className="text-sm">
            Discover high-quality footwear, undergarments, and baby products. Your trusted partner in style, comfort, and quality.
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
              <a href="tel:+96892308022" className="hover:underline">+968 92308022</a>
            </li>
            <li>
              <span>Tel: </span>
              <a href="tel:+96826779709" className="hover:underline">+968 26779709</a>
            </li>
            <li>
              <span>Email: </span>
              <a href="mailto:worldbreezeinti@gmail.com" className="hover:underline">worldbreezeinti@gmail.com</a>
            </li>
            <li>
              <span>Address: </span>
              P.O. Box: 328, Postal Code: 124, Muscat, Sultanate of Oman
            </li>
            <li>
              <span>CR: </span>
              1157409
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/mnclogos/wtap.svg" alt="whatsapp" className="h-8 w-8 hover:opacity-75" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/mnclogos/fb.svg" alt="Facebook" className="h-8 w-8 hover:opacity-75" />
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/mnclogos/insta.svg" alt="Instagram" className="h-9 w-9 hover:opacity-75" />
            </a>
      
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 World Breeze International L.L.C. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
