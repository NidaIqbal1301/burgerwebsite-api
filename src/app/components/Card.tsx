import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burger</h2>
        <p className="text-white mb-4">
          Experience the juiciest burger in the town, made with fresh
          ingredients and grilled to perfection
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Burger Launches
        </h3>

        <ul className="">
          <li className="">
            {" "}
            <strong> Cheesy BBQ Bacon Burger: </strong>A mouthwatering blend of
            cheddar cheese, crispy bacon, and BBQ.
          </li>
          <br />

          <li className="">
            {" "}
            <strong> Spicy Jalapeno Burger: </strong>A fiery delight topped with
            fresh jalapenos and zesty chipotle mayo.
          </li>
          <br />

          <li className="">
            {" "}
            <strong> Mushroom Swiss burger: </strong>
            Juicy beef patty melted swiss cheese for a rich, savory taste.
          </li>
          <br />

          <li className="">
            {" "}
            <strong> Avocado Veggie Burger: </strong>A delicious plant-based
            option featuring a grilled veggies patty.
          </li>
          <br />

          <li className="">
            {" "}
            <strong> Buffalo Chicken Burger: </strong>
            crispy chicken breast tossed in spicy buffalo sauce.
          </li>
          <br />
        </ul>
        </div>
        <div className="md:1/2 mt-6 md:mt-0">
          <img 
          src="https://www.shutterstock.com/image-photo/top-view-home-made-tasty-600nw-1457602886.jpg" 
          alt="delicious burger" 
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" />
        </div>

      
    </section>
  );
};

export default FloatingImageContentBlock;
