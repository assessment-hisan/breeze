import Navbar from "./components/Navbar"
import Home from "./components/Home";

import New from "./components/helo/New";
import Brands from "./components/helo/Brands";

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
    </Routes>
    </Router>
  )
}

export default App


 