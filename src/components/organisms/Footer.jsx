import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-12 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-3">
          Postmark Tales
        </h3>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Creating magical storytelling that brings families together, one letter at a time.
        </p>
        <div className="text-white/60 text-sm">
          © 2024 Postmark Tales. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;