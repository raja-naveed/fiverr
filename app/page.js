'use client';
import { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import * as motion from "motion/react-client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const streamingPackages = [
  {
    title: "Live Streaming With Single Camera Package",
    description:
      "Single-camera live streaming for CXO speeches, demos, and tutorials starts at ₹15,000. Discounts available for long-term bookings.",
    image: "/images/image1.png",
  },
  {
    title: "Live Streaming With Multi Cameras Package",
    description:
      "Multi-camera live streaming for seminars, conferences, award nights, and product launches. Discounts available for long-term bookings.",
    image: "/images/image1.png",
  },
  {
    title: "Live Streaming Services With Camera From Client Side",
    description:
      "Live streaming on Zoom or any platform—your video feed, our broadcast. Ideal for companies with in-house production. Discounts for long-term bookings.",
    image: "/images/image1.png",
  },
  {
    title:
      "Customize Your Live Streaming Package For A Seamless Broadcast Experience",
    description:
      "Customize your live streaming package with flexible camera setups, platform options, and additional services for a seamless broadcast experience.",
    image: "/images/image1.png",
  },
];

export default function Home() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleWheelScroll = (event) => {
    event.preventDefault();

    if (swiperRef.current) {
      if (event.deltaY > 0) {
        swiperRef.current.swiper.slideNext();
      } else if (event.deltaY < 0) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    if (isMobile) {
      window.addEventListener("wheel", handleWheelScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheelScroll);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [isMobile]);

  const updateProgress = (swiper) => {
    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.activeIndex;
    const progressPercentage = (currentIndex / (totalSlides - 1)) * 100;
    setProgress(progressPercentage);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <p className="lg:text-[16px] text-[10px] text-center lg:text-left font-[400] text-[#D8261ACC] mb-0 lg:mb-4">
        Lorem ipsum
      </p>
      <div className="flex justify-center lg:justify-between items-center mb-2  lg:mb-8">
        <h2 className="text-center lg:text-left lg:text-[48px] text-[22px] font-[400] lg:font-[500] leading-[70px] text-[#191A3C]">
          LIVE STREAMING
        </h2>
        <a
          href="#"
          className="text-[18px] hidden lg:flex text-[#3E4095] py-3 px-6 font-[500] border-[1px] border-[#3E4095] rounded-full hover:bg-[#3E4095] hover:text-white transition-all"
        >
          View All
        </a>
      </div>

      <div className="hidden lg:grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        {streamingPackages.map((pkg, index) => (
          <div
            key={index}
            className={`relative overflow-hidden bg-white py-8 flex items-center border-gray-500 border-b-2 transition-all duration-1000 group
    ${index === 0 ? "border-t-2" : ""}`}
          >
            <div className="absolute inset-0 bg-[#3E4095] opacity-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out"></div>

            <motion.div
              className="relative z-10 flex-shrink-0 w-[30%] mr-20"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[208px] object-cover rounded-md"
              />
            </motion.div>

            <motion.div
              className="relative z-10 flex-grow mx-14 w-[20%]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-[24px] font-[500] text-[#191A3C] group-hover:text-[#191A3C] transition-colors duration-300">
                {pkg.title}
              </h3>
            </motion.div>

            <motion.div
              className="relative z-10 flex-grow mx-14 w-[20%]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[16px] font-[400] text-black transition-colors duration-300">
                {pkg.description}
              </p>
            </motion.div>

            <div className="relative z-10 flex justify-end items-center w-[20%] mr-2">
              <IoIosArrowRoundForward className="w-[38px] h-[38px] border-1 border-[#323377] rounded-full text-[#323377] group-hover:text-white group-hover:border-[#323377] bg-none group-hover:bg-[#323377] transition-all duration-1000 group-hover:rotate-[-45deg] transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}

      <div className="lg:hidden block">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={true}
          className="mySwiper"
          onSlideChange={(swiper) => updateProgress(swiper)}
          ref={swiperRef}
        >
          {streamingPackages.map((pkg, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col mb-6 shadow-xl p-4 w-[260px] h-[350px] bg-white rounded-md"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[208px] object-cover rounded-md mb-4"
              />
              <h3 className="text-[20px] font-[500] text-[#191A3C]">
                {pkg.title}
              </h3>
              <p className="text-[14px] font-[400] text-[#191A3CCC] mt-2">
                {pkg.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative w-[60%] max-w-[300px] h-[10px] bg-gray-300  mx-auto rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-[#6466AA] rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          ></div>
        </div>
      </div>

      <div className="flex lg:hidden  justify-center mt-8">
        <a
          href="#"
          className="text-[18px] block text-[#3E4095] py-3 px-6 font-[500] border-[1px] border-[#3E4095] rounded-full hover:bg-[#3E4095] hover:text-white transition-all"
        >
          View All
        </a>
      </div>
    </div>
  );
}
