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
        className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex flex-row items-center justify-center" "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        <div className="h-[400px] w-[400px] bg-contain bg-center bg-no-repeat flex flex-row items-center justify-start"
          style={{ backgroundImage: `url(${productsLogo})` }}>

          <div
          className="h-[100px] w-[100px] bg-contain bg-center bg-no-repeat bg-black mr-10"
          style={{ backgroundImage: `url(${curtainsImage})` }}
        ></div>

        <div
          className="h-[100px] w-[100px] bg-contain bg-center bg-no-repeat bg-black mr-10"
          style={{ backgroundImage: `url(${sofaImage})` }}
        ></div>

        </div>


    </div>
    </div>
  );
}
