import React from "react";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ProcessStep = ({ step, title, description, highlight }) => {
  return (
    <Card className="text-center h-full flex flex-col">
      <div className="w-16 h-16 bg-gradient-to-br from-gold to-maroon text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-lg">
        {step}
      </div>
      
      <h3 className="text-xl font-display font-semibold text-navy-blue mb-3">
        {title}
      </h3>
      
      <p className="text-text-gray leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      
      {highlight && (
        <div className="bg-gradient-to-r from-gold/10 to-maroon/10 rounded-lg p-3">
          <p className="text-sm font-semibold text-navy-blue">
            {highlight}
          </p>
        </div>
      )}
    </Card>
  );
};

export default ProcessStep;