import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Slider } from "@/components/ui/slider";
import { IoMdStar } from "react-icons/io";
import Product from "../Product";
import { IoStar } from "react-icons/io5";
import { allProducts } from "../data/featuredProduct";

const Allproducts = () => {
  const [priceRange, setPriceRange] = useState([75]);
  const currentPrice = priceRange[0] * 25;

  return (
    <>
      <section>
        <div className="bg-[#FAFAFA] pt-8 md:pt-[43px] pb-10 md:pb-12.5 w-full">
          <Container className={"w-full max-w-[1405px] mx-auto px-4 lg:px-0"}>
            <Flex className={"flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 xl:gap-x-13 items-start"}>
              {/* left side start */}
              <div className="leftBar w-full lg:w-[25%] xl:w-[20%] py-6 lg:py-[25px] bg-white px-5 hidden lg:block shrink-0">
                <div className="pb-[18px] border-b border-[#F4F4F4]">
                  <h4 className="text-[#3D3D3F] text-[18px] font-medium">
                    Related Categories
                  </h4>
                  <p className="text-[#757575] text-base py-1 hover:text-[#0198E9] cursor-pointer duration-300">
                    Men’s fashion
                  </p>
                  <div className="pl-2">
                    <ul className="text-[#757575] text-base ">
                      <li className="mb-1 hover:text-[#0198E9] cursor-pointer duration-300">
                        Men’s Jacket
                      </li>
                      <li className="mb-1 hover:text-[#0198E9] cursor-pointer duration-300">
                        Men's T-Shirts
                      </li>
                      <li className="mb-1 hover:text-[#0198E9] cursor-pointer duration-300">
                        Casual Shirts
                      </li>
                      <li className="mb-1 hover:text-[#0198E9] cursor-pointer duration-300">
                        Summer T-Shirts
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-between items-center cursor-pointer pb-8">
                    <h4 className="text-[#383838] font-medium text-[18px]">
                      Filter by Price
                    </h4>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className="range">
                    <Slider
                      defaultValue={[75]}
                      max={100}
                      step={1}
                      onValueChange={(value) => setPriceRange(value)}
                      className="custom-range-slider w-full mx-auto"
                    />
                  </div>
                  <div className="price py-6 border-b border-[#F4F4F4]">
                    <Flex className={"gap-x-2"}>
                      <p className="text-[#A7A7A7] text-[18px]">Price:</p>
                      <p className="text-[#383838] text-[18px] font-medium">
                        ৳ 0 - ৳ {currentPrice}
                      </p>
                    </Flex>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-between items-center cursor-pointer pb-8">
                    <h4 className="text-[#383838] font-medium text-[18px]">
                      Filter by Rating
                    </h4>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className="">
                    <div className="flex gap-x-3 items-center mb-4">
                      <input type="checkbox" />
                      <IoMdStar className="text-[#FFB340]" />
                    </div>
                    <div className="flex gap-x-3 items-center mb-4">
                      <input type="checkbox" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                    </div>
                    <div className="flex gap-x-3 items-center mb-4">
                      <input type="checkbox" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                    </div>
                    <div className="flex gap-x-3 items-center mb-4">
                      <input type="checkbox" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                    </div>
                    <div className="flex gap-x-3 items-center mb-4">
                      <input type="checkbox" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                      <IoMdStar className="text-[#FFB340]" />
                    </div>
                  </div>
                </div>
              </div>
              {/* left side end */}
              {/* right side start */}
              <div className="rightSide w-full lg:flex-1">
                <Flex className="flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0 items-start sm:items-center">
                  <div className="left">
                    <h4 className="text-sm md:text-base lg:text-[18px] text-[#424241]/50 font-medium">
                      Showing <span className="text-[#424241]"> 20 </span> of{" "}
                      <span className="text-[#424241]">160</span> product
                    </h4>
                  </div>
                  <div className="right flex gap-x-2 items-center">
                    <h4 className="text-sm md:text-base lg:text-[18px] text-[#424241]/50 font-medium whitespace-nowrap">
                      Sort by:
                    </h4>
                    <select className="px-2 sm:px-4 py-1 text-[#424241] border border-[#F0F0F0] outline-none w-28 sm:w-32 lg:w-40 appearance-none text-sm md:text-base lg:text-[18px]">
                      <option value="">Newest Items</option>
                      <option value="">Featured</option>
                      <option value="">Best Sellers</option>
                      <option value="">Final Offer</option>
                    </select>
                  </div>
                </Flex>
                {/* first line start */}
                <div className="pt-6">
                  {/* product 1*/}
                  <div className="flex flex-wrap gap-y-6 justify-between">
                    {allProducts?.map((item) => (
                      <div key={item?.id} className={"w-[48%] md:w-[32%]"}>
                        <Product
                          productImg={item?.productImage}
                          badgeText={""}
                          productRating={
                            <>
                              <IoStar />
                              <IoStar />
                              <IoStar />
                              <IoStar />
                              <IoStar className="text-[#D3D3D3]" />
                            </>
                          }
                          productTitle={item?.productTitle}
                          productPrice={item?.price}
                        />
                      </div>
                    ))}
                  </div>
                  {/* product 1*/}
                </div>
                {/* first line end */}
              </div>
              {/* right side end */}
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Allproducts;