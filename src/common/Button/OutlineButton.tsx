import React from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center px-4 text-sm font-bold bg-white border border-black rounded cursor-pointer whitespace-nowrap h-9">
      {children}
    </div>
  );
};

export default OutlineButton;
