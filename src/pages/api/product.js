export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 230,
      image:
        "https://img.freepik.com/premium-photo/photo-burger-restaurant_7023-255556.jpg",
    },
    {
        id: 2,
        name: "French Burger",
        price: 250,
        image:
          "https://tb-static.uber.com/prod/image-proc/processed_images/ebc00b6fce6c996234f6343e9b7b6b86/fdf52d66534809b650058f41d517d74a.jpeg",
      },
      {
        id: 3,
        name: "Grill Burger",
        price: 330,
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg",
      },
      {
        id: 4,
        name: "Beef Burger",
        price: 250,
        image:
          "https://i.pinimg.com/736x/90/e4/82/90e4824224b82a769281ae3502e92e6c.jpg",
      },
      {
        id: 5,
        name: "Smoky Cheese Burger",
        price: 250,
        image:
          "https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg",
      },
      {
        id: 6,
        name: "Spicy Burger",
        price: 360,
        image:
          "https://www.steakburger.es/wp-content/uploads/2024/05/la-burger-683x1024.jpg",
      },
  ];

  res.status(200).json(products);
}
