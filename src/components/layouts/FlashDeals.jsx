import React from "react";
import Container from "../Container";
import Product from "../Product";
import women from "../../assets/women.png";
import { IoStar } from "react-icons/io5";
import Flex from "../Flex";
import { FaArrowRight } from "react-icons/fa6";
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'
import w4 from '../../assets/w4.png'
import { Link } from "react-router-dom";


const FlashDeals = () => {
  return (
    <div className="pb-12.5">
      <Container>
        {/* title part */}
        <div className="flex justify-between items-center pb-10">
          <h3 className="text-[26px] font-medium text-[#2E2E2E]">Flash Deals</h3>
          <Link to={'/allproducts'}>
            <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">
              View More <FaArrowRight />
            </button>
          </Link>
        </div>
        {/* title part */}
        {/* product part  */}
          <Flex className={'flex-wrap gap-y-5 justify-between px-2'}>
            {/* product 1 */}
            <div className="w-[48%] lg:w-[24%]">
              <Product
                productImg={women}
                badgeText={"-23% OFF"}
                productRating={
                  <>
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar className="text-[#D3D3D3]"/> 
                  </>
                }
                productTitle={"Headrest Executive Mesh Office Chair set"}
                productPrice={"৳10500"}
                />
              </div>
            {/* product 2 */}
            <div className="w-[48%] lg:w-[24%]">
              <Product
                productImg={w2}
                badgeText={"-23% OFF"}
                productRating={
                  <>
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar className="text-[#D3D3D3]"/> 
                  </>
                }
                productTitle={"Women fashion dress set"}
                productPrice={"৳1000"}
                />
                </div>
            {/* product 3 */}
            <div className="w-[48%] lg:w-[24%]">
              <Product
                productImg={w3}
                badgeText={"-23% OFF"}
                productRating={
                  <>
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar className="text-[#D3D3D3]"/> 
                  </>
                }
                productTitle={"Headrest Executive Mesh Office Chair set"}
                productPrice={"৳5000"}
                />
                </div>
            {/* product 4 */}
            <div className="w-[48%] lg:w-[24%]">
              <Product
                productImg={w4}
                badgeText={"-23% OFF"}
                productRating={
                  <>
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar /> 
                    <IoStar className="text-[#D3D3D3]"/> 
                  </>
                }
                productTitle={"Women black dress and red hat collections"}
                productPrice={"৳1000.00"}
                />
              </div>
          </Flex>
          {/* product part  */}
      </Container>
    </div>
  );
};

export default FlashDeals;
