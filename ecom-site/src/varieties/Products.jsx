import React from "react";
import sofaImage from "./sofa.jpg";
import curtainsImage from "./curtains.jpg";
import backgroundImage from "./background1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faHouse} />;

export default function Products() {
  return (
    <div className="bg-[#ffffff] h-[740px] relative overflow-hidden ">
      <div
        className="logo text-left absolute left-[25px] top-[9px] w-[156px] h-[101px]"
        style={{ WebkitTextStroke: "1px #000000" }}
      >
        <span>
          <span className="logo block text-xl font-bold">Comfy</span>
          <span className="logo text-3xl text-[#b2ddc2] font-bold ">Home</span>
        </span>
      </div>
      <div className="icons absolute right-[178px] top-[10px] w-11 h-11 text-black fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-full h-full"
        >
          <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
        </svg>
      </div>
      <div className="icons absolute right-[129px] top-[10px] w-11 h-11 text-black fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-full h-full"
        >
          <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
        </svg>
      </div>
      <div className="icons absolute right-[78px] top-[10px] w-11 h-11 text-black fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-full h-full"
        >
          <path d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z" />
        </svg>
      </div>
      <div className="icons absolute right-[25px] top-[10px] w-12 h-12 text-black fill-current">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-full h-full"
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
      </div>
    </div>
  );
}
