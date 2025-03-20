import { IoIosArrowRoundForward } from "react-icons/io";
import * as motion from "motion/react-client";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <p className="text-[16px] font-[400] text-[#D8261ACC] mb-4">
        Lorem ipsum
      </p>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[48px] font-[500] leading-[70px] text-[#2A2A2A]">
          LIVE STREAMING
        </h2>
        <a
          href="#"
          className="text-[18px] text-[#3E4095] py-3 px-6 font-[500] border-[1px] border-[#3E4095] rounded-full hover:bg-[#3E4095] hover:text-white transition-all"
        >
          View All
        </a>
      </div>

      <div className="hidden lg:grid xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6">
        {streamingPackages.map((pkg, index) => (
          <div
            key={index}
            className={`relative overflow-hidden bg-white py-8 flex items-center border-gray-500 border-b-1 transition-all duration-300 group 
               ${index === 0 ? "border-t-1" : ""}`}
          >
            <div className="absolute inset-0 bg-[#3E4095] opacity-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

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
              <h3 className="text-[24px] font-[500] text-[#2A2A2A] group-hover:text-[#191A3C] transition-colors duration-300">
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

            <div className="relative z-10 flex justify-end items-center w-[20%] mr-1">
              <IoIosArrowRoundForward className="w-[38px] h-[38px] border-1 border-[#191A3C] rounded-full text-[#191A3C] group-hover:text-white group-hover:border-[#191A3C] bg-none group-hover:bg-[#191A3C] transition-all duration-300 group-hover:rotate-[-45deg] transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View Layout */}
      <div className="lg:hidden block">
          {streamingPackages.map((pkg, index) => (
            <div key={index} className="flex flex-col mb-6 shadow-xl p-4">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[208px] object-cover rounded-md mb-4"
              />
              <h3 className="text-[20px] font-[500] text-[#2A2A2A]">{pkg.title}</h3>
              <p className="text-[14px] font-[400] text-black">{pkg.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
