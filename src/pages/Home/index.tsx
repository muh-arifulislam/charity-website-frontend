import image from "../../assets/images/childrens-sitting.png";

import imageHero from "../../assets/images/childrens-heading.png";
import Button from "../../components/Button/Button";

import cardImage from "../../assets/images/girls.png";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <section>
        <div
          className="bg-accent w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageHero})`,
          }}
        >
          <div className="max-w-screen-xl h-full mx-auto px-4 py-[80px] flex items-center">
            <div className="w-full sm:w-[60%]">
              <h4 className="sue-ellen-francisco-regular text-4xl md:text-[50px] leading-[108%]">
                Need Help...
              </h4>
              <p className="shippori-mincho-extrabold text-6xl md:text-[90px] leading-[108%] text-white mb-[30px]">
                Being Life Saver <br className="" />
                For Someone
              </p>
              <div className="flex gap-4">
                <Button>Donate</Button>
                <Button variant="white">Discover</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 mt-[-50px]">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="bg-secondary px-10 py-[61px]">
            <h5 className="shippori-mincho-extrabold text-[35px] leading-[108%] text-accent-400 mb-5">
              Education
            </h5>
            <p className="text-xl leading-[130%] mb-5">
              Below Poverty Line is enchmark used by the government of India
              economic disadvantage.
            </p>
            <Button variant="white">Discover</Button>
          </div>
          <div className="bg-accent px-10 py-[61px] text-white">
            <h5 className="shippori-mincho-extrabold text-[35px] leading-[108%] mb-5">
              Education
            </h5>
            <p className="text-xl leading-[130%] mb-5">
              Below Poverty Line is enchmark used by the government of India
              economic disadvantage.
            </p>
            <NavLink to={"/"} className={"underline"}>
              JOIN ORGANIZATION
            </NavLink>
          </div>
          <div
            className="bg-secondary z-0 px-10 py-[61px] min-h-[350px] flex items-center justify-center bg-center bg-cover bg-no-repeat relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-overlay-primary before:-z-10 before:opacity-60"
            style={{ backgroundImage: `url(${cardImage})` }}
          >
            <div className="z-50">
              <button className="w-[86px] h-[86px] rounded-full flex items-center justify-center bg-white">
                <FaPlay size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 py-[135px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
          <div>
            <h5 className="sue-ellen-francisco-regular text-[35px] leading-[108%]mb-2 text-primary-400">
              About Us
            </h5>
            <h6 className="shippori-mincho-extrabold text-[40px] leading-[108%] mb-2 text-accent-400">
              Help People, Our Main Goals
            </h6>
            <p className="text-xl mb-5 text-accent-200">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="text-xl mb-5 text-accent-200">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              essentially.
            </p>
            <Button variant="primary">More About</Button>
          </div>
          <div className="px-[40px] py-[51px] bg-slate-200">
            <div className="mb-[28px]">
              <ul className="grid grid-cols-1 sm:grid-cols-2  gap-x-[22px] gap-y-[18px]">
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaCheckCircle className="text-secondary-600 text-[27px]" />
                  </span>
                  <span className="font-medium text-accent-300 text-xl">
                    Food Donation
                  </span>
                </li>
              </ul>
            </div>
            <div className=" mb-[28px]">
              <h5 className="shippori-mincho-extrabold text-[25px] leading-[120%] mb-[28px]">
                Total Donation
              </h5>
              <div className="relative mb-[28px] w-full h-[6px] bg-slate-300 rounded-md before:content-[''] before:absolute before:left-0 before:top-0 before:w-[50%] before:h-[6px] before:bg-primary-400 before:rounded-md"></div>
              <div className="flex items-center justify-between ">
                <p className="shippori-mincho-extrabold text-xl leading-[120%]">
                  Collection - $5M
                </p>
                <p className="shippori-mincho-extrabold text-xl leading-[120%]">
                  Goal - $10M
                </p>
              </div>
            </div>
            <div>
              <Button variant="white">Donate Now</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="py-[74px] px-4 sm:px-20 relative bg-primary">
          <div className="">
            <p className="text-[35px] sue-ellen-francisco-regular">Subscribe</p>
            <h5 className="text-[40px] shippori-mincho-extrabold mb-4">
              Newsletter
            </h5>
            <p className="">
              Sign up for our monthly newsletter to get the latest news,
              volunteer opportunities,
            </p>
            <div>
              <form action="" className="flex gap-6">
                <input
                  className="px-6 py-5 rounded-[34px] w-full outline-none"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <input
                  type="submit"
                  value="SEND"
                  className="px-8 py-5 bg-accent rounded-[34px]"
                />
              </form>
            </div>
          </div>
        </div>
        <div>
          <div
            className="min-h-[300px] sm:h-full z-0  w-full bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-overlay-secondary before:-z-10"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="py-[74px] px-4 sm:px-20   w-full h-full  z-50">
              <p className="text-[35px] sue-ellen-francisco-regular">
                Recent Blog
              </p>
              <h5 className="text-[40px] shippori-mincho-extrabold mb-4">
                Take Look At Recent Blog <br />
                Posts
              </h5>
              <button className="px-8 py-5 bg-primary rounded-[34px]">
                SEE OUR BLOGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
