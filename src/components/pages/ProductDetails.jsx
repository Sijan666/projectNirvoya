import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Container from "../Container";
import Images from "../Images";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import productDetailsBig1 from "/src/assets/productDetailsBig1.png";
import productDetailsSmall1 from "/src/assets/productDetailsSmall1.png";
import productDetailsSmall2 from "/src/assets/productDetailsSmall2.png";
import productDetailsSmall3 from "/src/assets/productDetailsSmall3.png";
import productDetailsSmall4 from "/src/assets/productDetailsSmall4.png";
import linkedin from "/src/assets/linkedin.png";
import twitter from "/src/assets/twitter.png";
import facebook from "/src/assets/facebook.png";
import whatsapp from "/src/assets/whatsapp.png";
import link from "/src/assets/link.png";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="pt-14 pb-12.5 font-Poppins">
      <Container>
        <h6 className="flex items-center gap-x-2 text-base pb-6">
          <span className="text-[#02344F] flex items-center gap-x-2">
            Home <FaAngleRight />
          </span>{" "}
          <span className="text-[#02344F] flex items-center gap-x-2">
            Men’s fashion <FaAngleRight />
          </span>{" "}
          <span className="text-[#757575]">
            Men's Stand Collar Leather Jacket
          </span>
        </h6>
        <div className="grid grid-cols-2 gap-x-[115px] justify-between">
          <div className="w-[680px]">
            <div className="flex gap-x-6">
              <div className="">
                <Images imgSrc={productDetailsBig1} />
                <div className="flex items-center gap-x-3.5 pt-[45px]">
                  <span className="text-[#333333] text-xl">Share</span>
                  <Link to={"https://www.linkedin.com"} target="_blank">
                    <Images imgSrc={linkedin} />
                  </Link>
                  <Link to={"https://x.com"} target="_blank">
                    <Images imgSrc={twitter} />
                  </Link>
                  <Link to={"https://www.facebook.com"} target="_blank">
                    <Images imgSrc={facebook} />
                  </Link>
                  <Link to={"https://www.whatsapp.com"} target="_blank">
                    <Images imgSrc={whatsapp} />
                  </Link>
                  <Link to={"/"}>
                    <Images imgSrc={link} />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-2.5">
                <button className="cursor-pointer">
                  <FaChevronUp className="text-[#949494] text-base mb-3" />
                </button>
                <button className="cursor-pointer"><Images imgSrc={productDetailsSmall1} /></button>
                <button className="cursor-pointer"><Images imgSrc={productDetailsSmall2} /></button>
                <button className="cursor-pointer"><Images imgSrc={productDetailsSmall3} /></button>
                <button className="cursor-pointer"><Images imgSrc={productDetailsSmall4} /></button>
                <button className="cursor-pointer">
                  <FaChevronDown className="text-[#0198E9] text-base mt-3" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[610px]">
            <h3 className="text-[#333333] text-[26px] font-medium pb-4.5">
              Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
            </h3>
            <div className="flex items-center pb-8">
              <span className="text-[#333] text-lg font-medium pr-[5px]">
                4.0
              </span>
              <div className="flex items-center gap-x-[3px] -mt-1">
                <IoStarSharp className="text-2xl text-[#FFB340]" />
                <IoStarSharp className="text-2xl text-[#FFB340]" />
                <IoStarSharp className="text-2xl text-[#FFB340]" />
                <IoStarSharp className="text-2xl text-[#FFB340]" />
                <IoStarSharp className="text-2xl text-[#A7A7A7]" />
              </div>
              <span className="text-[#BABABA] text-lg pl-1">(223)</span>
              <div className="h-7 w-0.5 rounded-[22px] bg-[#F2F2F2] mx-4" />
              <FaCheck className="text-[#0AC96D] text-xl" />
              <div className="text-[#333333] text-lg pl-2.5">
                <span className="font-semibold">4,320</span> Sold
              </div>
              <div className="h-7 w-0.5 rounded-[22px] bg-[#F2F2F2] mx-4" />
              <Link to={""} className="flex items-center gap-x-3">
                <FaHeart className="text-[#C7C7C7] text-[22px]" />
                <span className="text-[#0198E9] text-lg font-Lato font-bold pb-0.5">
                  Add to wishlist
                </span>
              </Link>
            </div>
            <div className="flex items-center pb-3">
              <h5 className="text-[#0198E9] text-4xl font-semibold">$976.33</h5>
              <span className="text-[#8D8D8D] text-xl line-through ml-6 mr-4">
                $1,020.99
              </span>
              <span className="text-white text-sm font-semibold bg-linear-to-tr from-[#FF7A00] from-0% via-[#FF7A00] via-30% to-[#FFB800] to-100% px-2.5 py-1">
                20%
              </span>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="text-base">
                <span className="text-[#3D3D3F]">SKU: </span>
                <span className="text-[#757575]">12314124124</span>
              </div>
              <div className="flex items-center gap-x-1">
                <IoIosCheckmarkCircle className="text-[#3AB137] text-base" />
                <span className="text-[#757575] text-base">In Stock</span>
              </div>
            </div>
            <div className="h-px w-[595px] bg-[#EAEAEA] my-4" />
            <p className="text-[#333333] text-lg leading-7.5 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul className="list-disc ml-8 text-[#333333] text-lg leading-[200%]">
              <li>Direct Full Array</li>
              <li>Quantum Dot Technology</li>
              <li>Ambient Mode</li>
              <li>One Remote Control</li>
            </ul>
            <div className="flex items-center gap-x-4 py-8">
              <span className="text-[#333333] text-xl">Size</span>
              <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer">
                S
              </h5>
              <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer">
                M
              </h5>
              <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer">
                L
              </h5>
              <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer">
                XL
              </h5>
              <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer">
                XXL
              </h5>
            </div>
            <div className="flex items-center gap-x-8">
              <div className="flex items-center gap-x-4">
                <span className="text-[#3D3D3F] text-sm">Quantity: </span>
                <div className="border-2 border-[#EAEAEA] rounded-lg">
                  <button className="text-[#ACACAC] text-base bg-[#EFEFEF] font-semibold cursor-pointer px-2.5 py-[5px]">
                    -
                  </button>
                  <span className="text-[#3D3D3F] px-2.5 py-1.5 border-l-2 border-r-2 border-[#EAEAEA] leading-1">
                    2
                  </span>
                  <button className="text-[#ACACAC] text-base bg-[#EFEFEF] font-semibold cursor-pointer px-2.5 py-[5px]">
                    +
                  </button>
                </div>
              </div>
              <button className="text-[#0198E9] capitalize text-xl font-Lato font-medium px-10.5 py-3 border-2 border-[#0198E9] rounded-lg cursor-pointer transition-all duration-400 bg-[#EBF4F9] hover:text-white hover:bg-[#0198E9]">
                Add cart
              </button>
              <button className="text-[#0198E9] capitalize text-xl font-Lato font-medium px-10.5 py-3 border-2 border-[#0198E9] rounded-lg cursor-pointer transition-all duration-400 bg-[#EBF4F9] hover:text-white hover:bg-[#0198E9]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
