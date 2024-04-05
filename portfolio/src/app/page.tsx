import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Portfolio from "./components/sections/Portfolio";
import Skillbar from "./components/sections/Skillbar";
import Testimonial from "./components/sections/Testimonial";
import Blog from "./components/sections/Blog";
export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="bg-slate-900	 w-full mx-auto py-10">
        <About />
      </section>
      <section id="service" className="	text-black w-full mx-auto py-10">
        <Services />
      </section>
      <section id="portfolio" className="	 w-full mx-auto py-10">
        <Portfolio />
        <Skillbar />
      </section>
      <section id="testimonial" className="bg-rose-300	 w-full mx-auto py-10">
        <Testimonial />
      </section>
      <section id="blog" className="bg-rose-300	 w-full mx-auto py-10">
        <Blog />
      </section>
      <section id="contact" className="	 w-full mx-auto py-7 bg-rose-300">
        <Contact />
      </section>
    </>
  );
}
