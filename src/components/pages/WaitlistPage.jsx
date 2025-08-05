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
  return (
    <div className="max-w-md mx-auto backdrop-blur-sm bg-white/95 shadow-2xl rounded-lg p-6">
      <form method="post" className="af-form-wrapper" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl">
        <div style={{ display: "none" }}>
          <input type="hidden" name="meta_web_form_id" value="333389527" />
          <input type="hidden" name="meta_split_id" value="" />
          <input type="hidden" name="listname" value="awlist6905158" />
          <input type="hidden" name="redirect" value="https://www.aweber.com/thankyou-coi.htm?m=text" id="redirect_273e3d66b253527689b4f639844d23a5" />
          <input type="hidden" name="meta_adtracking" value="Postmark_Tales" />
          <input type="hidden" name="meta_message" value="1" />
          <input type="hidden" name="meta_required" value="name,email" />
          <input type="hidden" name="meta_tooltip" value="" />
        </div>
        <div id="af-form-333389527" className="af-form">
          <div id="af-header-333389527" className="af-header">
            <div className="bodyText">
              <p>&nbsp;</p>
            </div>
          </div>
          <div id="af-body-333389527" className="af-body af-standards">
            <div className="af-element">
              <label className="previewLabel" htmlFor="awf_field-118254928">Name:</label>
              <div className="af-textWrap">
                <input 
                  id="awf_field-118254928" 
                  type="text" 
                  name="name" 
                  className="text" 
                  defaultValue="" 
                  onFocus={(e) => { if (e.target.value === '') { e.target.value = ''; } }}
                  onBlur={(e) => { if (e.target.value === '') { e.target.value = ''; } }}
                  tabIndex="500" 
                />
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element">
              <label className="previewLabel" htmlFor="awf_field-118254929">Email:</label>
              <div className="af-textWrap">
                <input 
                  className="text" 
                  id="awf_field-118254929" 
                  type="email" 
                  name="email" 
                  defaultValue="" 
                  tabIndex="501" 
                  onFocus={(e) => { if (e.target.value === '') { e.target.value = ''; } }}
                  onBlur={(e) => { if (e.target.value === '') { e.target.value = ''; } }}
                />
              </div>
              <div className="af-clear"></div>
            </div>
            <div className="af-element buttonContainer">
              <input name="submit" className="submit" type="submit" value="Submit" tabIndex="502" />
              <div className="af-clear"></div>
            </div>
            <div className="af-element privacyPolicy" style={{ textAlign: "center" }}>
              <p>We respect your <a title="Privacy Policy" href="https://www.aweber.com/permission.htm" target="_blank" rel="nofollow">email privacy</a></p>
              <div className="af-clear"></div>
            </div>
            <div className="af-element poweredBy" style={{ textAlign: "center", fontSize: "9px" }}>
              <p><a href="https://www.aweber.com" title="AWeber Email Marketing" target="_blank" rel="nofollow">Powered by AWeber Email Marketing</a></p>
              <div className="af-clear"></div>
            </div>
          </div>
          <div id="af-footer-333389527" className="af-footer">
            <div className="bodyText">
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </form>
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