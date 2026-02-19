import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import banner4 from "../../assets/banner4.webp";
import banner5 from "../../assets/banner5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-3 pb-[50px] w-full sm:w-full md:w-3xl lg:w-full">
      <Container className="w-full px-4 sm:px-0 sm:w-[600px] md:w-[720px] lg:w-[1405px]">
        <Flex className="flex-col md:flex-col lg:flex-row lg:justify-between gap-y-5">
          {/* Left Side: Swiper */}
          <div className="left w-full sm:w-full md:w-full lg:w-[65%]">
            <Swiper
              slidesPerView={1}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              className="h-full">
              <SwiperSlide>
                <Link to={"/productDetails"}>
                  <Images
                    imgSrc={banner1}
                    className="w-full h-full object-cover rounded-4xl cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/productDetails"}>
                  <Images
                    imgSrc={banner4}
                    className="w-full h-full object-cover rounded-4xl cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/productDetails"}>
                  <Images
                    imgSrc={banner5}
                    className="w-full h-full object-cover rounded-4xl cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Left Side: Swiper */}
          {/* Right Side Images */}
          <div className="right w-full sm:w-full md:w-full lg:w-[32%]">
            <Flex className="flex-col sm:flex-row md:flex-row lg:flex-col justify-between h-full gap-y-5 sm:gap-x-5 lg:gap-x-0">
              <div className="h-auto lg:h-[48%] w-full sm:w-[48%] md:w-[48%] lg:w-full">
                <Images
                  imgSrc={banner2}
                  className="w-full h-full object-cover rounded-4xl cursor-pointer"
                />
              </div>
              <div className="h-auto lg:h-[48%] w-full sm:w-[48%] md:w-[48%] lg:w-full">
                <Images
                  imgSrc={banner3}
                  className="w-full h-full object-cover rounded-4xl cursor-pointer"
                />
              </div>
            </Flex>
          </div>
          {/* Right Side Images */}
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;