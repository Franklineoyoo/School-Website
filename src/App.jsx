import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAMS" title="What We Offer" />
        <Program />
        <About />
        <Title subtitle="GALLERY" title="Campus Life" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Students Says" />
        <Testimonials />
        <Title subtitle="CONTACT US" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
