// import React from "react";
// import Badge from "./Badge";
// import Images from "./Images";
// import Flex from "./Flex";

// const Product = ({
//   productImg,
//   badgeText,
//   productTitle,
//   productRating,
//   productPrice,
//   className,
// }) => {
//   return (
//     <div>
//       <div className="bg-white px-[9px] pt-[9px] pb-[15px] border-2 border-[#E9E9E9] rounded-[10px] inline-block relative">
//         <Images imgSrc={productImg} />
//         <Badge
//           className={"absolute top-[9px] left-[9px]"}
//           badgeText={badgeText}
//         />
//         <div className="mt-4">
//           <div
//             className={`flex space-x-0.5 text-base text-[#FAC96B] ${className}`}
//           >
//             {productRating}
//           </div>
//           <p className="w-[294px] py-[10px] font-Poppins font-normal text-[18px] text-[#383838] leading-[150%]">
//             {productTitle}
//           </p>
//           <Flex className={"space-x-[195px]"}>
//             <p className="font-Poppins font-medium text-[22px] text-[#0970CD]">
//               {productPrice}
//             </p>
//             <FaBasketShopping className="text-[24px] text-[#0198E9]" />
//           </Flex>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React from 'react';
import Badge from "./Badge";
import Images from "./Images";
import Flex from "./Flex"; 
import { FaBasketShopping } from "react-icons/fa6"; // or "react-icons/fa"

const Product = ({
  productImg,
  badgeText,
  productTitle,
  productRating,
  productPrice,
  className, 
}) => {
  return (
    <div> 
      <div className="bg-white px-[9px] pt-[9px] pb-[15px] border-2 border-[#E9E9E9] rounded-[10px] inline-block relative">
        <Images className={'cursor-pointer'} imgSrc={productImg} />
        
        <Badge
           className={"absolute top-[9px] left-[9px]"}
          badgeText={badgeText}
        />
        
        <div className="mt-4">
          <div
            className={`flex space-x-0.5 text-base text-[#FAC96B] cursor-pointer ${className}`}
          >
            {productRating}
          </div>
          <h3 className="w-[294px] py-[10px] font-Poppins font-normal text-[18px] text-[#383838] leading-[150%]">
            {productTitle}
          </h3>        
          <Flex className="space-x-[195px]">
            <p className="font-Poppins font-medium text-[22px] text-[#0970CD]">
              {productPrice}
            </p>
            <FaBasketShopping className="text-[24px] text-[#0198E9] cursor-pointer" />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Product;