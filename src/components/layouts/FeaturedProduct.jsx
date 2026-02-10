import React from "react";
import Container from "../Container";
import Product from "../Product";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { featuredProduct } from "../data/featuredProduct";

const FeaturedProduct = () => {
  return (
    <>
      <div className="pb-12.5 w-[420px] lg:w-full">
        <Container className={"lg:w-[1405px] w-[395px]"}>
          <div className="flex justify-between items-center pb-10 px-2">
            <h3 className="text-[26px] font-medium text-[#2E2E2E]">
              Featured Product
            </h3>
            <Link to={"/allproducts"}>
              <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">
                View More <FaArrowRight />
              </button>
            </Link>
          </div>
          {/* Product 1*/}
          <div className="flex flex-wrap gap-y-5 justify-between px-2">
            {featuredProduct?.map((item) => (
              <div key={item?.id} className="w-[48%] lg:w-[24%]">
                <Product
                  productImg={item?.productImage}
                  badgeText={""}
                  productRating={
                    <div className="flex">
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar className="text-[#D3D3D3]" />
                    </div>
                  }
                  productTitle={item?.productTitle}
                  productPrice={item?.price}
                />
              </div>
            ))}
          </div>
          {/* Product 1*/}
          {/* Show more Button */}
          <div className="text-center pt-10">
            <Link to={"/allproducts"}>
              <button className="px-6.5 py-[11px] text-white font-semibold text-base rounded-[81px] bg-[#0198E9] cursor-pointer flex gap-x-2 items-center mx-auto hover:bg-sky-600 transition-colors">
                Show more <MdOutlineKeyboardArrowDown />
              </button>
            </Link>
          </div>
          {/* Show more Button */}
        </Container>
      </div>
    </>
  );
};

export default FeaturedProduct;
