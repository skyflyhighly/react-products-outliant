import React from "react";

type InputProps = JSX.IntrinsicElements["input"];

const Input: React.FC<InputProps> = ({ className, children, ...rest }) => {
  return (
    <input
      className={`inline-flex items-center w-full h-10 px-4 border border-black rounded outline-none ${className}`}
      {...rest}
    />
  );
};

export default Input;
