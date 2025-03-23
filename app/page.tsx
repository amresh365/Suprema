import Image from "next/image";
import { Header } from "@/app/component/Header";
import Hero from "@/app/sections/Hero";
import ProductOverview from "./sections/Product-Overview";
import Features from "./sections/Features";
import Benifits from "./sections/Benifits";
import Pricing from "./sections/Pricing";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <Hero />
      <ProductOverview />
      <Features />
      <Benifits />
      <Pricing />
    </div>
  );
}
