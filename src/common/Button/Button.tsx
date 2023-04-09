import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth = false }) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 text-sm text-white bg-black rounded cursor-pointer w-fit whitespace-nowrap h-9 ${
        fullWidth ? "!w-full" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
