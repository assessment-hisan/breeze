import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./components/Home";

import New from "./components/helo/New";
import Brands from "./components/pages/Brands";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {


  return (
    <Router>
    <Navbar />
    <div className="pt-20 md:pt-0">
      <ScrollToTop/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/brands" element={<Brands />} />
    <Route path="/women" element={<New />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </div>
    <Footer/>
    </Router>
  )
}

export default App


 