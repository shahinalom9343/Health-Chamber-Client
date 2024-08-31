import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

const Hero = () => {
  return (
    <div className="-mt-6 md:-mt-7">
      <Carousel>
        <div className="relative w-full">
          <img src={img2} className=" w-full z-10" alt="" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <h2 className="text-2xl ml-1 md:ml-6 font-bold text-start text-white">
              <div>PicoTask Marketplace:</div>{" "}
              <div>Unlocking Opportunities, One Task at a Time</div>
            </h2>
            <div className="absolute ml-1 md:ml-6 flex gap-5 items-center h-full left-0 top-16">
              <button className="btn btn-primary">Book An Appointment</button>
              <button className="btn btn-secondary">Call Us</button>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img src={img3} className=" w-full" alt="" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <h2 className="text-2xl ml-1 md:ml-6 font-bold text-start text-white">
              <div>PicoTask Marketplace:</div>{" "}
              <div>Unlocking Opportunities, One Task at a Time</div>
            </h2>
            <div className="absolute ml-1 md:ml-6 flex gap-5 items-center h-full left-0 top-16">
              <button className="btn btn-primary">Book An Appointment</button>
              <button className="btn btn-secondary">Call Us</button>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img src={img1} className=" w-full" alt="" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <h2 className="text-2xl font-bold text-start text-white">
              <div>PicoTask Marketplace:</div>{" "}
              <div>Unlocking Opportunities, One Task at a Time</div>
            </h2>
            <div className="absolute flex gap-5 items-center h-full left-0 top-16">
              <button className="btn btn-primary">Book An Appointment</button>
              <button className="btn btn-secondary">Call Us</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
