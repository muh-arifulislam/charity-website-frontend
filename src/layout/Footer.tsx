import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white pt-20 pb-20">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold">Huminity</h2>
            <p className="mb-6">
              Care about people to transforming their lives and exudes a
              positives Impressiono believe. fundraising
            </p>
            <div className="flex gap-4">
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaFacebook size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaFacebook size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaFacebook size={19} />
              </button>
              <button className="w-[60px] h-[60px] bg-[#384C56] rounded-full flex justify-center items-center">
                <FaFacebook size={19} />
              </button>
            </div>
          </div>
          <div className="col-span-2 rounded-md bg-[#465A64] grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
            <div>
              <h4 className="text-2xl font-bold pb-6">Get Involved</h4>
              <ul>
                <li className="mb-2">
                  <NavLink to="/about">About Us</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>Get Involved</h4>
              <ul>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#465A64] "></div>
      <p className="text-center mt-5 pb-5">
        <small>
          Copyright © Walfare | Designed by VictorFlow Templates - Powered by
          Webflow
        </small>
      </p>
    </footer>
  );
};

export default Footer;
