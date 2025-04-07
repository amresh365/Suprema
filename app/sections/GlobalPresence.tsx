import Earth from "@/app/assets/Earth.png";
import Image from "next/image";
const GlobalPresence = () => {
  return (
    <section className="mt-[35rem] flex flex-col items-center justify-center relative">
      <Image
        src={Earth}
        width={400}
        alt="earthIamge"
        className="absolute -top-[17rem] right-[29rem] bg-gradient-to-b from-black to-transparent "
      />
      <div className="text-center flex flex-col items-center justify-center relative z-10">
        <div>
          <span></span>
          <span className="md:text-2xl text-white/60">Global Presence</span>
        </div>
        <h1 className="md:text-6xl font-bold mt-7">
          Connecting Worldwide Teams
        </h1>
        <p className="md:text-2xl text-white/60 w-[50rem] mt-8">
          Empowering teams across the globe to collaborate seamlessly, driving
          innovationand success everywhere.
        </p>
      </div>

      <div className="flex mt-10 ">
        <div className="p-16 relative">
          <div className="h-14 w-[1px] bg-white/10 absolute top-20 right-0"></div>
          <h1 className="md:text-6xl font-bold  bg-gradient-to-r from-white to-white/5  bg-clip-text text-transparent">
            100%
          </h1>
          <p className="md:text-2xl text-white/60">
            Incresing Progress Traking
          </p>
        </div>
        <div className="p-16 relative">
          <div className="h-14 w-[1px] bg-white/10 absolute top-20 right-0"></div>
          <h1 className="md:text-6xl font-bold  bg-gradient-to-r from-white to-white/5  bg-clip-text text-transparent">
            50%
          </h1>
          <p className="md:text-2xl text-white/60">
            Faster Project Completion Rates
          </p>
        </div>
        <div className="p-16">
          <h1 className="md:text-6xl font-bold  bg-gradient-to-r from-white to-white/5  bg-clip-text text-transparent">
            90%
          </h1>
          <p className="md:text-2xl text-white/60">
            Satisfaction Rate Among User
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
