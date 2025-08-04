import React from "react";
import Button from "@/components/atoms/Button";

const CallToAction = ({ onJoinWaitlist }) => {
  return (
    <section className="py-20 px-4 text-center relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-blue mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-text-gray text-lg mb-8">
          Join thousands of families already waiting for their first adventure envelope
        </p>
        
        <Button
          size="xl"
          onClick={onJoinWaitlist}
          icon="Mail"
          iconPosition="right"
          className="shadow-2xl"
        >
          Join the Adventure Waitlist
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;