import OrgTool from "@/app/assets/OrgTool.svg";
import Image from "next/image";
const OrganizationalTools = () => {
  return (
    <section className="flex flex-wrap mt-60">
      <div className="w-[40rem] ml-12">
        <Image src={OrgTool} alt="toolImg" className="w-full" />
      </div>
      <div className="w-[55rem] p-16 pt-10">
        <div className="">
          <span className="text-2xl mr-3">
            <i className="fa-solid fa-toolbox text-purple-600"></i>
          </span>
          <span className="text-white/60 md:text-2xl ">
            Organizational Tools
          </span>
        </div>
        <h1 className="text-7xl font-bold mt-8">
          Powerful Task Management Tools
        </h1>
        <ul className="mt-16">
          <li>
            <i className="fa-solid fa-check mt-[7px] md:text-[1.3rem] text-green-600 mr-2"></i>
            <span className="md:text-[1.3rem] text-white/60">
              Easily sort tasks by priority and status.
            </span>
          </li>
          <li className="mt-2">
            <i className="fa-solid fa-check mt-[7px] md:text-[1.3rem] text-green-600 mr-2"></i>
            <span className="md:text-[1.3rem] text-white/60">
              Organize tasks with customizable labels for quick reference.
            </span>
          </li>
          <li className="mt-2">
            <i className="fa-solid fa-check mt-[7px] md:text-[1.3rem] text-green-600 mr-2"></i>
            <span className="md:text-[1.3rem] text-white/60">
              Use visual labels to distinguish task categories.
            </span>
          </li>
          <li className="mt-2">
            <i className="fa-solid fa-check mt-[7px] md:text-[1.3rem] text-green-600 mr-2"></i>
            <span className="md:text-[1.3rem] text-white/60">
              Quickly find tasks using the advanced search function.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OrganizationalTools;
