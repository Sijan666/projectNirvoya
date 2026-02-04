import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <header className="relative">
      <div className="border-b-2 border-[#EFEEEE]">
        <Container>
          <Flex className="py-[33px] justify-between">
            <Images imgSrc={Logo} className={"cursor-pointer"} />
            <Flex>
              <div className="bg-[#F6F6F6] border-2 border-[#F1F1F1] border-r-0 rounded-bl-[5px] rounded-tl-[5px] w-[715px]">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  className="py-3 px-5 w-100 outline-none border-none"
                />
              </div>
              <div className="bg-[#0198E9] cursor-pointer py-3 px-5 text-[28px] rounded-br-[5px] rounded-tr-[5px] text-white">
                <FiSearch />
              </div>
            </Flex>
            <Flex className={"gap-x-10"}>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <FaRegUser className="text-xl" />
                <p>Login</p>
              </Flex>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <AiOutlineHeart className="text-2xl" />
                <p>Wishlist</p>
              </Flex>
              <Flex
                className={
                  "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base cursor-pointer"
                }
              >
                <FaShoppingBasket className="text-2xl" />
                <p>My cart</p>
                <div className="h-5 w-5 rounded-full bg-[#FF5D5D] relative">
                  <p className="text-white text-[12px] font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    1
                  </p>
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className={
              "gap-x-14 text-[#333333]/85 text-base font-medium justify-center uppercase mb-2.5"
            }
          >
            <p
              className={`cursor-pointer duration-300 ${
                show
                  ? "text-[#0198E9] border-b-2 border-[#0198E9]"
                  : "text-[#333333]/85"
              }`}
              onClick={() => setShow(!show)}
            >
              Women's Fashion
            </p>
            {/* Outsite click korle cole Jabe ei jonno eta  */}
            {show && (
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShow(false)}
              ></div>
            )}
            <p className="cursor-pointer">Men's Fashion</p>
            <p className="cursor-pointer">Kid's Fashion</p>
            <p className="cursor-pointer">Home & Lifestyle</p>
            <p className="cursor-pointer">Arts & Crafts</p>
            <p className="cursor-pointer">Computer & Electronics</p>
            <p className="cursor-pointer">Food & Grocery</p>
          </Flex>
        </Container>
      </div>
      {/* Women's Fashion Items  */}
      {show && (
        <Container
          className={"py-7.5 px-18 bg-gray-100 absolute left-0 right-0 z-20"}
        >
          <Flex className={"justify-between items-start"}>
            {/* Flex One start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Saree
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>
                  <Link>Cotton</Link>
                </li>
                <li>
                  <Link>Silk</Link>
                </li>
                <li>
                  <Link>Katan</Link>
                </li>
                <li>
                  <Link>Muslin</Link>
                </li>
                <li>
                  <Link>Jamdani</Link>
                </li>
                <li>
                  <Link>Georgette</Link>
                </li>
                <li>
                  <Link>Nakshi Kantha</Link>
                </li>
                <li>
                  <Link>Linen</Link>
                </li>
                <li>
                  <Link>Khadi</Link>
                </li>
                <li>
                  <Link>Tangail Taant</Link>
                </li>
                <li>
                  <Link>Monipuri</Link>
                </li>
                <li>
                  <Link>Dhakai Benaroshi</Link>
                </li>
              </ul>
            </div>
            {/* Flex Two start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Clothes
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>
                  <Link>T-shirt</Link>
                </li>
                <li>
                  <Link>Shorts</Link>
                </li>
                <li>
                  <Link>Shirt</Link>
                </li>
                <li>
                  <Link>Tracksuit</Link>
                </li>
                <li>
                  <Link>Jeans</Link>
                </li>
                <li>
                  <Link>Georgette</Link>
                </li>
                <li>
                  <Link>Waistcoat</Link>
                </li>
                <li>
                  <Link>Sweater</Link>
                </li>
                <li>
                  <Link>coats</Link>
                </li>
                <li>
                  <Link>Suit</Link>
                </li>
                <li>
                  <Link>Sweatshirt</Link>
                </li>
                <li>
                  <Link>Uniform</Link>
                </li>
              </ul>
            </div>
            {/* Flex Three start  */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Cosmetic
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>
                  <Link>Perfume</Link>
                </li>
                <li>
                  <Link>Eye make-up</Link>
                </li>
                <li>
                  <Link>Skin care</Link>
                </li>
                <li>
                  <Link>Hair care</Link>
                </li>
                <li>
                  <Link>Make-up</Link>
                </li>
                <li>
                  <Link>Oral Care</Link>
                </li>
                <li>
                  <Link>Body Care</Link>
                </li>
                <li>
                  <Link>Sanitary pad</Link>
                </li>
                <li>
                  <Link>Shower Gels & Creams</Link>
                </li>
                <li>
                  <Link>Hair Removal Products</Link>
                </li>
                <li>
                  <Link>Lipstick</Link>
                </li>
                <li>
                  <Link>Suntan cream</Link>
                </li>
              </ul>
            </div>
            {/* Flex Four start */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Sports & Outdoor
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>
                  <Link>Sweatshirt</Link>
                </li>
                <li>
                  <Link>T-shirt</Link>
                </li>
                <li>
                  <Link>Sports Bra</Link>
                </li>
                <li>
                  <Link>Leggings</Link>
                </li>
                <li>
                  <Link>Tracksuit</Link>
                </li>
                <li>
                  <Link>Running Shoes</Link>
                </li>
                <li>
                  <Link>Sports Bag</Link>
                </li>
                <li>
                  <Link>Sports Equipment</Link>
                </li>
                <li>
                  <Link>Outdoor Shoes</Link>
                </li>
                <li>
                  <Link>Snow Boot</Link>
                </li>
                <li>
                  <Link>Outdoor Equipment</Link>
                </li>
                <li>
                  <Link>Sports Accessories</Link>
                </li>
              </ul>
            </div>
            {/* Flex Five start */}
            <div className="">
              <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                Personal Care
              </h4>
              <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                <li>
                  <Link>Perfume</Link>
                </li>
                <li>
                  <Link>Sexual Health</Link>
                </li>
                <li>
                  <Link>After Shave Products</Link>
                </li>
                <li>
                  <Link>Razor blade</Link>
                </li>
              </ul>
              <div className="mt-10.75">
                <h4 className="text-[#3D3D3F] text-base font-medium font-Poppins pb-3">
                  Shoes
                </h4>
                <ul className="flex flex-col gap-y-3.75 text-[#757575] text-sm font-Poppins">
                  <li>
                    <Link>Heeled shoes</Link>
                  </li>
                  <li>
                    <Link>sneakers</Link>
                  </li>
                  <li>
                    <Link>Casual Shoes</Link>
                  </li>
                  <li>
                    <Link>Babet</Link>
                  </li>
                  <li>
                    <Link>Sandals</Link>
                  </li>
                  <li>
                    <Link>Slipper</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Flex>
        </Container>
      )}
    </header>
  );
};

export default Header;
