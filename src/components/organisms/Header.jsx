import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  return (
    <header className="relative z-20">
      {/* Navy Header Bar */}
      <div className="bg-navy-blue text-white py-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-display text-2xl md:text-3xl font-bold">
            Postmark Tales
          </h1>
        </div>
      </div>
      
      {/* Development Notice */}
      <div className="bg-gray-100 text-gray-600 text-xs py-2 px-4 text-center border-b">
        This is a temporary development preview, and these links are not public. 
        Update your app using a secure source or use an inline link.
      </div>
    </header>
  );
};

export default Header;