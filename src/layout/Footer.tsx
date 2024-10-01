import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import footerLogo from "../assets/icons/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white pt-20 pb-20">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <img className="w-[21px] h-[44px]" src={footerLogo} alt="" />
              <h2 className="text-2xl font-extrabold">Huminity</h2>
            </div>
            <p className="mb-6">
              Care about people to transforming their lives and exudes a
              positives Impressiono believe. fundraising
            </p>
            <div className="flex gap-4">
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaInstagram size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaFacebook size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaTwitter size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaPinterest size={19} />
              </button>
            </div>
          </div>
          <div className="col-span-2 rounded-md bg-[#465A64] grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
            <div>
              <h4 className="text-2xl font-bold pb-6">Get Involved</h4>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Volunteer
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Causes
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Team
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Events
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold pb-6">Utility</h4>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className={"hover:text-primary transition ease-linear"}
                  >
                    Terms and Condition
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-bold p-0 m-0">Contact</h4>
              <div className="flex-1 flex flex-col justify-between mb-2">
                <div>
                  <h5>
                    660 Broklyn Street, 88 <br />
                    New York
                  </h5>
                </div>
                <div>
                  <h5>help Need@walfare.com</h5>
                  <h5>222 888 0000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#465A64] "></div>
      <p className="text-center mt-5 pb-5 text-white">
        <small>
          Copyright © Walfare | Designed by VictorFlow Templates - Powered by
          Webflow
        </small>
      </p>
    </footer>
  );
};

export default Footer;
