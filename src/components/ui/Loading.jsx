import React from "react";

const Loading = ({ className = "", type = "spinner" }) => {
  if (type === "button") {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        <span>Joining...</span>
      </div>
    );
  }

  if (type === "form") {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-maroon/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 border-4 border-maroon/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-maroon border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-text-gray font-medium">Loading adventure...</p>
    </div>
  );
};

export default Loading;