import React from "react";

// core
import { Button, OutlineButton } from "common";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SectionFrist />
      <SectionSecond />
    </div>
  );
};

const SectionFrist: React.FC = () => {
  return (
    <div className="grid px-10 py-20 lg:grid-cols-2 lg:px-0">
      {/* left */}
      <div className="flex flex-col justify-center mr-32">
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl font-black leading-tight">
            Lorem ipsum dolor sit amet consectetur
          </h1>

          <p className="text-app">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus veneatis, lectus
          </p>

          <div className="flex items-center space-x-2">
            <Button>Call to Action</Button>
            <OutlineButton>See Workspace</OutlineButton>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="relative hidden aspect-square lg:block">
        <div className="absolute bottom-0 left-0 w-5/6 aspect-square bg-gray-warm" />
        <div className="absolute top-0 right-0 w-1/2 aspect-square bg-gray-cold" />
      </div>
    </div>
  );
};

const SectionSecond: React.FC = () => {
  return (
    <div className="grid gap-10 px-10 py-20 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
      {/* left */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-lg font-black">Header Text</h1>
        <p className="text-app">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
          purus sit amet luctus veneatis, lectus magna fringilia uma, porttitor
          rhoncus dolor purus non enim dolor
        </p>
      </div>

      {/* middle */}
      <div className="hidden aspect-square bg-gray-warm lg:block"></div>

      {/* right */}
      <div className="flex flex-col justify-end">
        <h1 className="text-lg font-black">Header Text</h1>
        <p className="text-app">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
          purus sit amet luctus veneatis, lectus magna fringilia uma, porttitor
          rhoncus dolor purus non enim dolor
        </p>
      </div>
    </div>
  );
};

export default Home;
