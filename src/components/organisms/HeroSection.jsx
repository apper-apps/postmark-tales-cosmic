import React from "react";
import CategoryButton from "@/components/molecules/CategoryButton";

const HeroSection = ({ onCategorySelect }) => {
  return (
    <section className="text-center py-16 px-4 relative z-10">
      {/* Epic Adventures Banner */}
      <div className="inline-block bg-maroon text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
        EPIC ADVENTURES AWAIT
      </div>
      
      {/* Main Headline */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="gradient-text-navy block mb-2">
            Embark on Epic Adventures
          </span>
          <span className="gradient-text-gold text-3xl md:text-5xl lg:text-6xl">
            Delivered to Your Doorstep
          </span>
        </h1>
      </div>
      
      {/* Subtext */}
      <p className="text-text-gray text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
        Twice a month, your family will receive mysterious envelopes containing thrilling adventures, 
        unsolved mysteries, and heroic tales that transport you to other worlds.
      </p>
      
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <CategoryButton
          label="Solve Mysteries"
          variant="mystery"
          onClick={() => onCategorySelect("mystery")}
        />
        <CategoryButton
          label="Explore History"
          variant="history"
          onClick={() => onCategorySelect("history")}
        />
        <CategoryButton
          label="Find Inspiration"
          variant="heroes"
          onClick={() => onCategorySelect("heroes")}
        />
      </div>
    </section>
  );
};

export default HeroSection;