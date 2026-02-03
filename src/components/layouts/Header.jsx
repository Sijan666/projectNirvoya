import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  return (
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
          <p className="cursor-pointer">Women's Fashion</p>
          <p className="cursor-pointer">Men's Fashion</p>
          <p className="cursor-pointer">Kid's Fashion</p>
          <p className="cursor-pointer">Home & Lifestyle</p>
          <p className="cursor-pointer">Arts & Crafts</p>
          <p className="cursor-pointer">Computer & Electronics</p>
          <p className="cursor-pointer">Food & Grocery</p>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
