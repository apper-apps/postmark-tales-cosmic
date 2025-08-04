import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No Adventures Yet",
  message = "Your journey awaits! Be the first to join our magical storytelling experience.",
  actionText = "Begin Your Adventure",
  onAction = null,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center ${className}`}>
      <div className="w-24 h-24 bg-gradient-to-br from-gold/20 to-maroon/20 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="BookOpen" size={40} className="text-navy-blue" />
      </div>
      <h3 className="text-xl font-display font-semibold text-navy-blue mb-3">
        {title}
      </h3>
      <p className="text-text-gray mb-8 max-w-md leading-relaxed">
        {message}
      </p>
      {onAction && (
        <button
          onClick={onAction}
          className="bg-maroon text-white px-8 py-4 rounded-lg font-semibold hover:bg-maroon/90 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
        >
          <ApperIcon name="Star" size={18} />
          {actionText}
        </button>
      )}
    </div>
  );
};

export default Empty;