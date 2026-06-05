import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaAngleRight } from "react-icons/fa6";
import Container from "../Container";
import Images from "../Images";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import productDetailsBig1 from "/src/assets/productDetailsBig1.webp";
import productDetailsSmall1 from "/src/assets/productDetailsSmall1.webp";
import productDetailsSmall2 from "/src/assets/productDetailsSmall2.webp";
import productDetailsSmall3 from "/src/assets/productDetailsSmall3.webp";
import productDetailsSmall4 from "/src/assets/productDetailsSmall4.webp";
import linkedin from "/src/assets/linkedin.webp";
import twitter from "/src/assets/twitter.webp";
import facebook from "/src/assets/facebook.webp";
import whatsapp from "/src/assets/whatsapp.webp";
import link from "/src/assets/link.webp";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Flex from "../Flex";
import Review from "../../assets/Review.webp";
import ratings from "../../assets/ratings.webp";
import Button from "../Button";
import r1 from "../../assets/r1.webp";
import r2 from "../../assets/r2.webp";
import r3 from "../../assets/r3.webp";
import r4 from "../../assets/r4.webp";
import rate from "../../assets/rate.webp";

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Product Details - Project Nirvoya</title>
        <meta
          name="description"
          content="Buy Super Skinny Rib Trouser & Joggers for Men at Project Nirvoya. High-quality products with the best deals."
        />
      </Helmet>

      <div className="pt-10 lg:pt-14 pb-10 lg:pb-12.5 bg-[#FAFAFA] w-full overflow-hidden">
        <Container className={"w-full max-w-[1405px] px-4 lg:px-0 mx-auto"}>
          <h6 className="flex flex-wrap items-center gap-x-2 lg:text-base text-sm pb-6">
            <span className="text-[#02344F] flex items-center gap-x-2 whitespace-nowrap">
              Home <FaAngleRight />
            </span>{" "}
            <span className="text-[#02344F] flex items-center gap-x-2 whitespace-nowrap">
              Men’s fashion <FaAngleRight />
            </span>{" "}
            <span className="text-[#757575]">
              Men's Stand Collar Leather Jacket
            </span>
          </h6>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-[115px] lg:justify-between">
            <div className="w-full lg:max-w-[680px]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <Images imgSrc={productDetailsBig1} className="w-full h-auto object-cover" />
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-6 lg:pt-[45px]">
                    <span className="text-[#333333] text-xl">Share</span>
                    <Link to={"https://www.linkedin.com"} target="_blank">
                      <Images imgSrc={linkedin} className="w-8 md:w-auto" />
                    </Link>
                    <Link to={"https://x.com"} target="_blank">
                      <Images imgSrc={twitter} className="w-8 md:w-auto" />
                    </Link>
                    <Link to={"https://www.facebook.com"} target="_blank">
                      <Images imgSrc={facebook} className="w-8 md:w-auto" />
                    </Link>
                    <Link to={"https://www.whatsapp.com"} target="_blank">
                      <Images imgSrc={whatsapp} className="w-8 md:w-auto" />
                    </Link>
                    <Link to={"/"}>
                      <Images imgSrc={link} className="w-8 md:w-auto" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col flex-wrap justify-center items-center gap-2.5">
                  <button className="cursor-pointer hidden md:block">
                    <FaChevronUp className="text-[#949494] text-base mb-3" />
                  </button>
                  <button className="cursor-pointer w-[60px] md:w-auto">
                    <Images imgSrc={productDetailsSmall1} className="w-full h-auto" />
                  </button>
                  <button className="cursor-pointer w-[60px] md:w-auto">
                    <Images imgSrc={productDetailsSmall2} className="w-full h-auto" />
                  </button>
                  <button className="cursor-pointer w-[60px] md:w-auto">
                    <Images imgSrc={productDetailsSmall3} className="w-full h-auto" />
                  </button>
                  <button className="cursor-pointer w-[60px] md:w-auto">
                    <Images imgSrc={productDetailsSmall4} className="w-full h-auto" />
                  </button>
                  <button className="cursor-pointer hidden md:block">
                    <FaChevronDown className="text-[#0198E9] text-base mt-3" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:max-w-[610px] pt-5 lg:pt-0">
              <h3 className="text-[#333333] lg:text-[26px] text-xl font-medium pb-4.5 leading-tight">
                Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
              </h3>
              <div className="flex flex-wrap gap-y-4 items-center pb-8">
                <div className="flex flex-wrap items-center gap-y-2">
                  <h4 className="text-[#333] text-lg font-medium pr-[5px]">
                    4.0
                  </h4>
                  <div className="flex items-center gap-x-[3px] -mt-1">
                    <IoStarSharp className="text-xl md:text-2xl text-[#FFB340]" />
                    <IoStarSharp className="text-xl md:text-2xl text-[#FFB340]" />
                    <IoStarSharp className="text-xl md:text-2xl text-[#FFB340]" />
                    <IoStarSharp className="text-xl md:text-2xl text-[#FFB340]" />
                    <IoStarSharp className="text-xl md:text-2xl text-[#A7A7A7]" />
                  </div>
                  <span className="text-[#BABABA] text-lg pl-1">(223)</span>
                  <div className="hidden sm:block h-7 w-0.5 rounded-[22px] bg-[#F2F2F2] mx-4" />
                  <div className="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
                    <FaCheck className="text-[#0AC96D] text-xl" />
                    <div className="text-[#333333] text-lg pl-2.5">
                      <span className="font-semibold">4,320</span> Sold
                    </div>
                    <div className="hidden sm:block h-7 w-0.5 rounded-[22px] bg-[#F2F2F2] mx-4" />
                  </div>
                </div>
                <Link to={""} className="flex items-center gap-x-3 w-full sm:w-auto pt-2 sm:pt-0">
                  <FaHeart className="text-[#C7C7C7] text-[22px]" />
                  <span className="text-[#0198E9] text-base md:text-lg font-Lato font-bold pb-0.5">
                    Add to wishlist
                  </span>
                </Link>
              </div>
              <div className="flex flex-wrap items-center pb-5 gap-y-2">
                <h5 className="text-[#0198E9] text-3xl md:text-4xl font-semibold">$976.33</h5>
                <span className="text-[#8D8D8D] text-lg md:text-xl line-through ml-4 md:ml-6 mr-4">
                  $1,020.99
                </span>
                <span className="text-white text-sm font-semibold bg-linear-to-tr from-[#FF7A00] from-0% via-[#FF7A00] via-30% to-[#FFB800] to-100% px-2.5 py-1">
                  20%
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-x-5">
                <div className="text-base">
                  <span className="text-[#3D3D3F]">SKU: </span>
                  <span className="text-[#757575]">12314124124</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <IoIosCheckmarkCircle className="text-[#3AB137] text-base" />
                  <span className="text-[#757575] text-base">In Stock</span>
                </div>
              </div>
              <div className="h-px w-full lg:max-w-[595px] bg-[#EAEAEA] my-4 lg:my-6" />
              <p className="text-[#333333] text-base md:text-lg leading-relaxed md:leading-7.5 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ul className="list-disc ml-6 md:ml-8 text-[#333333] text-base md:text-lg leading-loose md:leading-[200%]">
                <li>Direct Full Array</li>
                <li>Quantum Dot Technology</li>
                <li>Ambient Mode</li>
                <li>One Remote Control</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 py-6 md:py-8">
                <span className="text-[#333333] text-lg md:text-xl">Size</span>
                <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer hover:border-[#333]">
                  S
                </h5>
                <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer hover:border-[#333]">
                  M
                </h5>
                <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer hover:border-[#333]">
                  L
                </h5>
                <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer hover:border-[#333]">
                  XL
                </h5>
                <h5 className="text-[#6E6E6F] text-sm bg-white border border-[#EAEAEA] py-1 px-3 cursor-pointer hover:border-[#333]">
                  XXL
                </h5>
              </div>
              <div className="flex flex-col lg:flex-row flex-wrap lg:items-center gap-6 lg:gap-x-8">
                <div className="flex items-center gap-x-4">
                  <h4 className="text-[#3D3D3F] text-sm">Quantity: </h4>
                  <div className="border-2 border-[#EAEAEA] rounded-lg flex items-center">
                    <button
                      onClick={handleDecrement}
                      className="text-[#ACACAC] text-base bg-[#EFEFEF] font-semibold cursor-pointer px-3 md:px-2.5 py-[5px] hover:text-[#333] transition-colors"
                    >
                      -
                    </button>
                    <span className="text-[#3D3D3F] px-4 md:px-2.5 py-1.5 border-l-2 border-r-2 border-[#EAEAEA] leading-none">
                      {count}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="text-[#ACACAC] text-base bg-[#EFEFEF] font-semibold cursor-pointer px-3 md:px-2.5 py-[5px] hover:text-[#333] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="btnn flex flex-col sm:flex-row gap-4 sm:gap-x-5 w-full lg:w-auto">
                  <button className="w-full sm:w-auto text-[#0198E9] capitalize text-lg md:text-xl font-Lato font-medium px-8 md:px-10.5 py-3 border-2 border-[#0198E9] rounded-lg cursor-pointer transition-all duration-300 bg-[#EBF4F9] hover:text-white hover:bg-[#0198E9]">
                    Add cart
                  </button>
                  <button className="w-full sm:w-auto text-[#0198E9] capitalize text-lg md:text-xl font-Lato font-medium px-8 md:px-10.5 py-3 border-2 border-[#0198E9] rounded-lg cursor-pointer transition-all duration-300 bg-[#EBF4F9] hover:text-white hover:bg-[#0198E9]">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- */}
          <div className="pt-12 lg:pt-20">
            <h4 className="text-[#0198E9] font-medium text-lg md:text-[24px] py-4 md:py-5 bg-[#FCFCFC] px-4 md:px-12 border border-[#F1F1F1] leading-snug">
              Product details of LED Monitor With High Quality In The World
            </h4>
            <div className="py-6 lg:pt-[25px] lg:pb-10 px-4 md:px-12 bg-white">
              <h4 className="text-xl md:text-[24px] font-bold text-[#333333] pb-4 md:pb-[19px]">
                See the best picture no matter where you sit
              </h4>
              <Flex className={"flex-col md:flex-row justify-between pb-6 md:pb-[35px] border-b border-[#F1F1F1] gap-y-6 md:gap-y-0"}>
                <ul className="text-[#333333] text-base md:text-[18px] w-full lg:max-w-[618px]">
                  <li className="pb-3 md:pb-5">Size : M, L, XL</li>
                  <li className="pb-3 md:pb-5">Product Type : Jogger</li>
                  <li className="pb-3 md:pb-5">Main Material : Cotton</li>
                  <li className="pb-3 md:pb-5">Gender : Male</li>
                  <li className="pb-3 md:pb-5">Waist : Mid-rise</li>
                  <li className="pb-3 md:pb-5">Zip : Fly</li>
                </ul>
                <ul className="text-[#333333] text-base md:text-[18px] w-full lg:flex-1">
                  <li className="pb-3 md:pb-5">Zipper : Yes</li>
                  <li className="pb-3 md:pb-5">
                    Pocket : Two front and One Back Pockets.
                  </li>
                  <li className="pb-3 md:pb-5">100% Authentic Product</li>
                  <li className="pb-3 md:pb-5">
                    Product color may slightly vary due to our photography and
                    Sometimes it’s vary on our devices
                  </li>
                </ul>
              </Flex>
              <div className="pt-6 lg:pt-[25px]">
                <h4 className="text-xl md:text-[24px] text-[#333333] font-bold">
                  Powerful intelligence for perfection
                </h4>
                <p className="pt-4 md:pt-[18px] text-sm md:text-base leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <p className="pt-4 lg:pt-[58px] text-sm md:text-base leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                  rerum facilis est et expedita.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-7.5 py-6 lg:pt-7.5 px-4 lg:px-12 bg-white">
            {/* ratings part */}
            <Flex className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 pb-8 md:pb-[35px] border-b border-[#F1F1F1] md:border-none">
              <div className="w-full md:w-[25%] lg:w-[17%] flex flex-col items-center md:items-start">
                <h4 className="text-[#3D3D3F] font-medium text-lg md:text-[20px] pb-2.5">
                  Customer reviews
                </h4>
                <Images imgSrc={Review} className="w-24 md:w-auto" />
              </div>
              <div className="w-full md:w-[40%] lg:w-[29%] flex justify-center md:justify-start">
                <Images imgSrc={ratings} className="w-full max-w-[250px] md:max-w-none" />
              </div>
              <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-start">
                <Button
                  btnText="Write a Review"
                  className="px-8 md:px-12 py-3 md:py-2.5 text-white w-full sm:w-auto"
                />
              </div>
            </Flex>
            {/* review part */}
            <h4 className="text-[#333333] text-xl md:text-[24px] font-medium border-b pb-4 lg:pb-5 border-[#F1F1F1] mt-6 md:mt-0">
              Reviews (4)
            </h4>
            <div className="pt-5">
              <div className="flex flex-col gap-y-4 lg:gap-y-7.5">
                <Images imgSrc={r1} className="w-full h-auto object-contain" />
                <Images imgSrc={r2} className="w-full h-auto object-contain" />
                <Images imgSrc={r3} className="w-full h-auto object-contain" />
                <Images imgSrc={r4} className="w-full h-auto object-contain" />
              </div>
            </div>
            {/* input part */}
            <div className="input pt-10 lg:pt-[70px]">
              <h4 className="text-xl md:text-[24px] font-semibold text-[#383838]">
                Add Your Review
              </h4>
              <p className="text-[#A7A7A7] text-sm lg:text-[18px] lg:pt-4 py-3 lg:pb-7 w-full max-w-xs lg:max-w-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="name pb-6 lg:pb-8">
                <p className="pb-3 md:pb-4 text-base md:text-[18px] text-[#383838]">Name *</p>
                <input
                  type="text"
                  name=""
                  className="w-full lg:max-w-[745px] border border-[#A7A7A7]/20 bg-[#FAFAFA] rounded-[5px] outline-none py-3 md:py-5 px-4 md:px-5 focus:border-[#0198E9] transition-colors"
                />
              </div>
              <div className="email pb-6 lg:pb-8">
                <p className="pb-3 md:pb-4 text-base md:text-[18px] text-[#383838]">Email *</p>
                <input
                  type="email"
                  name=""
                  className="w-full lg:max-w-[745px] border border-[#A7A7A7]/20 bg-[#FAFAFA] rounded-[5px] outline-none py-3 md:py-5 px-4 md:px-5 focus:border-[#0198E9] transition-colors"
                />
              </div>
              <div className="msg pb-6 lg:pb-10">
                <p className="pb-3 md:pb-4 text-base md:text-[18px] text-[#383838]">Review *</p>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  cols={5}
                  className="w-full lg:max-w-[745px] border border-[#A7A7A7]/20 bg-[#FAFAFA] rounded-[5px] outline-none py-3 md:py-5 px-4 md:px-5 focus:border-[#0198E9] transition-colors resize-y"
                ></textarea>
              </div>
              <Images imgSrc={rate} className={"w-[150px] lg:w-[200px] "} />
              <div className="btnn pt-8 md:pt-10">
                <Button
                  btnText={"Submit"}
                  className={"text-[#FAFAFA] text-base md:text-[18px] px-10 md:px-[57.5px] py-3 md:py-[16.5px] w-full sm:w-auto"}
                />
              </div>
            </div>
            {/* input part */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;