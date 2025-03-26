import React, { useRef, useState } from "react";
import graph from "../assets/images/graph.png";
import arrow from "../assets/images/arrow.png";
import arrowleft from "../assets/images/arrowleft.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Cases = [
  {
    id: 1,
    image: graph,
    heading: "Case Study: Organic Traffic Growth for iGaming Platform",
    desc1:
      "It took just 3 months to see substantial results from our targeted SEO strategy.",
    desc2: "5% to 15%",
    desc3:
      "Organic traffic growth surged from 5% to 15% as a result of our tailored iGaming SEO approach, boosting visibility and driving more high-quality players to the platform.",
  },
  {
    id: 2,
    image: graph,
    heading: "Case Study: Organic Traffic Growth for iGaming Platform",
    desc1:
      "It took just 3 months to see substantial results from our targeted SEO strategy.",
    desc2: "5% to 15%",
    desc3:
      "Organic traffic growth surged from 5% to 15% as a result of our tailored iGaming SEO approach, boosting visibility and driving more high-quality players to the platform.",
  },
];
const WiningCases = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className="lg:p-10 p-5 lg:mt-10">
      <h1 className="lg:text-7xl text-6xl pt-16 pb-6 lg:pt-0">
        Check My Winning Cases
      </h1>

      <Swiper loop ref={swiperRef} onSlideChange={handleSlideChange}>
        {Cases.map((caseItem) => (
          <SwiperSlide key={caseItem.id}>
            <div className="bg-[#F2F4F7] h-full 2xl:p-20 p-10 mt-10 rounded-4xl relative">
              <div className="hidden justify-end pb-10 lg:flex">
                {Cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => swiperRef.current.swiper.slideTo(index)}
                    className={`w-3 h-3 mx-1 rounded-full ${
                      activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <div className="lg:flex items-center  gap-20 ">
                <img
                  src={caseItem.image}
                  alt="graph"
                  className=" lg:w-[450px] w-full 2xl:h-full 2xl:w-[569px] h-full lg:h-[457px]"
                />
                <div className="2xl:space-y-14 space-y-10 lg:p-10 pt-10 lg:pt-0">
                  <h1 className="text-4xl font-medium">{caseItem.heading}</h1>
                  <p className="lg:text-3xl text-2xl text-black/70">
                    {caseItem.desc1}
                  </p>

                  <p className="lg:text-3xl text-2xl text-black/70">
                    <span className="text-black font-semibold">
                      {caseItem.desc2}
                    </span>
                    <br />
                    {caseItem.desc3}
                  </p>
                  <button className="bg-black text-white cursor-pointer rounded-full font-bold text-xl h-14 w-64 hover:text-black hover:bg-white transition-all duration-200">
                    Get a Proposal
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center  lg:px-16 pt-20 lg:pt-10">
                <div className=" items-center gap-2 lg:flex hidden">
                  <h1 className="text-3xl">Explore all Case Studies </h1>
                  <a href="">
                    <img
                      className="hover:underline"
                      src={arrow}
                      height={9}
                      width={15}
                      alt=""
                    />
                  </a>
                </div>

                <div className="block lg:hidden">
                  {Cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => swiperRef.current.swiper.slideTo(index)}
                      className={`w-3 h-3 mx-1 rounded-full ${
                        activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="h-14 cursor-pointer w-14 border-black rounded-full border-2 flex items-center justify-center"
                  >
                    <img src={arrowleft} alt="" height={11} width={14} />
                  </button>
                  <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="h-14 cursor-pointer w-14 border-black rounded-full border-2 flex items-center justify-center"
                  >
                    {" "}
                    <img src={arrow} height={11} width={14} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Mobile Explore */}
      <div className=" items-center  gap-5 lg:hidden flex py-8">
        <h1 className="text-3xl">Explore all Case Studies </h1>
        <a href="">
          <img src={arrow} height={9} width={15} alt="" className="mt-2" />
        </a>
      </div>
    </div>
  );
};

export default WiningCases;
