import React from "react";
import Images from "../Images";
import Footertop1 from "/src/assets/ft1.webp";
import Footertop2 from "/src/assets/ft2.webp";
import Footertop3 from "/src/assets/ft3.webp";
import Footertop4 from "/src/assets/ft4.webp";
import Container from "../Container";

const FooterTop = () => {
  return (
    <>
      <div className="w-full lg:mt-10 overflow-hidden">
        <Container className={'w-full max-w-[1405px] mx-auto px-4 lg:px-0'}>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between py-8 lg:py-10 gap-y-8 sm:gap-x-10 lg:gap-x-0 lg:gap-y-0">
            <Images imgSrc={Footertop1} className="w-auto max-w-[200px] lg:max-w-none" />
            <Images imgSrc={Footertop2} className="w-auto max-w-[200px] lg:max-w-none" />
            <Images imgSrc={Footertop3} className="w-auto max-w-[200px] lg:max-w-none" />
            <Images imgSrc={Footertop4} className="w-auto max-w-[200px] lg:max-w-none" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterTop;