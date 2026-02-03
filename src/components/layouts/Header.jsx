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
    <>
      <Container>
        <Flex className="py-[33px] justify-between">
          <Images imgSrc={Logo} />
          <Flex>
            <div className="bg-[#F6F6F6] border-2 border-[#F1F1F1] border-r-0 rounded-bl-[5px] rounded-tl-[5px] w-[715px]">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="py-3 px-5 w-100 outline-none border-none"
              />
            </div>
            <div className="bg-[#0198E9] py-3 px-5 text-[28px] rounded-br-[5px] rounded-tr-[5px] text-white">
              <FiSearch />
            </div>
          </Flex>
          <Flex className={"gap-x-10"}>
            <Flex
              className={
                "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base "
              }
            >
              <FaRegUser className="text-xl" />
              <p>Login</p>
            </Flex>
            <Flex
              className={
                "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base "
              }
            >
              <AiOutlineHeart className="text-2xl" />
              <p>Wishlist</p>
            </Flex>
            <Flex
              className={
                "text-[#4D4D4D] hover:text-[#29292E] gap-x-1.5 text-base "
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
      </Container>
    </>
  );
};

export default Header;
