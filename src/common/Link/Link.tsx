import React from "react";

interface LinkProps {
  name: string;
  path: string;
  slot: string;
}

const Link: React.FC<LinkProps> = ({ name, path }) => {
  return (
    <a
      className="text-sm font-bold transition text-app hover:text-black"
      href={path}
    >
      {name}
    </a>
  );
};

export default Link;
