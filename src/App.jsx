import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./components/Home";

import New from "./components/helo/New";
import Brands from "./components/helo/Brands";

import Contact from "./components/contact/Contact";
import About from "./components/contact/About";

import Hero from "./components/Hero"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/brands" element={<Brands />} />
    <Route path="/women" element={<New />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App


 