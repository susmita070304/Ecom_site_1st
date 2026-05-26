import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../productData/product";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(false);       // product popup
  const [showFeatureImage, setShowFeatureImage] = useState(null); // feature popup

  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  const categoryProducts = products.filter(
    (item) => item.category === product.category
  );
  const currentIndex = categoryProducts.findIndex(
    (item) => item.id === productId
  );

  const handleNextProduct = () => {
    if (currentIndex < categoryProducts.length - 1) {
      const nextProduct = categoryProducts[currentIndex + 1];
      navigate(`/product/${nextProduct.id}`);
    }
  };

  const handlePrevProduct = () => {
    if (currentIndex > 0) {
      const prevProduct = categoryProducts[currentIndex - 1];
      navigate(`/product/${prevProduct.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-20">
      <div className="bg-white w-[1200px] min-h-[850px] p-16 rounded-lg shadow-lg relative">
        
        {/* LEFT ARROW ICON */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevProduct}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-600 hover:text-black transition"
          >
            <ChevronLeftIcon className="w-12 h-12" />
          </button>
        )}

        {/* RIGHT ARROW ICON */}
        {currentIndex < categoryProducts.length - 1 && (
          <button
            onClick={handleNextProduct}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-600 hover:text-black transition"
          >
            <ChevronRightIcon className="w-12 h-12" />
          </button>
        )}

        {/* TOP SECTION */}
        <div className="flex justify-between items-center gap-16">
          {/* LEFT IMAGE with click-to-popup */}
          <div
            className="w-[550px] h-[350px] bg-[#fafafa] rounded-[40px] flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => setShowImage(true)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[450px] object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[420px]">
            <h1 className="text-4xl font-bold leading-tight capitalize text-gray-800 font-serif">
              Product: {product.name}
            </h1>
            <h2 className="text-4xl font-semibold mt-10 text-gray-700 font-serif">
              Price: {product.price}
            </h2>
            <p className="text-2xl mt-10 leading-relaxed text-gray-600 font-serif">
              {product.description}
            </p>
            <button className="mt-12 px-10 py-4 border-[3px] border-black bg-[#BCE3C9] rounded-xl text-3xl font-bold hover:scale-105 transition-all font-serif">
              Add to Cart
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24">
          <h1 className="text-6xl font-bold text-center text-gray-800 font-serif">
            FEATURES
          </h1>
          <div className="flex justify-center gap-16 mt-16 flex-wrap font-serif">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setShowFeatureImage(feature.image)}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[260px] h-[180px] object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <h2 className="text-2xl font-bold mt-6 text-center max-w-[250px] text-gray-700">
                  {feature.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN PRODUCT IMAGE POPUP */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* FULLSCREEN FEATURE IMAGE POPUP */}
      {showFeatureImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img
            src={showFeatureImage}
            alt="Feature"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() => setShowFeatureImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
