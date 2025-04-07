import anm1 from "@/app/assets/an1.svg";
import anm5 from "@/app/assets/an5.svg";
import Image from "next/image";
import PlanInclude from "../component/PlanInclude";
const Pricing = () => {
  return (
    <section className="mt-[10rem] md:mt-44">
      <div className="text-center">
        <p className="text-2xl text-white/60 ">Pricing</p>
        <h1 className="text-6xl font-bold mt-12">Affordable Pricing Plans</h1>
      </div>
      <div className=" mt-20 flex flex-wrap justify-center items-center">
        <div className=" border border-white/10 border-1 rounded-3xl md:w-[30rem] w-full m-2 relative overflow-hidden">
          <Image
            src={anm1}
            alt="Picture of the author"
            height={300}
            className="absolute top-0 -right-12 md:block hidden"
          />
          <Image
            src={anm5}
            alt="Picture of the author"
            height={300}
            className="absolute -top-28 -right-24 md:block hidden"
          />
          <div className="price border-b border-white/10 border-1 p-10">
            <h3 className="md:text-2xl font-bold">Free Plan</h3>
            <div className="flex justify-start items-end">
              <h1 className="text-6xl font-bold mt-10">$0</h1>
              <span className="text-2xl text-white/60 mb-2 ml-3">
                per user / month
              </span>
            </div>
            <p className="text-2xl text-white/60 mt-10">Free for everyone</p>
            <button className="text-2xl p-4 w-[26rem] rounded-3xl  bg-[#131315] mt-10 ">
              <p className="hover:translate-y-3">Get Started</p>
            </button>
            <div className="flex justify-center items-center">
              <span className="text-3xl mt-6 mr-3">
                <i className="fa-solid fa-circle-info"></i>
              </span>
              <p className="text-2xl text-white/60 mt-6 text-center">
                Get your free 7-day trial today!
              </p>
            </div>
          </div>
          <div className="what-icluded p-10">
            <h3 className="text-2xl">What's included</h3>
            <ul>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center ">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Data Encryption</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Deadline Alerts</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Collaboration Tools</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Custom Workflows</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Real-Time Sync</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border border-white/10 border-1 rounded-3xl md:w-[30rem] w-full m-2 relative overflow-hidden">
          <Image
            src={anm1}
            height={300}
            alt="Picture of the author"
            className="absolute top-0 -right-12 md:block hidden"
          />
          <Image
            src={anm5}
            alt="Picture of the author"
            height={300}
            className="absolute -top-28 -right-24 md:block hidden"
          />
          <div className="price border-b border-white/10 border-1 p-10">
            <h3 className="md:text-2xl font-bold">Plo Plan</h3>
            <div className="flex justify-start items-end">
              <h1 className="text-6xl font-bold mt-10">$12</h1>
              <span className="text-2xl text-white/60 mb-2 ml-3">
                per user / month
              </span>
            </div>
            <p className="text-2xl text-white/60 mt-10">Free for everyone</p>
            <button className="text-2xl p-4 w-[26rem] rounded-3xl text-black bg-white mt-10">
              <p className="hover:translate-y-3"> Get Started</p>
            </button>
            <div className="flex justify-center items-center">
              <span className="text-3xl mt-6 mr-3">
                <i className="fa-solid fa-circle-info"></i>
              </span>
              <p className="text-2xl text-white/60 mt-6 text-center">
                Get your free 7-day trial today!
              </p>
            </div>
          </div>
          <div className="what-icluded p-10">
            <h3 className="text-2xl">What's included</h3>
            <ul>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Data Encryption</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Deadline Alerts</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Collaboration Tools</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Custom Workflows</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-gray-800 text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Real-Time Sync</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border border-white/10 border-1 rounded-3xl md:w-[30rem] w-full m-2 relative overflow-hidden">
          <Image
            src={anm1}
            height={300}
            alt="Picture of the author"
            className="absolute top-0 -right-12 md:block hidden"
          />
          <Image
            src={anm5}
            alt="Picture of the author"
            height={300}
            className="absolute -top-28 -right-24 md:block hidden"
          />
          <div className="price border-b border-white/10 border-1 p-10">
            <h3 className="md:text-2xl font-bold">Advanced Plan</h3>
            <div className="flex justify-start items-end">
              <h1 className="text-6xl font-bold mt-10">$19</h1>
              <span className="text-2xl text-white/60 mb-2 ml-3">
                per user / month
              </span>
            </div>
            <p className="text-2xl text-white/60 mt-10">Free for everyone</p>
            <button className="text-2xl p-4 w-[26rem] rounded-3xl  bg-[#131315] mt-10">
              <p className="hover:translate-y-3"> Get Started</p>
            </button>
            <div className="flex justify-center items-center">
              <span className="text-3xl mt-6 mr-3">
                <i className="fa-solid fa-circle-info"></i>
              </span>
              <p className="text-2xl text-white/60 mt-6 text-center">
                Get your free 7-day trial today!
              </p>
            </div>
          </div>
          <div className="what-icluded p-10">
            <h3 className="text-2xl">What's included</h3>
            <ul>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Data Encryption</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Deadline Alerts</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Collaboration Tools</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Task Management</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Custom Workflows</p>
              </li>
              <li className="flex items-center space-x-3 mt-3">
                <div className="h-7 w-7 rounded-[50%] bg-[#00FF00] text-center">
                  <i className="fa-solid fa-check mt-[7px]"></i>
                </div>
                <p className="text-2xl text-white/60">Real-Time Sync</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-[8rem]">
        <PlanInclude />
      </div>
    </section>
  );
};

export default Pricing;
