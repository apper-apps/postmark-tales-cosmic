import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Button = forwardRef(({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "md",
  loading = false,
  icon = null,
  iconPosition = "left",
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-maroon text-white hover:bg-maroon/90 hover:scale-105 focus:ring-maroon shadow-lg",
    secondary: "bg-white text-navy-blue border-2 border-navy-blue hover:bg-navy-blue hover:text-white hover:scale-105 focus:ring-navy-blue",
    gradient: "bg-gradient-to-r from-gold to-maroon text-white hover:from-gold/90 hover:to-maroon/90 hover:scale-105 focus:ring-gold shadow-lg",
    mystery: "bg-gradient-blue text-white hover:scale-105 focus:ring-blue-500 shadow-lg",
    history: "bg-gradient-yellow text-white hover:scale-105 focus:ring-yellow-500 shadow-lg",
    heroes: "bg-gradient-pink text-white hover:scale-105 focus:ring-pink-500 shadow-lg",
    ghost: "text-navy-blue hover:bg-navy-blue/10 hover:scale-105 focus:ring-navy-blue"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
    xl: "px-10 py-5 text-xl gap-3"
  };

  const iconSize = size === "sm" ? 14 : size === "md" ? 16 : size === "lg" ? 18 : 20;

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        loading && "cursor-wait",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <ApperIcon name={icon} size={iconSize} />
          )}
          {children}
          {icon && iconPosition === "right" && (
            <ApperIcon name={icon} size={iconSize} />
          )}
        </>
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;