// src/productsDetails/productDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "../productData/product";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-20">
      {/* MAIN CONTAINER */}
      <div className="bg-white w-[1200px] min-h-[850px] p-16 rounded-lg shadow-lg">
        {/* TOP SECTION */}
        <div className="flex justify-between items-center gap-16">
          {/* LEFT IMAGE */}
          <div className="w-[550px] h-[350px] bg-[#fafafa] rounded-[40px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[450px] object-contain rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[420px]">
            <h1 className="text-5xl font-bold leading-tight capitalize text-gray-800">
              Product: {product.name}
            </h1>

            <h2 className="text-4xl font-semibold mt-10 text-gray-700">
              Price: {product.price}
            </h2>

            <p className="text-2xl mt-10 leading-relaxed text-gray-600">
              {product.description}
            </p>

            {/* BUTTON */}
            <button className="mt-12 px-10 py-4 border-[3px] border-black bg-[#BCE3C9] rounded-xl text-3xl font-bold hover:scale-105 transition-all">
              Add to Cart
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24">
          <h1 className="text-6xl font-bold text-center text-gray-800">
            FEATURES
          </h1>

          {/* FEATURE CARDS */}
          <div className="flex justify-center gap-16 mt-16 flex-wrap">
            {product.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[260px] h-[180px] object-cover rounded-lg shadow-md"
                />
                <h2 className="text-2xl font-bold mt-6 text-center max-w-[250px] text-gray-700">
                  {feature.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
