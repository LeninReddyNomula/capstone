import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Specials from "../components/specials";
import Testimonials from "../components/testimonials";
import About from "../components/about";
import Footer from "../components/footer";

function Homepage() {
  document.title = "Little Lemon";
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
    </div>
  );
}

export default Homepage;
