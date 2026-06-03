import Container from "../Container";
import Images from "../Images";
import fLogo from "/src/assets/footerLogo.webp";
import facebook from "/src/assets/fFacebok.webp";
import twitter from "/src/assets/fTwiter.webp";
import linkedin from "/src/assets/fLinkdin.webp";
import insta from "/src/assets/fInsta.webp";
import Headphone from "/src/assets/fHeadPhone.webp";
import { Link } from "react-router-dom";
import paymentApps from "/src/assets/fPaymentApps.webp";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="py-10 md:py-12 border-y border-[#ececec]">
        <Container className={'w-full max-w-[1405px] mx-auto px-4 lg:px-0'}>
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-4 lg:justify-between">
            <div className="pb-4 lg:pb-0">
              <div className="w-[120px] lg:w-[150px]">
                <Link to={"/"}>
                  <Images imgSrc={fLogo} className="w-full h-auto" />
                </Link>
              </div>
              <p className="text-[#333333]/80 text-base md:text-[18px] w-full max-w-[390px] leading-7 pt-6 lg:pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-x-4 pt-6 lg:pt-7.5">
                <Link>
                  <Images imgSrc={facebook} className="w-8 md:w-auto" />
                </Link>
                <Link>
                  <Images imgSrc={twitter} className="w-8 md:w-auto" />
                </Link>
                <Link>
                  <Images imgSrc={linkedin} className="w-8 md:w-auto" />
                </Link>
                <Link>
                  <Images imgSrc={insta} className="w-8 md:w-auto" />
                </Link>
              </div>
            </div>
            {/* QUICK LINKS Start  */}
            <div className="pb-4 lg:pb-0">
              <h4 className="text-[#333333] text-[18px] md:text-[20px] font-medium">
                QUICK LINKS
              </h4>
              <ul className="text-[#333333]/80 text-base md:text-[18px] flex flex-col gap-y-4 md:gap-y-7.5 mt-6 md:mt-10">
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> About us</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Contact us</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Products</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Login</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Sign Up</Link>
                </li>
              </ul>
            </div>
            {/* CUSTOMER AREA start  */}
            <div className="pb-4 lg:pb-0">
              <h4 className="text-[#333333] text-[18px] md:text-[20px] font-medium">
                CUSTOMER AREA
              </h4>
              <ul className="text-[#333333]/80 text-base md:text-[18px] flex flex-col gap-y-4 md:gap-y-7.5 mt-6 md:mt-10">
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> My Account</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Orders</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Terms</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Privacy Policy</Link>
                </li>
                <li>
                  <Link className="hover:text-[#0198E9] transition-colors"> Shipping Information</Link>
                </li>
              </ul>
            </div>
            {/* CONTACT start  */}
            <div className="">
              <h4 className="text-[#333333] text-[18px] md:text-[20px] font-medium">
                CONTACT
              </h4>
              <p className="text-[#333333]/80 text-sm md:text-base w-full max-w-[340px] leading-6 py-6 lg:py-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex items-center gap-x-6 lg:gap-x-10">
                <Images imgSrc={Headphone} className="w-10 lg:w-auto" />
                <div className="">
                  <h5 className="text-[#333333] text-base lg:text-[18px]">
                    Have any question?
                  </h5>
                  <h3 className="text-[#0198E9] text-[22px] md:text-[28px] font-semibold">
                    099 456 789
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Bottom items  */}
      <div className="w-full pb-8 lg:pb-0">
        <Container className={'w-full max-w-[1405px] mx-auto px-4 lg:px-0'}>
          <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-6 lg:gap-y-4 mb-4 lg:mb-10 text-center lg:text-left">
            <p className="text-[#757575] text-sm md:text-base">
              Projectnirvoya - © 2021 All Rights Reserved
            </p>
            <div className="flex items-center justify-center gap-x-4 flex-col sm:flex-row gap-y-4">
              <h4 className="text-[#0198E9]/80 text-base lg:text-[18px] font-medium">
                Pay With
              </h4>
              <Images imgSrc={paymentApps} className="w-[250px] lg:w-auto object-contain" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;