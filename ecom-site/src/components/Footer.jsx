import React from "react";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (

    <div class="mt-4">
   {/* Back to Top */}
  <div class="bg-[#37475a] text-white h-12 flex justify-center items-center text-base">
    Back to Top
  </div>

  {/* Foot Panel */}
  <div class="bg-[#222f3d] text-white h-[500px] flex justify-evenly">
    <ul class="mt-5">
      <p class="font-semibold">Get to Know Us</p>
      <a class="block text-sm mt-2 text-[#dddddd]">About Us</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Careers</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Press Releases</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Amazon Science</a>
    </ul>

    <ul class="mt-5">
      <p class="font-semibold">Connect with Us</p>
      <a class="block text-sm mt-2 text-[#dddddd]">Facebook</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Twitter</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Instagram</a>
    </ul>

    <ul class="mt-5">
      <p class="font-semibold">Make Money with Us</p>
      <a class="block text-sm mt-2 text-[#dddddd]">Sell on Amazon</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Sell under Amazon Accelerator</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Protect and Build Your Brand</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Amazon Global Selling</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Become an Affiliate</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Fulfillment by Amazon</a>
    </ul>

    <ul class="mt-5">
      <p class="font-semibold">Let Us Help You</p>
      <a class="block text-sm mt-2 text-[#dddddd]">Your Account</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Returns Centre</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Help</a>
      <a class="block text-sm mt-2 text-[#dddddd]">100% Purchase Protection</a>
      <a class="block text-sm mt-2 text-[#dddddd]">Amazon App Download</a>
    </ul>
  </div>

  {/* Logo Panel */}
  <div class="bg-[#222f3d] text-white border-t border-white h-[70px] flex items-center justify-center">
    <div class="mt-4 ml-1 bg-[url('amazon_logo.png')] bg-contain bg-no-repeat h-[30px] w-[100px]"></div>
  </div>

  {/* Footer Bottom */}
  <div class="bg-[#0f1111] text-white h-[75px] text-center">
    <div class="text-xs pt-6">
      <a class="mx-2">Conditions of Use</a>
      <a class="mx-2">Privacy Notice</a>
      <a class="mx-2">Your Ads Privacy Choices</a>
    </div>
    <div class="text-xs mt-1">
      © 1996-2024, Amazon.com, Inc. or its affiliates
    </div>
  </div>
</div>

);
};

export default Footer;