import React from "react";

const Shop = () => {
  const products = [
    {
      name: "Gourmet Burger",
      description:
        "Juicy beef patty with fresh lettuce, tomatoes, and a toasted bun.",
      image: "https://via.placeholder.com/300?text=Gourmet+Burger"
    },
    {
      name: "Sushi Platter",
      description: "A variety of fresh sushi, including nigiri and rolls.",
      image: "https://via.placeholder.com/300?text=Sushi+Platter"
    },
    {
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with a creamy frosting.",
      image: "https://via.placeholder.com/300?text=Chocolate+Cake"
    },
    {
      name: "Pasta Carbonara",
      description:
        "Classic Italian pasta with a creamy sauce and crispy pancetta.",
      image: "https://via.placeholder.com/300?text=Pasta+Carbonara"
    },
    {
      name: "Grilled Steak",
      description: "Perfectly grilled steak with a side of garlic butter.",
      image: "https://via.placeholder.com/300?text=Grilled+Steak"
    },
    {
      name: "Fruit Tart",
      description:
        "Delicious tart filled with custard and topped with fresh fruit.",
      image: "https://via.placeholder.com/300?text=Fruit+Tart"
    }
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Our Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
