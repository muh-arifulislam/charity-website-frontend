import React, { ButtonHTMLAttributes } from "react";

// Define a type for the button variant prop
type ButtonVariant = "primary" | "secondary" | "outlined" | "white";

// Extend ButtonHTMLAttributes to include native button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // Default to 'primary' if no variant is provided
  className = "",
  ...props
}) => {
  // Define base styles for all buttons
  const baseStyles = `px-5 py-3 font-semibold uppercase rounded-[34px] focus:outline-none transition-all ease-lineary`;

  // Define variant-specific styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white tra hover:bg-primary-600",
    secondary: "bg-accent text-white hover:bg-gray-700",
    white: "bg-white text-accent hover:bg-accent-400 hover:text-white",
    outlined:
      "border border-accent-400 text-accent-500 hover:bg-accent-400 hover:text-white",
  };

  // Combine base styles, variant styles, and any additional classes passed via className
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
