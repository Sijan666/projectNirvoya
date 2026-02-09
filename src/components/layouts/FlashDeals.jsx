import React from "react";
import Container from "../Container";
import Product from "../Product";
import Flex from "../Flex";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "/src/components/data/prodcuts"; 

const FlashDeals = () => {
  return (
    <div className="pb-12.5 w-[420px] lg:w-full">
      <Container className={'lg:w-[1405px] w-[395px]'}>
        
        {/* Title Section */}
        <div className="flex justify-between items-center pb-10">
          <h3 className="text-[26px] font-medium text-[#2E2E2E]">Flash Deals</h3>
          <Link to={'/allproducts'}>
            <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">
              View More <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Dynamic Product List */}
        <Flex className={'flex-wrap gap-y-5 justify-between px-2'}>
          {products?.map((item) => (
            <div key={item?.id} className="w-[48%] lg:w-[24%]">
              <Product
                productImg={item?.productImg}
                badgeText={item?.discount}
                productRating={
                  <>
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar className="text-[#D3D3D3]"/> 
                  </>
                }
                productTitle={item?.productTitle}
                productPrice={item?.productPrice}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default FlashDeals;