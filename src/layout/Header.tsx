import { IoIosCall } from "react-icons/io";

import Navbar from "./Navbar";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full bg-secondary">
        <div className=" max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <div className="hidden items-center  sm:flex gap-[45px]  text-lg">
            <div className="flex items-center gap-2">
              <span>
                <IoIosCall />
              </span>
              <p>+01 569 896 654</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaEnvelope />
              </span>
              <p>info@charity.com</p>
            </div>
          </div>
          <div>
            <div className="bg-[#4BC9C4] px-[38px] py-[14px] hidden sm:block">
              <ul className="flex items-center gap-[17px]">
                <li>
                  <NavLink to="/">
                    <span>
                      <FaInstagram size={18} />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span>
                      <FaFacebook size={18} />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span>
                      <FaTwitter size={18} />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span>
                      <FaPinterest size={18} />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
