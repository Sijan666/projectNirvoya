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
      <div className=" mt-10 w-[420px] lg:w-full">
        <Container className={'lg:w-[1405px] w-[395px]'}>
          <div className="flex lg:items-center lg:justify-between py-10 flex-col lg:flex-row gap-y-5 items-start">
            <Images imgSrc={Footertop1} className={''}/>
            <Images imgSrc={Footertop2} className={''}/>
            <Images imgSrc={Footertop3} className={''}/>
            <Images imgSrc={Footertop4} className={''}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterTop;
