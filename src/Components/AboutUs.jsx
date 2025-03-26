import React from "react";
import Aboutme from "../assets/images/aboutme.png";
import list1 from "../assets/images/list1.png";
import list2 from "../assets/images/list2.png";
import list3 from "../assets/images/list3.png";
import list4 from "../assets/images/list4.png";
import roundedback from "../assets/images/6corner.png";
import list21 from "../assets/images/list21.png";
import list22 from "../assets/images/list22.png";
import list23 from "../assets/images/list23.png";
import list24 from "../assets/images/list24.png";
import bg from "../assets/images/bg.png";
import list31 from "../assets/images/list31.png";
import list32 from "../assets/images/list32.png";
import list33 from "../assets/images/list33.png";
import list34 from "../assets/images/list34.png";
import bg1 from "../assets/images/back1.png";
import bg2 from "../assets/images/back2.png";
import bg3 from "../assets/images/back3.png";
import bg4 from "../assets/images/back4.png";
import WiningCases from "./WinningCases";
function AboutUs() {
  return (
    <div className="">
      {/* About Me */}
      <div className="grid lg:grid-cols-2  gap-16 mt-10 lg:mt-0 lg:px-20 p-5">
        <div className="space-y-10 lg:px-10">
          <h1 className="lg:text-7xl text-6xl font-normal">About Me</h1>
          <p className="lg:text-3xl text-2xl font-normal leading-12 text-black/60 h-full ">
            Alex Jackson is a highly experienced SEO consultant specializing in
            the iGaming sector, with over a decade of expertise in boosting
            online visibility and driving organic traffic. He’s worked with a
            wide range of clients, from startups to industry giants, and excels
            in all areas of SEO, including technical optimization, content
            strategy, and link building.
            <br />
            <br />
            Known for his innovative and adaptive approach, Alex stays ahead of
            industry shifts and search engine updates, ensuring his clients
            consistently achieve measurable results. His data-driven strategies
            are designed to help iGaming businesses thrive in a competitive and
            ever-evolving market.
          </p>
        </div>
        <img src={Aboutme} alt="image" className="h-full" />
      </div>

      {/* bg1 */}
      <div className="relative lg:block hidden">
        <img
          src={bg1}
          className="absolute h-44 w-44 2xl:bottom-0.5 -top-10"
          alt="backimage"
        />
      </div>
      {/* What i Do */}
      <div className="lg:p-20 p-5 mt-10 ">
        <h1 className="lg:text-7xl text-6xl font-normal text-center pb-5 lg:pb-0">
          What I Can Do for You
        </h1>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-3 mt-10">
          <div className="bg-[#F4E7F6] p-7 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list1}
                alt="image"
                height={37}
                width={37}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">
              Custom SEO Strategy Development
            </h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              I specialize in crafting tailored SEO strategies that are
              specifically designed to address the unique challenges of the
              iGaming industry. Whether you need to increase organic traffic,
              improve your rankings, or target new customer segments, I create a
              comprehensive plan that aligns with your business objectives. From
              identifying high-converting keywords to optimizing your content
              and site structure, I ensure your SEO efforts are focused and
              effective, setting the foundation for long-term growth.
            </p>
          </div>
          <div className="bg-[#E5FBE2] p-7 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list2}
                alt="image"
                height={37}
                width={37}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">
              Link Building & Authority Enhancement
            </h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              A strong backlink profile is critical for improving your site’s
              authority and search engine rankings, especially in the
              competitive iGaming market. I develop a custom link-building
              strategy that targets high-quality, relevant backlinks from
              reputable sources within the industry. By leveraging my network
              and using ethical, white-hat techniques, I help strengthen your
              site’s online authority, increase its visibility in search
              results, and ultimately drive more targeted traffic to your site.
            </p>
          </div>

          <div className="bg-[#FFE9DA] p-7 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list3}
                alt="image"
                height={37}
                width={37}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">
              In-Depth SEO Audits & Optimization
            </h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              My detailed SEO audits provide a complete analysis of your
              website, including a review of your on-page elements, technical
              SEO, and competitor landscape. I identify any weaknesses or missed
              opportunities that are limiting your site’s visibility and
              performance. After the audit, I implement a strategy to optimize
              your site’s structure, content, and technical aspects—improving
              speed, usability, and keyword targeting. This ensures your site is
              fully optimized for both search engines and user experience,
              driving better results across the board.
            </p>
          </div>

          <div className="bg-[#D9E1FF] p-7 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list4}
                alt="image"
                height={37}
                width={37}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">
              Penalty Recovery & Ongoing Support
            </h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              If your site has been penalized by search engines, I diagnose the
              root causes and develop a comprehensive recovery plan to restore
              your rankings and traffic. From manual penalties to algorithm
              updates, I take the necessary steps to ensure your site complies
              with search engine guidelines and recovers its former performance.
              Additionally, I offer continuous SEO support to adapt to industry
              changes, monitor key performance indicators, and optimize
              strategies for sustained growth and success in the highly
              competitive iGaming space.
            </p>
          </div>
        </div>
      </div>

      {/*Mobile Button */}
      <div className="w-full flex justify-center mt-5 mb-14 lg:hidden ">
        <button className="bg-black    transition-all duration-200 cursor-pointer text-white font-bold text-xl rounded-full h-14 w-64 hover:text-black hover:bg-white">
          Get a Proposal
        </button>
      </div>

      {/* More About me */}
      <div className="lg:px-20 p-5">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="bg-center bg-cover  lg:h-[664px] h-[831px] rounded-[72px] "
        >
          <div className="p-10 grid lg:grid-cols-2  h-full">
            <div className="space-y-8">
              <button className="bg-white rounded-full cursor-pointer text-black font-bold text-xl h-14 w-64 transition-all duration-200 hover:bg-black hover:text-white">
                More about me
              </button>
              <p className="text-white/70 font-normal lg:text-3xl text-[22px] leading-12">
                Incorporating someone who claims to "know it all" into your SEO
                iGaming strategy can be a risky move. In an ever-evolving
                industry, where search algorithms change frequently and new SEO
                tools emerge almost daily, it's crucial to have a team of
                versatile professionals.{" "}
              </p>
            </div>
            <div className="flex items-end w-full   mx-auto justify-end ">
              <p className="text-white/70 font-normal lg:w-full w-[473px] lg:text-[26px]  text-xl">
                With Alex Jackson, you get a consultant who thrives in this
                dynamic environment and ensures your SEO strategy stays ahead of
                the curve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bg2 */}
      <div className="relative lg:block hidden">
        <img src={bg2} alt="" className="absolute right-1 h-80 w-80 -top-36" />
      </div>
      {/* My Work Process */}
      <div className="lg:px-20 p-5 lg:py-10 lg:mt-10">
        <h1 className="text-center font-normal lg:text-7xl text-6xl pt-16 lg:pt-0">
          My Work Process
        </h1>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3  lg:grid-cols-2 gap-4 mt-16">
          <div className=" bg-[#F2F4F7] rounded-4xl p-5">
            <div className="flex items-center gap-5">
              <img src={list21} width={80} alt="Image" />
              <h2 className="text-[27px] ">Niche and Competitor Research</h2>
            </div>
            <p className="text-2xl mt-10">
              I begin by analyzing your iGaming niche and competitors to
              understand the competitive landscape. This research helps me
              identify opportunities and challenges unique to your business,
              enabling me to craft a tailored SEO strategy that aligns with your
              goals.
            </p>
          </div>
          <div className=" bg-[#F2F4F7] rounded-4xl p-5">
            <div className="flex items-center  gap-5">
              <img src={list22} width={80} alt="Image" />
              <h2 className="text-[27px] ">Strategy Development</h2>
            </div>
            <p className="text-2xl mt-10">
              Based on the insights from the research, I create a customized SEO
              plan. This strategy is designed to target the right keywords,
              improve your website’s performance, and drive organic traffic, all
              while keeping your business objectives in focus.
            </p>
          </div>

          <div className=" bg-[#F2F4F7] rounded-4xl p-5">
            <div className="flex items-center gap-5">
              <img src={list23} width={80} alt="Image" />
              <h2 className="text-[27px] ">Implementation by SEO Experts</h2>
            </div>
            <p className="text-2xl mt-10">
              I handpick a team of SEO professionals to execute the strategy.
              From technical optimization to content improvements, we work
              together to bring your iGaming site closer to its SEO goals,
              ensuring every task is completed with precision.
            </p>
          </div>

          <div className=" bg-[#F2F4F7] rounded-4xl p-5">
            <div className="flex items-center gap-5">
              <img src={list24} width={80} alt="Image" />
              <h2 className="text-[27px] ">
                Ongoing Monitoring and Optimization
              </h2>
            </div>
            <p className="text-2xl mt-10">
              I continuously track performance and adjust the strategy as
              needed. By analyzing key metrics, I ensure that your website is
              consistently improving and adapting to changes in search engine
              algorithms, securing long-term results and growth.
            </p>
          </div>
          <div></div>
        </div>
      </div>

      {/* Wining Cases */}
      <WiningCases />
      
        {/* bg3 */}
        <div className="relative lg:block hidden">
          <img src={bg3} alt="" className="absolute h-60 w-60  top-96 left-0" />
        </div>
      {/* why with me */}
      <div className="lg:mt-10 lg:px-20">
        <h1 className="lg:text-7xl text-[55px] lg:text-center  text-left  p-5">
          Why You Should Work With Me?
        </h1>
      
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 gap-3  lg:p-16 p-5 ">
          <div className="flex flex-col justify-between ">
            <h1 className="text-4xl ">
              Why Choose SEO for Your Gaming Business?
            </h1>
            <div>
              <p className="text-2xl py-5 lg:py-0">
                Opting for SEO is the best strategy for long-term success and
                consistent, high-quality traffic. Here's how SEO compares to
                other common methods of driving visitors to your iGaming site:
              </p>
            </div>
          </div>
          <div className="bg-[#D9E1FF] lg:p-5 p-10 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list31}
                alt="image"
                height={42}
                width={42}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">Paid Advertising (PPC)</h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              While PPC campaigns allow you to drive traffic by paying for
              clicks, they require constant investment to maintain visibility.
              Once the budget runs out, the traffic stops. This makes PPC more
              suitable for short-term gains. In contrast, SEO delivers lasting
              results by improving your site’s organic rankings and building
              sustainable traffic over time.
            </p>
          </div>

          <div className="bg-[#F4E7F6] lg:p-5 p-10 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list32}
                alt="image"
                height={42}
                width={42}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">Social Media Marketing</h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              Marketing your iGaming business on platforms like Facebook and
              Instagram can be tricky due to strict regulations in the gambling
              industry. Platforms like Meta require special approvals, limiting
              your reach. SEO, on the other hand, allows you to enhance your
              visibility on search engines without these restrictions, bringing
              organic traffic directly to your site.
            </p>
          </div>

          <div className="bg-[#FFE9DA] lg:p-5 p-10 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list33}
                alt="image"
                height={42}
                width={42}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">Email Campaigns</h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              Email marketing is powerful for engaging players and bringing them
              back to your site, but it can only be effective if you already
              have a steady stream of visitors. Relying on email marketing alone
              won’t help you attract new players. SEO is crucial for building
              that initial audience and ensuring a continuous flow of relevant,
              organic traffic to fuel your email campaigns.
            </p>
          </div>

          <div className="bg-[#E5FBE2] lg:p-5 p-10 space-y-3 rounded-4xl">
            <div className="relative ">
              <img src={roundedback} height={79} width={79} alt="image" />
              <img
                src={list34}
                alt="image"
                height={42}
                width={42}
                className="absolute top-5 left-5"
              />
            </div>
            <h2 className="text-4xl font-normal">Affiliate Marketing</h2>
            <p className="text-xl font-normal text-black/60 mt-10">
              Affiliate programs are an effective way to promote your iGaming
              site, but they can be risky if you choose low-quality affiliates.
              Poor backlinks from unreliable sources can harm your search engine
              rankings. Combining affiliate marketing with a solid SEO strategy
              ensures you attract the right kind of traffic from trusted
              sources, boosting both your rankings and reputation in the long
              run.
            </p>
          </div>
        </div>
      </div>

      {/*Mobile Button */}
      <div className="w-full flex justify-center mt-5 mb-14 lg:hidden ">
        <button className="bg-black    transition-all duration-200 cursor-pointer text-white font-bold text-xl rounded-full h-14 w-64 hover:text-black hover:bg-white">
          Get a Proposal
        </button>
      </div>

      {/* Success Section */}

      <div className="lg:p-10 p-5 lg:pt-20 ">
        <h1 className="lg:text-7xl text-6xl text-center ">
          My Success in Numbers
        </h1>

        <div className="grid xl:grid-cols-5 grid-cols-3 lg:gap-20 gap-10 lg:mt-10 p-10">
          <div className="bg-[#F2F4F7] rounded-4xl flex flex-col items-center justify-center lg:p-5">
            <h1 className="lg:text-5xl text-2xl font-medium">10+</h1>
            <p className="lg:text-2xl text-sm text-center font-medium text-black/70">
              years in iGaming SEO
            </p>
          </div>

          <div className="bg-[#F2F4F7] rounded-4xl flex flex-col items-center justify-center p-5">
            <h1 className="lg:text-5xl text-2xl font-medium">12+</h1>
            <p className="lg:text-2xl text-sm  text-center font-medium text-black/70">
              SEO experts in our team
            </p>
          </div>

          <div className="bg-[#F2F4F7] rounded-4xl flex flex-col items-center justify-center p-5">
            <h1 className="lg:text-5xl text-2xl font-medium">70+</h1>
            <p className="lg:text-2xl text-sm text-center font-medium text-black/70">
              successful iGaming projects
            </p>
          </div>

          <div className="bg-[#F2F4F7] rounded-4xl flex flex-col items-center justify-center p-5">
            <h1 className="lg:text-5xl text-2xl font-medium">85%</h1>
            <p className="lg:text-2xl text-sm text-center font-medium text-black/70">
              client retention rate
            </p>
          </div>

          <div className="bg-[#F2F4F7] rounded-4xl flex flex-col items-center justify-center  p-5">
            <h1 className="lg:text-5xl text-2xl font-medium">250%+</h1>
            <p className="lg:text-2xl text-sm font-medium text-center text-black/70">
              average traffic growth for clients
            </p>
          </div>
        </div>
      </div>

      {/* bg-4    */}
      <div className="relative lg:block hidden">
        <img
          src={bg4}
          alt=""
          className="absolute right-0"
          height={171}
          width={171}
        />
      </div>
    </div>
  );
}

export default AboutUs;
