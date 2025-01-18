import React from "react";
import image from "../../../assets/Goals/image.png";
import logo from "../../../assets/Goals/logo.svg";

const Goals = () => {
  const goals = [
    {
      id: "01",
      title: "Income Generation Initiative",
      description: "Promote self-sustaining income-generating activities.",
    },
    {
      id: "02",
      title: "Financial Inclusion Access",
      description:
        "Offer credit facilities to disadvantaged groups with an accessible delivery process.",
    },
    {
      id: "03",
      title: "Community Development Awareness",
      description:
        "Raise awareness on conserving natural resources, agricultural development, health, education, and livelihoods.",
    },
    {
      id: "04",
      title: "Women's Economic Empowerment",
      description:
        "Support women in socio-economic advancement via savings and credit programs.",
    },
    {
      id: "05",
      title: "Partnership and Capacity Building",
      description:
        "Conduct capacity-building and exposure programs in partnership with other agencies.",
    },
    {
      id: "06",
      title: "Holistic Community Welfare",
      description:
        "To conduct welfare programs in the field of socio-economic, cultural, ecology as well as in humanitarian in various parts of Nepal.",
    },
    {
      id: "07",
      title: "Entrepreneurship Development",
      description:
        "To enhance the community skill for income generation and entrepreneurship activities.",
    },
    {
      id: "08",
      title: "Vulnerability Support Training",
      description:
        "To conduct need base various training programs to strengthen the condition of vulnerable.",
    },
    {
      id: "09",
      title: "Women's Rights Advocacy",
      description:
        "To aware women on humanitarian rights of poor and vulnerable minorities.",
    },
  ];

  return (
    <div className="relative mx-auto px-4 bg-white ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-16 items-center p-8 md:p-32 pb-0">
        <div className="w-full mt-[40px] md:mt-10 max-sm:mt-14">
          <img
            src={image}
            alt="Hands holding green plant leaves showing growth concept"
            className="h-80 w-full object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col lg:space-y-6 ">
          <h3 className="text-[30px] md:text-[40px] mt-6  lg:text-[50px] font-semibold font-inter leading-tight  ">
            <div className="flex flex-col font-archivo">
              <span>Fostering</span>
              <span>Growth, One</span>
              <span>Goal at a Time</span>
            </div>
          </h3>

          <p className="text-[16px]  mb-10 md:text-[18px] lg:text-[22px] font-inter tracking-wider">
            Empowering vulnerable communities through sustainable development
            and social equity
          </p>
        </div>
      </div>

      <div className="font-archivo md:-mt-20 lg:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-8 w-full p-4 lg:p-[8rem] pt-0">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white py-6 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <div className="flex justify-end mb-4">
                <div className="bg-[#FFB65E] w-[3rem] h-[3rem] md:w-16 md:h-16 rounded-lg flex items-center justify-center text-5xl font-bold mb-2 md:mb-4">
                  {goal.id}
                </div>
              </div>
              <h4 className="text-[28px] md:text-[25px] lg:text-[27px] font-semibold font-archivo leading-[30px] text-left lg:h-[120px]">
                <span className="block mt-2">
                  {goal.title.split(" ")[0]} {goal.title.split(" ")[1]}
                </span>
                <span className="block">
                  {goal.title.split(" ").slice(2).join(" ")}
                </span>
              </h4>
              <p className="tracking-wider font-inter text-md w-[80%] text-[#323232] lg:h-[120px]">
                {goal.description}
              </p>

              <div className="mt-4 pb-[2px]">
                <hr className=" bg-[#707070] h-[2px] w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
