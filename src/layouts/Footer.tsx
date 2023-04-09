import React from "react";

import { Button } from "common";

const Footer: React.FC = () => {
  return (
    <div className="mt-20 lg:mt-40 bg-app">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="hidden -translate-y-20 lg:block aspect-square bg-gray-warm"></div>
          {/* right */}
          <div className="flex flex-col justify-center p-10 lg:mr-32 lg:p-0">
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl font-black leading-tight">
                Lorem ipsum dolor sit amet consectetur
              </h1>

              <p className="text-app">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet luctus veneatis, lectus
              </p>

              <Button>Call to Action</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
