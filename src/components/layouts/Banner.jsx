import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-3 pb-[50px]">
      <Container>
        <Flex className={"justify-between"}>
          {/* Left Side: Swiper */}
          <div className="left w-[65%]">
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
              className="h-full"
            >
              <SwiperSlide>
                <Link to={"/productDetails"}>
                  <Images
                    imgSrc={banner1}
                    className="w-full h-full object-cover rounded-[20px] cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <Images
                    imgSrc={banner4}
                    className="w-full h-full object-cover rounded-[20px] cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/"}>
                  <Images
                    imgSrc={banner5}
                    className="w-full h-full object-cover rounded-[20px] cursor-pointer"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Left Side: Swiper */}
          {/* Right Side Images */}
          <div className="right ">
            <Flex className="flex-col justify-between h-full gap-y-5">
              <div className="h-[48%]">
                <Images
                  imgSrc={banner2}
                  className="w-full h-full object-cover rounded-[20px] cursor-pointer"
                />
              </div>
              <div className="h-[48%]">
                <Images
                  imgSrc={banner3}
                  className="w-full h-full object-cover rounded-[20px] cursor-pointer"
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
