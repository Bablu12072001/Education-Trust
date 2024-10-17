import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Heading from "./Components/Heading";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Components/Pages/About";
import OurWork from "./Components/Pages/Ourwork"; // Ensure the path is correct

function App() {
  return (
    <Router>
      <Heading /> {/* Include the heading on every page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component */}
        <Route path="/about" element={<AboutUs />} /> {/* About Us component */}
        <Route path="/ourwork" element={<OurWork />} />{" "}
        {/* Our Work component */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer /> {/* Include the footer on every page */}
    </Router>
  );
}

export default App;
