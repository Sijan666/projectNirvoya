import React from "react";
import Images from "../Images";
import Footertop1 from "/src/assets/ft1.png";
import Footertop2 from "/src/assets/ft2.png";
import Footertop3 from "/src/assets/ft3.png";
import Footertop4 from "/src/assets/ft4.png";
import Container from "../Container";

const FooterTop = () => {
  return (
    <>
      <div className="border-t-2 border-[#bbbbbb] mt-10">
       <Container>
         <div className="flex items-center justify-between py-10">
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
