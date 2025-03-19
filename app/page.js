import { IoIosArrowRoundForward } from "react-icons/io";

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

      <div className="grid xl:grid-cols-1 gap-8">
        {streamingPackages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-white p-6 flex items-center border-[#191A3C] border-b-1 ${index === 0 ? "border-t-1" : ""
              }`}
          >
            {/* Image section */}
            <div className="flex-shrink-0 w-[30%]">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-[208px] object-cover rounded-md"
              />
            </div>

            {/* Title section */}
            <div className="flex-grow mx-14 w-[30%]">
              <h3 className="text-[24px] font-[500] text-[#2A2A2A] mb-2">
                {pkg.title}
              </h3>
            </div>

            {/* Description section */}
            <div className="flex-grow mx-14 w-[30%]">
              <p className="text-[16px] font-[400] text-[#6B6B6B] mb-4">
                {pkg.description}
              </p>
            </div>

            {/* Arrow icon section */}
            <div className="flex-shrink-0 flex justify-center items-center w-[10%]">
              <IoIosArrowRoundForward
                className="w-[30px] h-[30px] border-1 border-[#3E4095] rounded-full text-[#3E4095]"
              />
            </div>

          </div>
        ))}
      </div>


    </div>
  );
}
