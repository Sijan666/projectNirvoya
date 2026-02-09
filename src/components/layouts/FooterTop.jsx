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
            <Images imgSrc={Footertop1} />
            <Images imgSrc={Footertop2} />
            <Images imgSrc={Footertop3} />
            <Images imgSrc={Footertop4} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterTop;
