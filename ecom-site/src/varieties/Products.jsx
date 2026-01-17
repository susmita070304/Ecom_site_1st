import React from "react";
import sofaImage from "./sofa.jpg";
import curtainsImage from "./curtains.jpg";
import backgroundImage from "./background1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";



export default function Products() {
  return (
    <div className="h-[500px] w-[1520px]">
      <div
        className=" bg-contain  bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="min-h-screen bg-auto bg-center bg-no-repeat"
          style={{ curtainsImage: `url(${curtainsImage})` }}
        ></div>
        <div
          className="min-h-screen bg-auto bg-center bg-no-repeat"
          style={{ sofaImage: `url(${sofaImage})` }}
        ></div>

        <h1 className="text-white text-3xl p-6">
          Products Page
        </h1>
      </div>
    </div>
  );
}
