import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/app/assets/logo1.svg";
import { LogoTicker } from "../component/LogoTicker";

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col relative top-20">
      <div className="container w-[45rem]">
        <div className="flex items-center justify-center flex-col">
          <Link href="/contact">
            <div className="text-2xl flex items-center justify-center border border-white/10 border-1 rounded-full p-3 m-3 bg-[#131315]">
              <Image
                src={Logo1}
                height={35}
                alt="onlyLogo"
                className="mr-2 pl-3"
              />
              <p className="pr-3">Manage Progect end-to-end</p>
            </div>
          </Link>
          <h1 className="text-7xl font-bold text-center">
            <span> Plan and navigate from idea to launch.</span>
          </h1>
          <p className="text-white/60 text-2xl text-center m-3">
            Create a clear roadmap, track progress, and smoothly guide your
            project from idea to successful launch.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <button className="m-3 p-5 text-2xl bg-white rounded-2xl text-black font-bold pr-7 pl-7">
            Get Started For Free
          </button>
          <div className="m-3 flex  ">
            <span className="text-3xl mt-0 mr-3 ">
              <i className="fa-solid fa-circle-info"></i>
            </span>
            <p className="text-[1.4rem]">No credit card required</p>
          </div>
        </div>
      </div>
      <div className=" mt-40 text-white/60 text-2xl text-center">
        <p>Trusted by 50,000+ businesses for innovative design and growth.</p>
        <div>
          <LogoTicker />
        </div>
      </div>
    </section>
  );
};

export default Hero;
