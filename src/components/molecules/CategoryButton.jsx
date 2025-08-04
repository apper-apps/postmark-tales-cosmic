import React from "react";
import Button from "@/components/atoms/Button";

const CategoryButton = ({ label, variant, onClick, className = "" }) => {
  return (
    <Button
      variant={variant}
      size="md"
      onClick={onClick}
      className={`min-w-[140px] ${className}`}
    >
      {label}
    </Button>
  );
};

export default CategoryButton;