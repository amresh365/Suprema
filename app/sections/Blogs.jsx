import Blog1 from "@/app/assets/Blog1.png";
import Blog2 from "@/app/assets/Blog2.png";
import Blog3 from "@/app/assets/Blog3.png";
import Image from "next/image";
const Blogs = () => {
  return (
    <section>
      <div className="text-center">
        <div className="md:stext-2xl text-center">
          <span></span>
          <span className="text-2xl text-white/60">Our Blogs</span>
        </div>
        <h1 className="md:text-6xl font-bold">News, insights and more</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-16 ">
        <div className="p-3  border border-white/10 border-1 rounded-3xl hover:bg-white/5 ">
          <Image src={Blog1} width={500} alt="Blog1" />
          <div className="p-5">
            <div className="text-white/60 flex mt-3">
              <span className="md:text-2xl mr-7 text-green-500">
                Efficiency
              </span>
              <ul>
                <li className="md:text-2xl list-disc "> Nov 30, 2024</li>
              </ul>
            </div>
            <p className="text-2xl mt-4">
              Enhance Workflow Efficiency with custom filters
            </p>
            <div className="mt-6 text-2xl text-white/60">
              <span>Read Full Blog</span>
              <span className=" ml-1 text-xl">{">"}</span>
            </div>
          </div>
        </div>
        <div className="p-3  border border-white/10 border-1 rounded-3xl bg-[#000] hover:bg-white/5">
          <Image src={Blog3} width={500} alt="Blog1" />
          <div className="p-5">
            <div className="text-white/60 flex mt-3">
              <span className="md:text-2xl mr-7 text-yellow-300">
                Productivity
              </span>
              <ul>
                <li className="md:text-2xl list-disc "> Out 23, 2024</li>
              </ul>
            </div>
            <p className="text-2xl mt-4">
              Mastering Time Management for Maximum Efficiency
            </p>
            <div className="mt-6 text-2xl text-white/60">
              <span>Read Full Blog</span>
              <span className=" ml-1 text-xl">{">"}</span>
            </div>
          </div>
        </div>
        <div className="p-3  border border-white/10 border-1 rounded-3xl hover:bg-white/5">
          <Image src={Blog2} width={600} alt="Blog1" />
          <div className="p-5">
            <div className="text-white/60 flex mt-3">
              <span className="md:text-2xl mr-7 text-green-500">
                Collaboration
              </span>
              <ul>
                <li className="md:text-2xl list-disc "> Oct 22, 2024</li>
              </ul>
            </div>
            <p className="text-2xl mt-4">
              Boost Time Managment for Maximum Efficiency
            </p>
            <div className="mt-6 text-2xl text-white/60">
              <span>Read Full Blog</span>
              <span className=" ml-1 text-xl">{">"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
