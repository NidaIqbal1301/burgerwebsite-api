import React from "react";

const products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "Fixing",
    price: 200.0,
    imageUrl:
      "https://i.pinimg.com/736x/90/e4/82/90e4824224b82a769281ae3502e92e6c.jpg",
  },
  {
    id: 2,
    title: "Classy Burger",
    category: "Delight",
    price: 250.0,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg",
  },
  {
    id: 3,
    title: "Family Burger",
    price: 400.0,
    category: "Fixing",
    imageUrl:
      "https://www.steakburger.es/wp-content/uploads/2024/05/la-burger-683x1024.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg shadow-lg overflow-hidden"
            style={{
              width: "350px",
              height: "450px",
              margin: "10px",
            }}
          >
            {/* Image with Hover Effect */}
            <div
              className="absolute inset-0 group-hover:scale-110 transition-transform"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            ></div>

            {/* Overlay for Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <span className="text-white text-sm opacity-75">{product.category}</span>
              <div className="flex justify-between items-center mt-2">
                <span className="text-white font-semibold text-xl">{product.title}</span>
                <span className="bg-white text-orange-500 text-xs font-bold px-3 py-2 rounded-full">
                  {product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
