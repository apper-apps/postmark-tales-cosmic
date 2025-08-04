import React from "react";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const AdventureCard = ({ adventure, onSelect }) => {
  const getVariant = (type) => {
    switch(type) {
      case "mystery": return "mystery";
      case "history": return "history";
      case "heroes": return "heroes";
      default: return "primary";
    }
  };

  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${adventure.color}20` }}
        >
          <ApperIcon 
            name={adventure.icon} 
            size={32} 
            style={{ color: adventure.color }}
          />
        </div>
        <h3 className="text-xl font-display font-semibold text-navy-blue">
          {adventure.title}
        </h3>
      </div>
      
      <p className="text-text-gray leading-relaxed mb-6 flex-grow">
        {adventure.description}
      </p>
      
      <Button
        variant={getVariant(adventure.type)}
        size="md"
        className="w-full"
        onClick={() => onSelect && onSelect(adventure.type)}
      >
        {adventure.ctaText}
      </Button>
    </Card>
  );
};

export default AdventureCard;