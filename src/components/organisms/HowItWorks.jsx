import React from "react";
import ProcessStep from "@/components/molecules/ProcessStep";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Your Adventure",
      description: "Pick your story type! Will you solve mysteries, explore history, or meet legendary heroes? Each series is crafted for different ages, interests, and family dynamics.",
      highlight: "3 Epic Story Worlds Available"
    },
    {
      step: 2,
      title: "Mystery Arrives",
      description: "Twice each month, a mysterious envelope containing clues, letters, maps, and artifacts that advance your story.",
      highlight: "Beautifully Designed Physical Material"
    },
    {
      step: 3,
      title: "Adventure Together",
      description: "Gather your family to read, solve the unfolding story, and create discussion. This interactive experience brings everyone closer together.",
      highlight: "Create Lasting Memories"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            How Your Journey Begins
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Three steps to embark on unforgettable adventures with your family.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <ProcessStep
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              highlight={step.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;