import React from "react";
import Container from "../Container";
import Images from "../Images";
import { category } from "../data/category";
import { FaAngleRight } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="py-12 w-full">
      <Container className={'lg:max-w-[1405px] px-4 mx-auto'}>
        <h3 className="text-[#383838] text-[26px] font-medium pb-8">
          Category
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[13px]">
          {category.map((item) => (
            <div key={item.id} className="flex items-center justify-between shadow-newMade rounded-md p-4 bg-white cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Images imgSrc={item.categoryImage} className={'object-contain'}/>
                </div>
                <span className="text-sm font-normal text-[#383838]">
                  {item.categoryTitle}
                </span>
              </div>
              <FaAngleRight className="text-[#999999] text-sm shrink-0" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;