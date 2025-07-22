import React from "react";
import Hero from "../components/Hero";
import MotivationalCards from "../components/MotivationalCards";
import Subscribe from "../components/Subscribe";
import SuccessStories from "../components/SuccessStories";
import QuoteSection from "../components/QuoteSection";
import CTA from "../components/CTA";


function Home() {
  return (
    <div>
      <Hero />
      <MotivationalCards />
      <SuccessStories />
      <Subscribe />
      <QuoteSection />
      <CTA />
     
    </div>
  );
}

export default Home;
