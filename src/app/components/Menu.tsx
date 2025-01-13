"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  // Fetch products and initialize cart from localStorage
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched products:", data); // Log for debugging
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  //Cart Visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  //CheckOut Model
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  //Cart Clear Method
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20241210/pngtree-black-background-burger-bonanza-image_16720457.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burgers In Our Menu
          </h1>
          <p className="text-xl text-white">
            Welcome to our burger shop, we have a variety of delicious burgers
            for you to choose from. Our menu features everything from classic
            cheeseburgers to gourmet options with unique toppings, all made with
            the freshest ingredients to satisfy your cravings.
          </p>
        </div>

        {/* Product Section */}

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* AddToCart Section */}
        <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
  <button
    className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform"
    onClick={toggleCart}
  >
    {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
  </button>

  {showCart && (
    <div className="mt-6 bg-amber-400 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-900 text-center">
        Your Cart Items Includes:
      </h2>
      {cart.length > 0 ? (
        <div className="">
          <ul className="divide-y divide-amber-300">
            {cart.map((product, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between mb-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 sm:w-20 lg:w-24 h-40 object-cover inline-block transition-transform duration-300 ease-in-out transform hover:scale-110 text-black"
                />
                <span className="ml-0 sm:ml-4 text-sm sm:text-lg font-medium text-black mt-4 sm:mt-0 text-center sm:text-left">
                  {product.name} - ${product.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-black space-y-4 sm:space-y-0">
            <span className="font-semibold text-lg sm:text-xl">
              Total: $
              {cart.reduce((total, product) => total + product.price, 0)}
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={goToCheckout}
                className="bg-green-600 py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
              >
                Proceed To Checkout
              </button>

              <button
                onClick={clearCart}
                className="bg-red-600 py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm sm:text-lg text-slate-600 text-center">
          Your Cart is Empty
        </p>
      )}
    </div>
  )}
</div>


        {/* CheckOut Section */}

        {isCheckout && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-white">
    <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 text-center">
        CheckOut
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-amber-600 text-center">
        Please Confirm Your Order Before Proceeding
      </p>
      <div className="mt-4">
        <ul className="divide-y divide-gray-700">
          {cart.map((product, index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="font-medium text-sm sm:text-base lg:text-lg">{product.name}</span>
              <span className="text-sm sm:text-base lg:text-lg">${product.price}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-4">
          <span className="font-semibold text-sm sm:text-base lg:text-lg">Total:</span>
          <span className="font-semibold text-sm sm:text-base lg:text-lg">
            ${cart.reduce((total, product) => total + product.price, 0)}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={() => setIsCheckout(false)}
          className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Close
        </button>

        <button
          onClick={() => alert("Order Confirm... Will Deliver At Your Door Step!")}
          className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Confirm Order
        </button>
      </div>
    </div>
  </div>
)}


        {/* End Section */}
      </div>
    </div>
  );
};

export default Menu;
