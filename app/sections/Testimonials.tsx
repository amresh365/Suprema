import React from "react";
import Image from "next/image";
import Heart from "@/app/assets/Heart.png";
import TestimonialCard from "../component/TestimonialCard";
import tes1 from "@/app/assets/tes1.png";
import tes2 from "@/app/assets/tes2.png";
import tes3 from "@/app/assets/tes3.png";
import tes4 from "@/app/assets/tes4.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "I love the customizable features that fit perfectly with our team’s needs!",
      role: "Product Manager",
      imageUrl: tes1,
    },
    {
      name: "Jane Smith",
      feedback:
        "The user interface is so intuitive and easy to navigate. I highly recommend it!",
      role: "UX Designer",
      imageUrl: tes2,
    },
    {
      name: "Sam Wilson",
      feedback:
        "A game-changer for our workflow. The integration with other tools is seamless.",
      role: "Software Engineer",
      imageUrl: tes3,
    },
    {
      name: "Alice Johnson",
      feedback:
        "The customer support is outstanding! They helped me with every question I had.",
      role: "Marketing Specialist",
      imageUrl: tes4,
    },
  ];
  return (
    <section className="mt-36 w-full overflow-hidden">
      <div className="relative">
        {/* <Image
          src={Heart}
          width={1800}
          alt="HeartImage"
          className="absolute -top-[20rem]"
        /> */}
        <div className="text-center ">
          <div>
            <span className="text-pink-400 md:text-2xl">
              <i className="fa-solid fa-face-smile mr-2"></i>
            </span>
            <span className="md:text-2xl text-white/60 ">Testimonials</span>
          </div>
          <h1 className="text-6xl font-bold mt-10">What Our Users Say</h1>
        </div>
      </div>
      <TestimonialCard testimomials={testimonials} />
    </section>
  );
};

export default Testimonials;
