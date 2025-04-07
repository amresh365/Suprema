"use client";
import { motion } from "framer-motion";
const PlanInclude = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="md:text-2xl text-6xl">All Plan Include</h3>

      <div className="mt-10 p-4  w-[60rem]  overflow-hidden ">
        <motion.ul
          className=" flex flex-row items-center justify-center md:text-xl text-3xl text-center "
          animate={{ translateX: ["0%", "-100%"] }} // Adjust based on desired effect
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        >
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-cloud  mr-2"></i>
            <span className=" text-white/60  whitespace-nowrap">
              Cloud Storage
            </span>
          </li>

          <li className="text-2xl  flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-star  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              User Mnagment
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-list  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Custom Reports
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-people-group mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Collaboration Tools
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-mobile-button  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Mobile Access
            </span>
          </li>

          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-database  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Data Security
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-clock  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              24/7 Support
            </span>
          </li>
          {/* new list */}
          <li className="text-2xl flex flex-row items-center space-x-1">
            <i className="fa-solid fa-cloud  mr-2"></i>
            <span className=" text-white/60  whitespace-nowrap">
              Cloud Storage
            </span>
          </li>

          <li className="text-2xl  flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-star  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              User Mnagment
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-list  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Custom Reports
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-people-group mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Collaboration Tools
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-mobile-button  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Mobile Access
            </span>
          </li>

          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-database  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              Data Security
            </span>
          </li>
          <li className="text-2xl flex flex-row items-center space-x-1 mr-8">
            <i className="fa-solid fa-clock  mr-2"></i>
            <span className=" text-white/60 whitespace-nowrap">
              24/7 Support
            </span>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default PlanInclude;
