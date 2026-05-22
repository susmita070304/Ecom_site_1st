import React from "react";
import sofaImage from "./sofa.jpg";
import curtainsImage from "./curtains.jpg";
import backgroundImage from "./background1.jpg";
import productsLogo from "./productsLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  return (
    <div className="h-full max-w-screen">
      <div
        className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Logo */}
        <div 
          className="h-[200px] w-[300px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${productsLogo})` }}
        ></div>

        {/* Products Row Container */}
        <div className="flex flex-row items-center justify-center gap-40 mt-10">
          
          {/* Curtains Column (Photo + Text) */}
          <div className="flex flex-col items-center">
            <div
              className="h-[285px] w-[400px] bg-contain bg-center bg-no-repeat bg-black rounded-3xl cursor-pointer"
              style={{ backgroundImage: `url(${curtainsImage})` }}
            ></div>
            <h1 className="text-4xl font-bold mt-4 font-serif text-black">Curtains</h1>
          </div>

          {/* Sofas Column (Photo + Text) */}
          <div className="flex flex-col items-center">
            <div
              className="h-[285px] w-[400px] bg-contain bg-center bg-no-repeat bg-black rounded-3xl cursor-pointer"
              style={{ backgroundImage: `url(${sofaImage})` }}
            ></div>
            <h1 className="text-4xl font-bold mt-4 font-serif text-black">Sofas</h1>
          </div>

        </div>
      </div>
    </div>
  );
}