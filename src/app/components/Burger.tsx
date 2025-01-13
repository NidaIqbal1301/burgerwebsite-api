import React from 'react'

const products = [
    {
      id: 1,
      title: "Premium Burger",
      category: "Hearty",
      price: 200.0,
      imageUrl:
        "https://img.freepik.com/premium-photo/photo-burger-restaurant_7023-255556.jpg",
    },
    {
      id: 2,
      title: "Speedy's Burger",
      category: "Delight",
      price: 250.0,
      imageUrl:
        "https://tb-static.uber.com/prod/image-proc/processed_images/ebc00b6fce6c996234f6343e9b7b6b86/fdf52d66534809b650058f41d517d74a.jpeg",
    },
    {
      id: 3,
      title: "Meat Cheese Grill",
      price: 400.0,
      category: "Grill",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGO9Q21WN_cat29Olwlcu3hR2TJuF8Iffiw&s",
    },
  ];

const Burger = () => {
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
  )
}

export default Burger
