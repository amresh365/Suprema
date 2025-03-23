"use client";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
export const Header = () => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null);

  const setStyle = (id: number) => {
    setActiveBtn(id);
  };

  useEffect(() => {
    setActiveBtn(1);
  }, []);
  return (
    <header className="backdrop-blur-sm sticky z-10  top-6 flex items-center justify-center mt-7">
      <div className="py-4 w-[45rem] md:w-[70rem] border border-white/10 border-1 rounded-3xl">
        <div className="container flex justify-between items-center">
          <div className="ml-4">
            <Image src={Logo} alt="logo" />
          </div>
          <nav className="hidden md:flex gap-6 text-white items-center justify-center text-2xl">
            {/* Home Link */}
            <Link
              href="home"
              id="1"
              className={` ${
                activeBtn === 1
                  ? "border border-white/10 border-1 rounded-3xl p-5 bg-[#131315]"
                  : ""
              }`}
              onClick={() => setStyle(1)}
            >
              Home
            </Link>
            {/* Blog Link */}
            <Link
              href="/blog"
              id="2"
              className={`${
                activeBtn === 2
                  ? "border border-white/10 border-1 rounded-3xl p-5 bg-[#131315]"
                  : ""
              }`}
              onClick={() => setStyle(2)}
            >
              Blog
            </Link>
            {/* ChangeLog Link */}
            <Link
              href="changelog"
              id="3"
              className={`${
                activeBtn === 3
                  ? "border border-white/10 border-1 rounded-3xl p-5 bg-[#131315]"
                  : ""
              }`}
              onClick={() => setStyle(3)}
            >
              ChangeLog
            </Link>
            {/* WaitList Link */}
            <Link
              href="waitlist"
              id="4"
              className={`${
                activeBtn === 4
                  ? "border border-white/10 border-1 rounded-3xl p-5 bg-[#131315]"
                  : ""
              }`}
              onClick={() => setStyle(4)}
            >
              WaitList
            </Link>
          </nav>
          <Link href="/contect">
            <button className="bg-white text-black p-5 rounded-xl inline-flex items-center justify-center tracking-tight gap-1 text-2xl mr-4 w-48">
              Contect Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
