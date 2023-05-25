import React from "react";

import About from "../layouts/About";
import Service from "../layouts/Service";
import Testimonials from "../layouts/Testimonials";
import Hero from "../layouts/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Testimonials />
    </main>
  );
};

export default Home;
