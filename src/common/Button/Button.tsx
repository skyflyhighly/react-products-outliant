import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center px-4 text-sm text-white bg-black rounded cursor-pointer h-9">
      {children}
    </div>
  );
};

export default Button;
