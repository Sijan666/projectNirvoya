import React, { useState } from "react";
import Badge from "./Badge";
import Images from "./Images";
import Flex from "./Flex"; 
import { FaBasketShopping, FaHeart } from "react-icons/fa6";

const Product = ({
    productImg,
    badgeText,
    productTitle,
    productRating,
    productPrice,
    className, 
  }) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
      setIsLiked(!isLiked);
    };
  
  return (
    <div className="w-full"> 
      <div className="bg-white p-2.5 border border-[#E9E9E9] rounded-[10px] relative w-full overflow-hidden group">
        {/* image */}
        <div className="w-full overflow-hidden rounded-[5px]">
            <Images className={'cursor-pointer w-full h-auto object-cover'} imgSrc={productImg}/>
        </div>
        {/* badge */}
        {badgeText && <Badge className={"absolute top-[9px] left-[9px]"} badgeText={badgeText}/>}
        {/* heart icon */}
        <FaHeart onClick={handleLike} className={`absolute top-[25px] right-[25px] text-[20px] lg:text-[25px] cursor-pointer transition-all duration-300 ${isLiked ? 'text-red-500' : 'text-gray-300'}`} />
        {/* lower part */}
        <div className="mt-4">
          <div className="flex gap-x-2 items-center">
            {/* rating */}
            <div className={`flex space-x-0.5 text-sm lg:text-base text-[#FAC96B] cursor-pointer ${className}`}>
              {productRating}
            </div>
            <p className="text-[10px] lg:text-[12px] text-gray-500">(0)</p>
          </div>
          {/* title */}
          <h3 className="w-full py-2.5 text-sm lg:text-[18px] text-[#383838] leading-[150%] h-15">
            {productTitle}
          </h3>        
          <Flex className="justify-between items-center pt-2 lg:pt-5">
            {/* price */}
            <p className="font-medium text-base lg:text-[22px] text-[#0970CD]">
              {productPrice}
            </p>
            <FaBasketShopping className="text-[20px] lg:text-[24px] text-[#0198E9] cursor-pointer hover:text-[#0970CD] transition-colors" />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Product;