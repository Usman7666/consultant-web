import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:px-20 p-5">
      <h1 className="text-7xl text-center lg:text-left">FAQ</h1>
      <div className="mt-10 mx-auto space-y-5">
        <div className="p-5  bg-[#F2F4F7]  rounded-4xl ">
          <button
            className="flex w-full justify-between text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h1 className="text-[28px] font-semibold">
              What makes your SEO strategies unique for the iGaming industry?
            </h1>
            {isOpen === true ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isOpen && (
            <p className="text-[22px] py-10">
              Alex Jackson focuses on tailored strategies that are specific to
              the needs of iGaming businesses. By combining a deep understanding
              of search engine algorithms and iGaming trends, he crafts
              solutions that drive long-term results and increase organic
              traffic effectively.
            </p>
          )}
        </div>

        <div className="p-5 bg-[#F2F4F7] rounded-4xl space-y-5">
          <div className="flex justify-between">
            <h1 className="text-[28px] font-semibold">
              How quickly can I expect to see results from your SEO services?
            </h1>
            <ChevronDown />
          </div>
        </div>

        <div className="p-5 bg-[#F2F4F7] rounded-4xl space-y-5">
          <div className="flex justify-between">
            <h1 className="text-[28px] font-semibold">
              Do you offer ongoing support after the initial SEO strategy
              implementation?
            </h1>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
