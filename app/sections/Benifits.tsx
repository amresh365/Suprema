import Image from "next/image";
import an1 from "@/app/assets/an2.svg";
import Corner from "@/app/assets/Corner.avif";
import WorkFlow from "@/app/assets/workflow-diagram.svg";
const Benifits = () => {
  return (
    <section className="mt-44 pl-12 pr-12">
      <div className="video-container"></div>
      <div className="main-Container flex flex-col justify-center items-center">
        <div className="w-[70rem] text-center flex flex-col justify-center items-center m-8 p-20">
          <h4 className=" ">
            <span className="text-6xl md:text-2xl">🔥</span>
            <span className="text-white/60 text-6xl md:text-2xl">Benefits</span>
          </h4>
          <h1 className="text-7xl font-bold mt-10">
            Unlock Your Team's Potential
          </h1>
          <p className="text-6xl md:text-2xl text-white/60 mt-10 w-[50rem] text-center leading-tight">
            Maximize efficiency, enhance collaboration, and achieve project
            goals with Suprema’s powerful management tools.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-[200rem] md:h-[47rem]">
          <div className="relative text-center flex flex-col items-center">
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-8 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -left-0 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden absolute md:block -left-6 -top-6"
            />
            <Image src={an1} alt="" width={400} className="" />
            <div className="absolute top-16 w-[50rem]  md:w-[30rem] p-8">
              <span className="text-6xl md:text-5xl md:mt-0 mt-20 ">
                <i className="fa-solid fa-bolt"></i>
              </span>
              <h4 className="text-6xl md:text-2xl font-bold mt-32 md:mt-14">
                Increased Efficiency
              </h4>
              <p className=" text-6xl md:text-2xl mt-4 text-white/60">
                Streamline processes to save time and resources.
              </p>
            </div>
          </div>
          <div className="relative text-center flex flex-col items-center">
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-8 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -left-6 -top-6"
            />
            <Image src={an1} alt="" />
            <div className="absolute top-16  md:w-[30rem] p-8">
              <span className="text-5xl mt-40">
                <i className="fa-solid fa-people-group"></i>
              </span>
              <h4 className="text-3xl md:text-2xl font-bold mt-14">
                Task Accountability
              </h4>
              <p className="text-3xl md:text-2xl mt-4 text-white/60">
                Assign tasks clearly to ensure ownership and responsibility.
              </p>
            </div>
          </div>
          <div className="relative text-center flex flex-col items-center">
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-0 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -left-6 -top-6"
            />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -right-6 -top-6"
            />
            <Image src={an1} alt="" />
            <div className="absolute top-16 md:w-[30rem] p-8">
              <span className="text-5xl mt-40">
                <i className="fa-solid fa-timeline"></i>
              </span>
              <h4 className="text-3xl md:text-2xl font-bold mt-14">
                Custom Workflows
              </h4>
              <p className="text-3xl md:text-2xl mt-4 text-white/60">
                Tailor workflows to fit your team's unique needs.
              </p>
            </div>
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden  md:absolute -right-6 -top-6"
            />
          </div>
          <div className="relative text-center md:mt-10 flex flex-col items-center">
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-8 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -left-0 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="absolute  bottom-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden absolute md:block -left-6 -top-6 rotate-90"
            />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -left-6 -bottom-6 rotate-90"
            />
            <Image src={an1} alt="" />
            <div className="absolute top-10 md:w-[30rem] p-8">
              <span className="text-5xl mt-40">
                <i className="fa-solid fa-clock"></i>
              </span>
              <h4 className="text-3xl md:text-2xl font-bold mt-14">
                Real-Time Insights
              </h4>
              <p className="text-3xl md:text-2xl mt-4 text-white/60">
                Access live data to make informed decisions.
              </p>
            </div>
          </div>
          <div className="relative text-center md:mt-10 flex flex-col items-center">
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-8 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="absolute  bottom-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <Image src={an1} alt="" />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -left-6 -bottom-6"
            />
            <div className="absolute top-10 md:w-[30rem] p-8">
              <span className="text-5xl mt-40">
                <i className="fa-solid fa-dice-four"></i>
              </span>
              <h4 className="text-3xl md:text-2xl font-bold mt-14">
                Task Accountability
              </h4>
              <p className="text-3xl md:text-2xl mt-4 text-white/60">
                Assign tasks clearly to ensure ownership and responsibility.
              </p>
            </div>
          </div>
          <div className="relative text-center md:mt-10 flex flex-col items-center">
            <div className="h-[2px] w-8 bg-white rounded-sm"></div>
            <div className="absolute top-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <div className="absolute top-[2px] -right-0 w-[1.5px] h-full bg-gradient-to-t from-transparent via-white/10  to-transparent"></div>
            <div className="absolute  bottom-[2px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/10  to-transparent"></div>
            <Image src={an1} alt="" />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -left-6 -bottom-6"
            />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -right-6 -bottom-6"
            />
            <Image
              src={Corner}
              alt="dotAnimate"
              width={50}
              className="hidden md:block absolute -right-6 -top-6"
            />
            <div className="absolute top-10 md:w-[30rem] p-8">
              <span className="text-5xl mt-40">
                <i className="fa-brands fa-connectdevelop"></i>
              </span>
              <h4 className="text-3xl md:text-2xl font-bold mt-14">
                Flexible Integration
              </h4>
              <p className="text-3xl md:text-2xl mt-4  text-white/60">
                Connect with existing tools for a unified experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-center ">
        <div className="inline-flex justify-center items-end md:p-28">
          <h1 className="text-8xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60  bg-clip-text text-transparent">
            76%
          </h1>
          <span className="text-4xl md:text-2xl text-white/60 ml-3">
            Pro Users
          </span>
        </div>
        <div className="inline-flex justify-center items-end md:p-28 mt-10 md:mt-0">
          <h1 className="text-8xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60  bg-clip-text text-transparent">
            12M+
          </h1>
          <span className=" text-4xlmd:text-2xl text-white/60 ml-3">
            Tasks Organized
          </span>
        </div>
        <div
          className="inline-flex justify-center items-end md:p-28 mt-10
        md:mt-0"
        >
          <h1 className=" text-8xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60  bg-clip-text text-transparent">
            600+
          </h1>
          <span className="text-4xl md:text-2xl text-white/60 ml-3">
            Team Members
          </span>
        </div>
      </div>
    </section>
  );
};
export default Benifits;
