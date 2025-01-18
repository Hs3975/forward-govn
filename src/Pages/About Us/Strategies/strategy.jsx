import React from "react";
import Footer from "../../../components/Footer";
import Image from "../../../assets/Strategies/Image.png";
import Banner from "../../../components/Banner";
import Navbar from "../../../components/BlackNavbar";
import AnotherBanner from "../../Banner";

function Strategies() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [
    "Participation",
    "Action-Oriented",
    "Resource Utilization",
    "Innovative Development",
  ];

  const descriptions = [
    "Involve women actively to improve the economic conditions of impoverished families.",
    "Implement policies tailored to specific operational needs, focusing on community development.",
    "Efficiently use local resources for sustainable, community-focused development.",
    "Encourage participatory development through a shared vision and innovative ideas.",
  ];

  return (
    <div className="flex flex-col">
      <AnotherBanner />
      <Navbar />
      <main className="h-full w-screen flex-grow mt-[8rem] md:mt-[10rem] bg-white ">
        <section>
          <div className="md:flex p-10 md:p-20 pb-5 items-center lg:items-start md:text-left gap-10 justify-between bg-[#FCEDC6]">
            <div className="md:hidden">
              <img src={Image} className="" alt="" />
            </div>
            <div className="md:w-[40.08%] mt-[1rem] mb-[1rem]">
              <h1 className="font-archivo leading-[120%] mb-[1rem] text-[20px] md:text-[40px] font-bold">
                Linking microfinance with livelihood programs to drive
                socio-economic growth in Nepal
              </h1>
              <p className="text-[20px] hidden md:block leading-[160%] font-inter text-[#525560]">
                Forward’s strategies are designed to create sustainable impact
                by building on proven success stories and adapting them to reach
                more communities across Nepal
              </p>
            </div>
            <div className="hidden md:block">
              <img src={Image} className="" alt="" />
            </div>
          </div>
          <div>
            <p className="md:text-[20px] p-10 md:hidden leading-[160%] text-[16px] font-inter text-[#525560]">
              Forward’s strategies are designed to create sustainable impact by
              building on proven success stories and adapting them to reach more
              communities across Nepal
              <hr className="mt-8" />
            </p>
          </div>

          <div className="pl-10 md:flex pr-10 gap-[5rem] md:justify-between md:p-20 md:pt-[7rem]">
            <div className="md:w-[40%]">
              <h1 className="font-archivo text-[20px] mb-10 leading-[120%] font-bold md:text-[35px]">
                Our strategic approach combines effective program replication
                and regional coordination.
              </h1>
              <p className="text-[20px] hidden md:block leading-[160%] font-inter text-[#525560]">
                By integrating social development with economic support, we are
                expanding our reach to uplift livelihoods, protect biodiversity,
                promote agriculture, and extend humanitarian assistance to
                communities across the country.
              </p>
            </div>
            <div className="md:w-[60%]">
              <div className="md:whitespace-normal mt-10 md:mt-0 flex md:flex-wrap scrollbar-hide whitespace-nowrap gap-5 overflow-x-auto">
                {/* Render a button for each item in the items array   */}
                {items.map((items, index) => (
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`mr-[10px] ${
                      activeIndex === index
                        ? "border-[#FFB700] font-semibold" //Highlight active button
                        : "border-transparent"
                    } text-[20px] pb-5 font-archivo border-b-[2px]`}
                    key={index}
                  >
                    {items}
                  </button>
                ))}
              </div>
              <hr />

              <p className="md:text-[20px] mt-10  text-[16px] text-[#525560] leading-[32px] font-inter">
                {/* Display the description based on the active index or a fallback message */}
                {activeIndex !== null
                  ? descriptions[activeIndex]
                  : "no data found :("}
              </p>
            </div>
          </div>

          <div className="pl-10 pr-10 md:pl-20 md:pr-20">
            <hr className="mt-10 md:mt-0" />
          </div>

          <div className="md:flex p-10 md:p-20 ">
            <div className="md:w-[50%] mb-10 md:mr-[5rem]">
              <h1 className="text-[20px] md:text-[35px] font-bold font-archivo leading-[120%]">
                Our team works closely with district and regional bodies to
                align strategies
              </h1>
            </div>

            <div className="md:w-[50%]">
              <p className="text-[16px]  font-inter md:text-[20px] text-[#525560] leading-[32px]">
                By integrating social development with economic support, we are
                expanding our reach to uplift livelihoods, protect biodiversity,
                promote agriculture, and extend humanitarian assistance to
                communities across the country.
              </p>
            </div>
          </div>
          <div className="md:p-20">
            <Banner />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Strategies;
