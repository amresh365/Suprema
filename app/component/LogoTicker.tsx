"use client";
import Artistry from "@/app/assets/Artistry.svg";
import Emblem from "@/app/assets/Emblem.svg";
import Grafherz from "@/app/assets/Grafherz.svg";
import Iconic from "@/app/assets/Iconic.svg";
import Imprintify from "@/app/assets/Imprintify.svg";
import Optimal from "@/app/assets/Optimal.svg";
import Prelude from "@/app/assets/Prelude.svg";
import Singlet from "@/app/assets/Singlet.svg";
import Singnum from "@/app/assets/Singnum.svg";
import StudioDesign from "@/app/assets/StudioDesign.svg";
import Visually from "@/app/assets/Visually.svg";
import Wayline from "@/app/assets/Wayline.svg";
import Image from "next/image";
import { motion } from "framer-motion";
export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container overflow-hidden w-[60rem]">
        <motion.div
          className="flex pr-18"
          animate={{
            translateX: "-100%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex items-center space-x-8 gap-14 flex-none ">
            <Image
              src={Artistry}
              className="logo-ticker-image"
              alt="acmeLogo"
            />
            <Image
              src={Emblem}
              className="logo-ticker-image"
              alt="quantumLogo"
            />
            <Image
              src={Grafherz}
              className="logo-ticker-image"
              alt="echoLogo"
            />
            <Image
              src={Iconic}
              className="logo-ticker-image"
              alt="celestialLogo"
            />
            <Image
              src={Imprintify}
              className="logo-ticker-image"
              alt="pulseLogo"
            />
            <Image src={Prelude} alt="apexLogo" className="" />
            <Image src={Singlet} alt="apexLogo" className="" />
            <Image src={Singnum} alt="apexLogo" className="" />
            <Image src={StudioDesign} alt="apexLogo" className="" />
            <Image src={Visually} alt="apexLogo" className="" />
            <Image src={Wayline} alt="apexLogo" className="" />
            <Image src={Optimal} alt="apexLogo" className="" />
            {/* second set of logo for animate */}
            <Image
              src={Artistry}
              className="logo-ticker-image"
              alt="acmeLogo"
            />
            <Image
              src={Emblem}
              className="logo-ticker-image"
              alt="quantumLogo"
            />
            <Image
              src={Grafherz}
              className="logo-ticker-image"
              alt="echoLogo"
            />
            <Image
              src={Iconic}
              className="logo-ticker-image"
              alt="celestialLogo"
            />
            <Image
              src={Imprintify}
              className="logo-ticker-image"
              alt="pulseLogo"
            />
            <Image src={Prelude} alt="apexLogo" className="" />
            <Image src={Singlet} alt="apexLogo" className="" />
            <Image src={Singnum} alt="apexLogo" className="" />
            <Image src={StudioDesign} alt="apexLogo" className="" />
            <Image src={Visually} alt="apexLogo" className="" />
            <Image src={Wayline} alt="apexLogo" className="" />
            <Image src={Optimal} alt="apexLogo" className="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
