import image from "../../assets/images/childrens-sitting.png";

const Home = () => {
  return (
    <div className="">
      <section>
        <div className="bg-accent w-full h-screen"></div>
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
