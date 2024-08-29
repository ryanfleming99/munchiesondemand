import React from "react";

const Shop = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Item"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Item Name</h3>
            <p className="text-gray-700 mb-4">Item description goes here.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
