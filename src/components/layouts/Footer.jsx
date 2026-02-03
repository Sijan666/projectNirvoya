import Container from "../Container";
import Images from "../Images";
import fLogo from "/src/assets/footerLogo.png";
import facebook from "/src/assets/fFacebok.png";
import twitter from "/src/assets/fTwiter.png";
import linkedin from "/src/assets/fLinkdin.png";
import insta from "/src/assets/fInsta.png";
import Headphone from "/src/assets/fHeadPhone.png";
import { Link } from "react-router-dom";
import paymentApps from "/src/assets/fPaymentApps.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="py-12 border border-[#ececec]">
        <Container>
          <div className="flex justify-between">
            <div className="">
              <div className="w-[150px]">
                <Link to={"/"}>
                  <Images imgSrc={fLogo} />
                </Link>
              </div>
              <p className="text-[#333333]/80 text-[18px] w-[390px] leading-7 pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-x-4 pt-7.5">
                <Link>
                  <Images imgSrc={facebook} />
                </Link>
                <Link>
                  <Images imgSrc={twitter} />
                </Link>
                <Link>
                  <Images imgSrc={linkedin} />
                </Link>
                <Link>
                  <Images imgSrc={insta} />
                </Link>
              </div>
            </div>
            {/* QUICK LINKS Start  */}
            <div className="">
              <h4 className="text-[#333333] text-[20px] font-medium">
                QUICK LINKS
              </h4>
              <ul className="text-[#333333]/80 text-[18px] flex flex-col gap-y-7.5 mt-10">
                <li>
                  <Link> About us</Link>
                </li>
                <li>
                  <Link> Contact us</Link>
                </li>
                <li>
                  <Link> Products</Link>
                </li>
                <li>
                  <Link> Login</Link>
                </li>
                <li>
                  <Link> Sign Up</Link>
                </li>
              </ul>
            </div>
            {/* CUSTOMER AREA start  */}
            <div className="">
              <h4 className="text-[#333333] text-[20px] font-medium">
                CUSTOMER AREA
              </h4>
              <ul className="text-[#333333]/80 text-[18px] flex flex-col gap-y-7.5 mt-10">
                <li>
                  <Link> My Account</Link>
                </li>
                <li>
                  <Link> Orders</Link>
                </li>
                <li>
                  <Link> Terms</Link>
                </li>
                <li>
                  <Link> Privacy Policy</Link>
                </li>
                <li>
                  <Link> Shipping Information</Link>
                </li>
              </ul>
            </div>
            {/* CONTACT start  */}
            <div className="">
              <h4 className="text-[#333333] text-[20px] font-medium">
                CONTACT
              </h4>
              <p className="text-[#333333]/80 text-base w-[340px] leading-6 py-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex items-center gap-x-10">
                <Images imgSrc={Headphone} />

                <div className="">
                  <h5 className="text-[#333333] text-[18px]">
                    Have any question?
                  </h5>
                  <h3 className="text-[#0198E9] text-[28px] font-semibold">
                    099 456 789
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Bottom items  */}
      <Container>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-[#757575] text-base ">
            Projectnirvoya - © 2021 All Rights Reserved
          </p>
          <div className="flex items-center gap-x-4">
            <h4 className="text-[#0198E9]/80 text-[18px] font-medium ">
              Pay With
            </h4>
            <Images imgSrc={paymentApps} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
