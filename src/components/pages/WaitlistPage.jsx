import React, { useState } from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import AdventureTypes from "@/components/organisms/AdventureTypes";
import HowItWorks from "@/components/organisms/HowItWorks";
import CallToAction from "@/components/organisms/CallToAction";
import Footer from "@/components/organisms/Footer";
import DotsPattern from "@/components/organisms/DotsPattern";

// AWeber Form Component
const AWeberForm = () => {
  React.useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById('aweber-wjs-a3o6bo3r0')) {
      return;
    }

    // Create and load the AWeber script
    const script = document.createElement('script');
    script.id = 'aweber-wjs-a3o6bo3r0';
    script.type = 'text/javascript';
    script.src = '//forms.aweber.com/form/27/333389527.js';
    script.async = true;

    // Insert script into document
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('aweber-wjs-a3o6bo3r0');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto backdrop-blur-sm bg-white/95 shadow-2xl rounded-lg p-6">
      <div className="AW-Form-333389527"></div>
    </div>
  );
};

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
            <AWeberForm />
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