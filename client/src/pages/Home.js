import React from "react";

import About from "../layouts/About";
import Service from "../layouts/Service";
import Testimonials from "../layouts/Testimonials";
import Hero from "../layouts/Hero";
import Contact from "../layouts/Contact";
import Stats from "../layouts/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Service />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
