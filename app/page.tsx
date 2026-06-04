import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Steps } from "@/components/sections/Steps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Steps />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
