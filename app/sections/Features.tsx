import Image from "next/image";
import SmartTask from "@/app/assets/SmartTaskManagement.png";
import CustomizeTask from "@/app/assets/CustomTask.avif";
import TrackProgress from "@/app/assets/TrackProgress.avif";
import AutoClaean from "@/app/assets/AutoCleanup.avif";
import ProjectFeature from "../component/ProjectFeature";

const Features = () => {
  return (
    <section>
      <div className="flex flex-wrap m-5 text-center justify-center items-center   ">
        <div className="pt-32 md:pr-10 w-[55rem] md:w-[40rem] h-[50rem] border-0 md:border-t md:border-r border-white/10 border-1 ">
          <h3 className="text-5xl md:text-2xl font-bold ">
            Smart Task Assignment
          </h3>
          <p className="text-5xl md:text-2xl text-white/60 mt-4 ">
            Automatically assign tasks based on project needs and team
            strengths.
          </p>
          <Image
            src={SmartTask}
            alt="smartTask"
            width={800}
            height={300}
            className=""
          />
        </div>
        <div className=" pt-32 md:pl-10 w-[55rem] md:w-[40rem] h-[50rem] border-0 md:border-t  border-white/10 border-1 mt-20 md:mt-0">
          <h3 className="text-5xl md:text-2xl font-bold">
            Customizable Task Prioritization
          </h3>
          <p className="text-5xl md:text-2xl text-white/60 mt-4">
            Set task priorities to align with your goals and deadlines.
          </p>
          <Image
            src={CustomizeTask}
            alt="customizeTask"
            className="w-full"
            width={500}
            height={300}
          />
        </div>
        <div className="mt-20 md:mt-0 pt-64 md:pt-32 md:pr-10 w-[55rem] md:w-[40rem] h-[50rem] border-0 md:border-t md:border-b  md:border-r border-white/10 border-1 ">
          <h3 className="text-5xl md:text-2xl font-bold">
            Track Progress Seamlessly
          </h3>
          <p className="text-5xl md:text-2xl text-white/60 mt-4">
            Monitor project updates and performance across teams in real time.
          </p>
          <Image
            src={TrackProgress}
            alt="TrackProgress"
            width={900}
            height={300}
          />
        </div>
        <div className="mt-20 md:mt-0 pt-64 md:pt-32 md:pl-10 w-[55rem] md:w-[40rem] h-[50rem] border-0 md:border-t md:border-b  border-white/10 border-1">
          <h3 className="text-5xl md:text-2xl font-bold">
            Auto-Cleanup of Completed Tasks
          </h3>
          <p className="text-5xl md:text-2xl text-white/60 mt-4">
            Effortlessly remove outdated tasks to keep your workspace
            clutter-free.
          </p>
          <Image src={AutoClaean} alt="Autoclrean" width={900} height={300} />
        </div>
        <ProjectFeature />
      </div>
    </section>
  );
};

export default Features;
