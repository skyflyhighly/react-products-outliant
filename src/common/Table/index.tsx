import React from "react";

interface TableProps {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
  return <table className="relative border border-black">{children}</table>;
};

export const THead: React.FC<TableProps> = ({ children }) => {
  return <div className="bg-app">{children}</div>;
};
export const Tbody: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col divide-y divide-black last:border-b last:border-b-black">
      {children}
    </div>
  );
};

export const TH: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="font-black min-h-[2.5rem] p-3 w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export const TR: React.FC<TableProps> = ({ children }) => {
  return <div className="flex divide-x divide-black">{children}</div>;
};

export const TD: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="min-h-[2.5rem] p-3 w-full flex items-center justify-center text-app">
      {children}
    </div>
  );
};
