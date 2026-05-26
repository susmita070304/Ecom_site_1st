import React from "react";
import sofaImage from "./sofa.jpg";
import curtainsImage from "./curtains.jpg";
import backgroundImage from "./background1.jpg";
import productsLogo from "./productsLogo.jpg";
import { Link } from "react-router-dom";

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

        {/* PRODUCTS */}

        <div className="flex flex-row items-center justify-center gap-40 mt-10">

          {/* SOFA */}

          <Link to="/product/1">

            <div className="flex flex-col items-center">

              <div
                className="h-[285px] w-[400px] bg-cover bg-center bg-no-repeat border-solid border-[3px] border-black rounded-[0px_30px_160px_0px] cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${sofaImage})` }}
              ></div>

              <button className="w-[300px] py-4 bg-gray-100 border-[2px] border-black text-4xl font-bold uppercase tracking-wide mt-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">

                Sofa

              </button>

            </div>

          </Link>

          {/* CURTAINS */}

          <Link to="/product/5">

            <div className="flex flex-col items-center">

              <div
                className="h-[285px] w-[400px] bg-cover bg-center bg-no-repeat border-solid border-[3px] border-black rounded-[160px_0px_0px_0px] cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${curtainsImage})` }}
              ></div>

              <button className="w-[300px] py-4 bg-gray-100 border-[2px] border-black text-4xl font-bold uppercase tracking-wide mt-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">

                Curtains

              </button>

            </div>

          </Link>

        </div>

      </div>

    </div>
  );
}