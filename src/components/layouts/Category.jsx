import React from "react";
import Container from "../Container";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-12 font-Poppins">
      <Container>
        <h3 className="text-[#383838] text-[26px] font-medium pb-8">
          Category
        </h3>
        <div className="grid grid-cols-5 gap-[13px]">
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category1.png" alt="/category1.png" />
              <span className="text-[#394146] text-base">
                Health & Household
              </span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category2.png" alt="/category2.png" />
              <span className="text-[#394146] text-base">Kids Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category3.png" alt="/category3.png" />
              <span className="text-[#394146] text-base">Toys</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category4.png" alt="/category4.png" />
              <span className="text-[#394146] text-base">Groceries</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category5.png" alt="/category5.png" />
              <span className="text-[#394146] text-base">Home & Lifestyle</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category6.png" alt="/category6.png" />
              <span className="text-[#394146] text-base">Men Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category7.png" alt="/category7.png" />
              <span className="text-[#394146] text-base">Women’s Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category8.png" alt="/category8.png" />
              <span className="text-[#394146] text-base">
                Stationary & Books
              </span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category9.png" alt="/category9.png" />
              <span className="text-[#394146] text-base">Leather Goods</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category10.png" alt="category10.png" />
              <span className="text-[#394146] text-base">Jewelleries</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category11.png" alt="category11.png" />
              <span className="text-[#394146] text-base">Watches</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category12.png" alt="category12.png" />
              <span className="text-[#394146] text-base">Men Fashion</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category13.png" alt="category13.png" />
              <span className="text-[#394146] text-base">Tools & Hardware</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category14.png" alt="category14.png" />
              <span className="text-[#394146] text-base">Pet Supplies</span>
            </div>
            <FaAngleRight className="text-[#999999]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-between shadow-[0_0_12px_rgba(0,0,0,0.08)] rounded-md p-4"
          >
            <div className="flex items-center gap-x-2.5">
              <img src="/src/assets/category15.png" alt="category15.png" />
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
