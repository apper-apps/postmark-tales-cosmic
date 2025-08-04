import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import waitlistService from "@/services/api/waitlistService";

const WaitlistForm = ({ selectedAdventure = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await waitlistService.create({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        selectedAdventure
      });

      toast.success("🎉 Welcome to the adventure! You're now on our waitlist!");
      setFormData({ name: "", email: "" });
      setErrors({});
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Card className="max-w-md mx-auto backdrop-blur-sm bg-white/95 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          label="Your Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={loading}
        />
        
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={loading}
        />
        
        <Button
          type="submit"
          size="lg"
          className="w-full"
          loading={loading}
          icon="Star"
          iconPosition="right"
        >
          Begin Your Adventure
        </Button>
        
        <p className="text-xs text-text-gray text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </Card>
  );
};

export default WaitlistForm;