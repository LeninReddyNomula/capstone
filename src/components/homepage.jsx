import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Specials from "./specials";
import Testimonials from "./testimonials";
import About from "./about";
import Footer from "./footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
