import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-[#ffffff] h-[1024px] relative overflow-hidden">
      <div
        className="bg-[#b2ddc2] rounded-[5px] border-solid border-[#000000] border w-[159px] h-14 absolute left-[315px] top-[857px]"
      ></div>
      <div
        className="bg-[#b2ddc2] rounded-[5px] border-solid border-[#000000] border w-[159px] h-14 absolute left-[923px] top-[861px]"
      ></div>
      <div
        className="bg-[#b2ddc2] border-solid border-[#000000] border-2 w-[894px] h-[486px] absolute left-[262px] top-[146px]"
      ></div>
      <div
        className="text-[#000000] text-left font-['Roboto-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[339px] top-[866px] w-[156px] h-[101px]"
      >
        Buy Now
      </div>
      <div
        className="text-[#000000] text-left font-['Roboto-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[940px] top-[867px] w-[156px] h-[115px]"
      >
        Learn More
      </div>
      <div
        className="text-[#000000] uppercase absolute left-[171px] top-[731px] w-[1160px] h-24 text-align: center"
      >
        <span >
          <span className="get-everything-you-need-to-make-your-house-a-home-span">
            Get Everything you need to make your house a
          </span>
          <span
            className="get-everything-you-need-to-make-your-house-a-home-span2"
          ></span>
          <span className="get-everything-you-need-to-make-your-house-a-home-span3 text-4xl font-bold">
            home
          </span>
          <span
            className="get-everything-you-need-to-make-your-house-a-home-span2"
          ></span>
        </span>
      </div>
      <div
        className="bg-[#b2ddc2] rounded-[50%] w-[72px] h-[72px] absolute left-[1232px] top-[632px]"
      ></div>
      <div
        className="text-[#000000] text-left font-['Roboto-Bold',_sans-serif] text-5xl font-bold absolute left-[1254px] top-[640px]"
        style="letter-spacing: 1.35em"
      >
        +
      </div>
      <div
        className="w-6 h-6 absolute left-[1011px] top-[72px] overflow-hidden"
        style="aspect-ratio: 1"
      ></div>
      <img
        className="border-solid border-[#000000] border w-[894px] h-[501px] absolute left-[262px] top-[131px]"
        style="object-fit: cover; aspect-ratio: 894/501"
        src="main.jpg"
      />
      <div
        className="text-left absolute left-[25px] top-[9px] w-[156px] h-[101px]"
        style="-webkit-text-stroke: 1px #000000"
      >
        <span>
          <span className="comfy-home-span">
            Comfy
            <br />
          </span>
          <span className="comfy-home-span2 text-2xl">Home</span>
        </span>
      </div>
    </div>
  );
}
