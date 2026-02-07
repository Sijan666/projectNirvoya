import React from "react";
import Container from "../Container";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Images from "../Images";
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'
import category5 from '../../assets/category5.png'
import category6 from '../../assets/category6.png'
import category7 from '../../assets/category7.png'
import category8 from '../../assets/category8.png'
import category9 from '../../assets/category9.png'
import category10 from '../../assets/category10.png'
import category11 from '../../assets/category11.png'
import category12 from '../../assets/category12.png'
import category13 from '../../assets/category13.png'
import category14 from '../../assets/category14.png'
import category15 from '../../assets/category15.png'


const Category = () => {
  return (
    <div className="py-12 font-Poppins">
      <Container>
        <h3 className="text-[#383838] text-[26px] font-medium pb-8">
          Category
        </h3>
        <div className="flex lg:grid lg:grid-cols-5 flex-wrap gap-[13px]">
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category1}/>
              <span className="text-[#394146] text-base">
                Health & Household
              </span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category2}/>
              <span className="text-[#394146] text-base">Kids Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category3}/>
              <span className="text-[#394146] text-base">Toys</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category4}/>
              <span className="text-[#394146] text-base">Groceries</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category5}/>
              <span className="text-[#394146] text-base">Home & Lifestyle</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category6}/>
              <span className="text-[#394146] text-base">Men Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category7}/>
              <span className="text-[#394146] text-base">Women’s Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category8}/>
              <span className="text-[#394146] text-base">
                Stationary & Books
              </span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category9}/>
              <span className="text-[#394146] text-base">Leather Goods</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category10}/>
              <span className="text-[#394146] text-base">Jewelleries</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category11}/>
              <span className="text-[#394146] text-base">Watches</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category12}/>
              <span className="text-[#394146] text-base">Men Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category13}/>
              <span className="text-[#394146] text-base">Tools & Hardware</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category14}/>
              <span className="text-[#394146] text-base">Pet Supplies</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4 w-[48%] lg:w-full">
            <div className="flex items-center gap-x-2.5">
              <Images imgSrc={category15}/>
              <span className="text-[#394146] text-base">Seasonal</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Category;
