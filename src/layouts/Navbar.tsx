import React from "react";

// components
import { Link, Button } from "common";

const navs = [
  {
    name: "Home",
    path: "/",
    slot: "home",
  },
  {
    name: "About",
    path: "/about",
    slot: "about",
  },
  {
    name: "Services",
    path: "/services",
    slot: "services",
  },
  {
    name: "Products",
    path: "/products",
    slot: "products",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full h-20">
      <Logo />
      <NavLinks />
      <Button>Call to Action</Button>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <a href="/" className="text-2xl font-bold cursor-pointer">
      Logo
    </a>
  );
};

const NavLinks: React.FC = () => {
  return (
    <ul className="flex items-center space-x-5">
      {navs.map((nav) => (
        <li key={nav.slot}>
          <Link name={nav.name} path={nav.path} slot={nav.slot} />
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
