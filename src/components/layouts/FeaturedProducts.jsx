import React from "react";
import Container from "../Container";
import Product from "../Product";
import women from "../../assets/women.png";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import Flex from "../Flex";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProducts = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center pb-10">
          <h3 className="text-[26px] font-medium text-[#2E2E2E]">Flash Deals</h3>
          <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">View More <FaArrowRight /></button>
        </div>
          <Flex>
            <Product
              productImg={women}
              badgeText={"-23% OFF"}
              productRating={
                <>
                  <IoStar /> 
                  <IoStar /> 
                  <IoStar /> 
                  <IoStar /> 
                  <IoStarHalf />
                </>
              }
              productTitle={"Women fashion dress set"}
              productPrice={"৳10500"}
            />
          </Flex>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
