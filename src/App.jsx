import React from "react";
import Navbar from "./Components/Navbar.jsx";
import laptop from "./assets/images/laptop.png";
import AboutUs from "./Components/AboutUs.jsx";
import Reviews from "./Components/Reviews.jsx";
import FAQ from "./Components/FAQ.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/footer.jsx";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto ">
      <header className="bg-linear-to-tr from-[#D9E1FF] to-[#DFF4FF] lg:h-[871px] h-full relative ">
        <Navbar />

        <div className="  xl:px-20 xl:py-10 p-5">
          <div className=" lg:max-w-[950px] w-full   lg:mt-10 ">
            <ul className="uppercase flex items-center justify-center lg:justify-normal lg:gap-20 sm:gap-10 text-black/60">
              <li>Reclaim lost traffic</li>
              <li> Increase organic reach</li>
              <li> Drive more conversation</li>
            </ul>
            <div className="lg:space-y-6">
              <h1 className="text-[84px] font-medium text-center lg:text-left">
                iGaming SEO Consultant
              </h1>

              <img className="lg:hidden block" src={laptop} alt="" />

              <p className="text-2xl font-normal leading-10 text-center lg:text-left">
                Whether you’re managing a small project or a large-scale
                campaign, what you need are experts who are open to
                experimentation, quick to adapt, and committed to finding the
                best solutions that work for your unique needs.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-normal">
              <button className="bg-black lg:mt-10 my-20  transition-all duration-200 cursor-pointer text-white font-bold text-xl rounded-full h-14 w-64 hover:text-black hover:bg-white">
                Get a Proposal
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={laptop}
              alt=""
              className="absolute lg:block hidden -right-1 xl:-bottom-50 -bottom-60   2xl:h-[661px] 2xl:w-[931px] h-[500px] w-[700px]"
            />
          </div>
        </div>

        <div className="bg-white w-full h-16 absolute -bottom-0.5 rounded-t-full "></div>
      </header>

      {/* Section */}
      <section>
        <AboutUs />
        <Reviews />
        <FAQ />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
