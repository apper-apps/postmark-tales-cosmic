import React, { useState, useEffect } from "react";
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

  // Load AWeber form script
  useEffect(() => {
    const loadAWeberScript = () => {
      // Check if script already exists
      if (document.getElementById('aweber-wjs-d1kcosbuh')) return;
      
      const script = document.createElement('script');
      script.id = 'aweber-wjs-d1kcosbuh';
      script.src = '//forms.aweber.com/form/27/333389527.js';
      script.async = true;
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    // Load script after component mounts
    loadAWeberScript();

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('aweber-wjs-d1kcosbuh');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
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
          
{/* AWeber Email Form Section */}
          <section className="py-16 px-4 relative z-10">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  Stay Updated on Our Launch
                </h3>
                <p className="text-text-gray">
                  Get exclusive early access notifications and adventure previews
                </p>
              </div>
              <div className="AW-Form-333389527 bg-white rounded-2xl shadow-lg p-6"></div>
            </div>
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