import Image from "next/image";
import { Header } from "@/app/component/Header";
import Hero from "@/app/sections/Hero";
import ProductOverview from "./sections/Product-Overview";
import Features from "./sections/Features";
import Benifits from "./sections/Benifits";
import Pricing from "./sections/Pricing";
import ProgressTraking from "./sections/ProgressTraking";
import OrganizationalTools from "./sections/OrganizationalTools";
import Blogs from "./sections/Blogs";
import Team from "./sections/Team";
import GlobalPresence from "./sections/GlobalPresence";
import Testomonials from "./sections/Testimonials";
import Faq from "./component/Faqs";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <Hero />
      <ProductOverview />
      <Features />
      <Benifits />
      <Pricing />
      <ProgressTraking />
      <OrganizationalTools />
      <Blogs />
      <Team />
      <GlobalPresence />
      <Testomonials />
      <Faq />
    </div>
  );
}
