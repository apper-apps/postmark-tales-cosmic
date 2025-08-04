import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  className = "", 
  hover = false,
  padding = "md",
  ...props 
}, ref) => {
  const baseStyles = "bg-white rounded-xl border border-gray-100 transition-all duration-200";
  
  const hoverStyles = hover 
    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "shadow-lg";

  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
  };

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        hoverStyles,
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;