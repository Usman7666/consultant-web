import React from "react";
import client from "../assets/images/client.png";
import arrowleft from "../assets/images/arrowleft.png";
import arrow from "../assets/images/arrow.png";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah M",
    image: client,
    review:
      "We've been working with SEO iGaming on SEO for our new online casino, and the results have exceeded expectations. They developed a tailored strategy that brought real, measurable improvements in both traffic and user engagement. The team's professionalism and dedication to our success are unmatched. Definitely a trusted partner for any iGaming business!",
    desc: "Digital Marketing Specialist",
  },
  {
    id: 2,
    name: "Sarah M",
    image: client,
    review:
      "We've been working with SEO iGaming on SEO for our new online casino, and the results have exceeded expectations. They developed a tailored strategy that brought real, measurable improvements in both traffic and user engagement. The team's professionalism and dedication to our success are unmatched. Definitely a trusted partner for any iGaming business!",
    desc: "Digital Marketing Specialist",
  },
  {
    id: 3,
    name: "Sarah M",
    image: client,
    review:
      "We've been working with SEO iGaming on SEO for our new online casino, and the results have exceeded expectations. They developed a tailored strategy that brought real, measurable improvements in both traffic and user engagement. The team's professionalism and dedication to our success are unmatched. Definitely a trusted partner for any iGaming business!",
    desc: "Digital Marketing Specialist",
  },
];

function Reviews() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="mt-10 lg:mt-0">
      <h1 className="lg:text-7xl text-6xl font-normal text-center">
        Clients Reviews
      </h1>
      <div className="flex  items-center mt-16 ">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="h-14 mx-5 cursor-pointer w-14   border-black rounded-full border-2 flex items-center justify-center"
        >
          <img src={arrowleft} alt="" height={11} width={14} />
        </button>
        <Swiper
          ref={swiperRef}
          loop
          breakpoints={{
            1024: { slidesPerView: reviews.length < 2 ? 1 : 2 },
            0: { slidesPerView: 1 },
          }}
          spaceBetween={40}
          onSlideChange={handleSlideChange}
          className="lg:max-w-[1690px] max-w-[510px] w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-linear-to-r from-[#B9E6FF]/50 to-[#E3F2FF]  rounded-4xl p-8 space-y-8 ">
                <p className="text-xl text-black/70">{review.review}</p>
                <div className="flex gap-3">
                  <img height={69} width={69} src={review.image} alt="" />
                  <div>
                    <h1 className="text-xl">{review.name}</h1>
                    <h3 className="text-[16px]">{review.desc}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="h-14 mx-5 cursor-pointer w-14 border-black rounded-full border-2 flex items-center justify-center"
        >
          {" "}
          <img src={arrow} height={11} width={14} alt="" />
        </button>
      </div>

      <div className="flex justify-center lg:my-20 mt-10 mb-20">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current.swiper.slideTo(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
