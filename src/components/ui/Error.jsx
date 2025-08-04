import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Something went wrong", 
  onRetry = null,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <ApperIcon name="AlertCircle" size={32} className="text-red-500" />
      </div>
      <h3 className="text-lg font-semibold text-navy-blue mb-2">
        Oops! Adventure Interrupted
      </h3>
      <p className="text-text-gray mb-6 max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-maroon text-white px-6 py-3 rounded-lg font-medium hover:bg-maroon/90 transition-colors duration-200 flex items-center gap-2"
        >
          <ApperIcon name="RotateCcw" size={16} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;