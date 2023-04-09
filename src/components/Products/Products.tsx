import React from "react";

// components
import {
  Input,
  Button,
  Table,
  THead,
  Tbody,
  TR,
  TH,
  TD,
  OutlineButton,
} from "common";

const products = [
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },

  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
  {
    naem: "Lorem ipsum",
    price: "Lorem ipsum",
  },
];

const Products: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 py-20">
      <ProductsHeader />
      <ProductsContent />
    </div>
  );
};

const ProductsHeader: React.FC = () => {
  return (
    <div className="flex items-center px-10 space-x-20 lg:px-0 lg:w-1/2">
      <h1 className="text-5xl font-bold">Products</h1>
      <Input placeholder="Search for keywords..." />
    </div>
  );
};

const ProductsContent: React.FC = () => {
  return (
    <div className="grid gap-10 px-10 lg:px-0 lg:gap-0 lg:grid-cols-2">
      {/* table */}
      <Table>
        <THead>
          <TR>
            <TH>Name</TH>
            <TH>Price</TH>
            <TH>Action</TH>
          </TR>
        </THead>

        <Tbody>
          {products.map((product, index) => (
            <TR key={index}>
              <TD>{product.naem}</TD>
              <TD>{product.price}</TD>
              <TD>
                <div className="flex items-center gap-3">
                  <Button>Edit</Button>
                  <OutlineButton>Delete</OutlineButton>
                </div>
              </TD>
            </TR>
          ))}
        </Tbody>
      </Table>

      {/* right */}
      <div className="flex flex-col p-10 space-y-5 text-center lg:ml-20 bg-app h-fit">
        <div className="text-xl font-black">Header Text</div>
        <p className="text-app">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
        </p>
        <Input className="!border-none" placeholder="Name" />
        <Input className="!border-none" placeholder="Price" />
        <Button fullWidth>Call to Action</Button>
      </div>
    </div>
  );
};

export default Products;
