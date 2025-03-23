import Image from "next/image";
import SmartTask from "@/app/assets/SmartTaskManagement.png";
import CustomizeTask from "@/app/assets/CustomTask.avif";
import TrackProgress from "@/app/assets/TrackProgress.avif";
import AutoClaean from "@/app/assets/AutoCleanup.avif";
import topLight from "@/app/assets/toplight.svg";
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
              <span className="text-5xl md:text-2xl font-bold ">
                File Sharing
              </span>
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
              <span className="text-5xl md:text-2xl font-bold ">
                Time Tracker
              </span>
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
      </div>
    </section>
  );
};

export default Features;
