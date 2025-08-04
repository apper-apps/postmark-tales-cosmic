import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  className = "", 
  type = "text", 
  label = "",
  error = "",
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-3 border-2 rounded-lg text-navy-blue placeholder-text-gray/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white";
  
  const stateStyles = error 
    ? "border-red-400 focus:border-red-500 focus:ring-red-200"
    : "border-gray-200 focus:border-maroon focus:ring-maroon/20";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-navy-blue">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={cn(baseStyles, stateStyles, className)}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;