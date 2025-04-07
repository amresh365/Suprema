"use client";
import Image from "next/image";
import ProjectTimeLine from "@/app/assets/ProjectTimeLine.svg";
import img1 from "@/app/assets/img1.png";
import img2 from "@/app/assets/img2.png";
import img3 from "@/app/assets/img3.png";
import img4 from "@/app/assets/img4.png";
import { motion } from "framer-motion";
const ProgressTraking = () => {
  return (
    <section className="mt-56 flex flex-wrap">
      <div className="md:w-1/2 w-full p-14">
        <div className="flex">
          <span className="md:text-2xl text-6xl text-yellow-300 mr-3">
            <i className="fa-solid fa-bars-progress"></i>
          </span>
          <p className="text-2xl text-white/60 ">Progress Tracking</p>
        </div>
        <h1 className="text-7xl font-bold mt-14 leading-tight">
          Monitor Progress Faster Than Ever.
        </h1>
        <p className="text-2xl text-white/60  mt-10">
          Instantly access real-time updates to track project progress and make
          quick adjustments.
        </p>
        <div className="flex mt-10 ">
          <div className="pr-9 pt-5 pb-5 relative">
            <div className="h-14 w-[1px] bg-white/10 absolute top-12 right-0"></div>
            <h1 className="text-7xl font-bold  bg-gradient-to-r from-white to-white/10  bg-clip-text text-transparent">
              100%
            </h1>
            <p className="text-2xl text-white/60 mt-3">
              Increase in Progress Tracking
            </p>
          </div>
          <div className="pl-10 p-5">
            <h1 className="text-7xl font-bold   bg-gradient-to-r from-white to-white/10  bg-clip-text text-transparent">
              10X
            </h1>
            <p className="text-2xl text-white/60 mt-3">
              Increase in Productivity
            </p>
          </div>
        </div>
        <button className="mt-10 p-5 bg-white rounded-xl text-black text-2xl font-bold ">
          <p className="hover:-translate-y-10"> Start your 7 days free trial</p>
        </button>
      </div>
      <div className="md:w-1/2 w-full relative">
        <Image
          src={ProjectTimeLine}
          alt="Project TimeLine"
          className="w-full"
        />
        <div className="bg-[#131315] text-white/60 p-3 border border-white/10 border-1 rounded-full absolute bottom-[17rem] right-[22rem] ">
          Assign Task
        </div>
        <div className="absolute h-10 w-[2px] bg-white/10 bottom-[14.5rem] right-[25.5rem] "></div>
        <div className="bg-[#131315] w-[14rem] p-3 rounded-full text-center border border-white/10 border-1 absolute bottom-40 right-72 overflow-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ translateX: ["0%", "-100%"] }} // Adjust based on desired effect
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <Image src={img1} alt="img1" width={50} className="rounded-[50%]" />
            <Image src={img2} alt="img2" width={50} className="rounded-[50%]" />
            <Image src={img3} alt="img3" width={50} className="rounded-[50%]" />
            <Image src={img4} alt="img4" width={50} className="rounded-[50%]" />
            <Image src={img1} alt="img1" width={50} className="rounded-[50%]" />
            <Image src={img2} alt="img2" width={50} className="rounded-[50%]" />
            <Image src={img3} alt="img3" width={50} className="rounded-[50%]" />
            <Image src={img4} alt="img4" width={50} className="rounded-[50%]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTraking;
