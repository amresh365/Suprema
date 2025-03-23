import Image from "next/image";
import Logo1 from "@/app/assets/logo1.svg";
import Product from "@/app/assets/Product.svg";
const ProductOverview = () => {
  return (
    <section className="mt-36 flex  flex-col justify-center items-center text-center ">
      <div className=" w-[50rem]">
        <div className=" relative top-22 flex justify-center">
          <div className="rounded-[50%] p-6 border w-24 bg-[#131315]">
            <Image src={Logo1} alt="logo" />
          </div>
        </div>
        <div>
          <p className="mt-8 text-white/60 text-2xl p-2">⭐Product Overview</p>
          <h1 className="text-7xl font-bold mt-5">Suprema at a Glance</h1>
          <p className="text-2xl mt-8 text-white/60">
            Explore Suprema's Powerful features designed to steamline project
            managment enhance collboration, and boast efficiency.
          </p>
        </div>
      </div>
      <div className="md:w-[100rem]">
        <Image src={Product} alt="product_img" className="md:w-full" />
      </div>
    </section>
  );
};

export default ProductOverview;
