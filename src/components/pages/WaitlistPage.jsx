import React, { useState } from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import WaitlistForm from "@/components/molecules/WaitlistForm";
import AdventureTypes from "@/components/organisms/AdventureTypes";
import HowItWorks from "@/components/organisms/HowItWorks";
import CallToAction from "@/components/organisms/CallToAction";
import Footer from "@/components/organisms/Footer";
import DotsPattern from "@/components/organisms/DotsPattern";

const WaitlistPage = () => {
  const [selectedAdventure, setSelectedAdventure] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedAdventure(category);
    // Smooth scroll to form
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAdventureSelect = (adventureType) => {
    setSelectedAdventure(adventureType);
    // Smooth scroll to form
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinWaitlist = () => {
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-warm-beige relative overflow-x-hidden">
      {/* Animated Dots Background */}
      <DotsPattern />
      
      {/* Page Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <HeroSection onCategorySelect={handleCategorySelect} />
          
          {/* Waitlist Form Section */}
          <section id="waitlist-form" className="py-16 px-4 relative z-10">
            <WaitlistForm selectedAdventure={selectedAdventure} />
          </section>
          
          <AdventureTypes onAdventureSelect={handleAdventureSelect} />
          
          <HowItWorks />
          
          <CallToAction onJoinWaitlist={handleJoinWaitlist} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default WaitlistPage;