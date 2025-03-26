import React from "react";
import contactimg from "../assets/images/contactimg.png";
import back5 from "../assets/images/back5.png";
function Contact() {
  return (
    <div className="lg:p-20 p-5 pt-20 ">
      <div className="grid lg:grid-cols-2  gap-32">
        <div className=" space-y-14">
          <h1 className="lg:text-7xl text-6xl">
            Get in Touch with SEO Expert Alex Jackson
          </h1>
          <p className="text-4xl">
            {" "}
            Fill out the form below, and Alex Jackson will personally get in
            touch with you to discuss how he can help optimize your iGaming
            business for success.
          </p>
          <div className="flex gap-6  items-center">
            <img src={contactimg} alt="" height={109} width={109} />
            <div className="space-y-3">
              <h2 className="font-semibold text-2xl">Oleh Plotnytskyi</h2>
              <h3 className="text-xl font-semibold text-black/60">
                Sales Manager
              </h3>
            </div>
          </div>

          {/* bg-5 */}
          <div className="relative">
            <img
              className="absolute lg:block hidden right-0 -bottom-3"
              src={back5}
              height={144}
              width={144}
              alt=""
            />
          </div>
          <ul className="list-disc text-[22px] text-black/70 ml-10">
            <li>Boost organic traffic</li>
            <li>Develop a tailored SEO strategy that delivers results</li>
            <li>Drive higher-quality leads</li>
            <li>
              Only take on projects where we’re sure we can achieve measurable
              success
            </li>
            <li>
              Works closely with your team to ensure seamless collaboration
            </li>
          </ul>
        </div>

        
          <div className="space-y-12 flex flex-col">
            <div className="h-full">
              <label className="text-2xl" htmlFor="">
                Full Name
                <input
                  type="text"
                  className="w-full   border-b-[1px] border-black/30 "
                />
              </label>
            </div>
            <div className="h-full">
              <label className="text-2xl " htmlFor="">
                <select name="" id="" className="outline-none mr-4">
                  <option value="">+1</option>
                </select>
                Phone Number
                <input
                  type="number"
                  className="w-full  border-b-[1px] border-black/30"
                />
              </label>
            </div>
            <div className="h-full">
              <label className="text-2xl" htmlFor="">
                Email Address{" "}
                <input
                  type="email"
                  className="w-full   border-b-[1px] border-black/30"
                />
              </label>
            </div>
            <div className="h-full">
              <label className="text-2xl" htmlFor="">
                Website
                <input
                  type="text"
                  className="w-full   border-b-[1px] border-black/30"
                />
              </label>
            </div>
            <div className="h-full">
              <label className="text-2xl" htmlFor="">
                Message
                <input
                  type="text"
                  className="w-full  border-b-[1px] border-black/30"
                />
              </label>
            </div>
            <div className="space-y-12">
            <p className="text-xl">
              By submitting this form, you agree to the terms outlined in our
              privacy policy.
            </p>

            <button className="text-white text-xl font-bold h-[61px] w-72  bg-black rounded-full transition-all duration-200 cursor-pointer ">
              Submit
            </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Contact;
