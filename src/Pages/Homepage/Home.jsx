import { Helmet } from "react-helmet";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../banner.css";

const Home = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Health Chamber | Home</title>
      </Helmet>

      {/* Hero compoenent section */}
      <div className="overflow-auto">
        <div className=" md:h-screen carousel w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={img2} className=" w-full h-full" alt="" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                  <h2 className="text-2xl ml-1 md:ml-6 font-bold text-start text-white">
                    <div>PicoTask Marketplace:</div>{" "}
                    <div>Unlocking Opportunities, One Task at a Time</div>
                  </h2>
                  <div className="absolute ml-1 md:ml-6 flex gap-5 items-center h-full left-0 top-16">
                    <button className="btn btn-primary">
                      Book An Appointment
                    </button>
                    <button className="btn btn-secondary">Call Us</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={img3} className=" w-full h-full" alt="" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                  <h2 className="text-2xl ml-1 md:ml-6 font-bold text-start text-white">
                    <div>PicoTask Marketplace:</div>{" "}
                    <div>Unlocking Opportunities, One Task at a Time</div>
                  </h2>
                  <div className="absolute ml-1 md:ml-6 flex gap-5 items-center h-full left-0 top-16">
                    <button className="btn btn-primary">
                      Book An Appointment
                    </button>
                    <button className="btn btn-secondary">Call Us</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={img1} className=" w-full h-full" alt="" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                  <h2 className="text-2xl font-bold text-start text-white">
                    <div>PicoTask Marketplace:</div>{" "}
                    <div>Unlocking Opportunities, One Task at a Time</div>
                  </h2>
                  <div className="absolute flex gap-5 items-center h-full left-0 top-16">
                    <button className="btn btn-primary">
                      Book An Appointment
                    </button>
                    <button className="btn btn-secondary">Call Us</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* marquee section */}
      <div className="py-5 text-2xl font-medium  bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white px-4 hidden md:block">
        <Marquee pauseOnHover>
          Welcome to our Health Chamber Hospital, where compassionate care meets
          cutting-edge medical expertise. Our dedicated team of healthcare
          professionals is committed to providing personalized, high-quality
          treatment in a safe and comfortable environment. Your health and
          well-being are our top priorities. Experience the difference at Health
          Chamber—where every patient is treated like family...
        </Marquee>
      </div>
    </section>
  );
};

export default Home;
