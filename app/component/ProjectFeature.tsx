import Image from "next/image";
import topLight from "@/app/assets/toplight.svg";
const ProjectFeature = () => {
  return (
    <div className="relative overflow-hidden mt-80 md:mt-0">
      <Image
        src={topLight}
        alt="topLight"
        width={1500}
        height={100}
        className="absolute -top-[20rem] left-1/2 transform -translate-x-1/2 md:block hidden"
      />
      <div className=" grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-4 gap-10  p-10 md:pt-14  ">
        <div>
          <span className="text-5xl md:text-2xl mr-3">
            <i className="fa-solid fa-folder-open"></i>
          </span>
          <span className="text-5xl md:text-2xl font-bold ">File Sharing</span>
          <p className="text-5xl md:text-2xl text-white/60 mt-16 md:mt-4">
            Easily upload and share project files securely.
          </p>
        </div>
        <div>
          <span className="text-5xl md:text-2xl mr-3">
            <i className="fa-solid fa-fan"></i>
          </span>
          <span className="text-5xl md:text-2xl font-bold ">Team Sync</span>
          <p className="text-5xl md:text-2xl text-white/60 mt-16  md:mt-4">
            Keep your team aligned with real-time updates.
          </p>
        </div>
        <div>
          <span className="text-5xl md:text-2xl mr-3">
            <i className="fa-solid fa-stopwatch-20"></i>
          </span>
          <span className="text-5xl md:text-2xl font-bold ">Time Tracker</span>
          <p className="text-5xl md:text-2xl text-white/60 mt-16  md:mt-4">
            Log work hours directly within the platform.
          </p>
        </div>
        <div>
          <span className="text-5xl md:text-2xl mr-3">
            <i className="fa-solid fa-tag"></i>
          </span>
          <span className="text-5xl md:text-2xl font-bold ">Task Tags</span>
          <p className="text-5xl md:text-2xl text-white/60 mt-16 md:mt-2">
            Organize tasks with customizable tags for quick filtering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeature;
