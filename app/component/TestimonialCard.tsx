"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
type TestimonialCardProps = {
  name: string;
  feedback: string;
  role: string;
  imageUrl: StaticImageData;
};

interface testimonial {
  testimomials: TestimonialCardProps[];
}

const TestimonialCard = ({ testimomials }: testimonial) => {
  return (
    <motion.div
      className="flex flex-row items-center space-x-4 mt-40 w-full "
      animate={{
        translateX: "-100%",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {testimomials.map((testimonial, index) => (
        <div
          key={index}
          className=" gap-4 mb-6 h-[24rem] w-[29rem] p-4 rounded-3xl shadow-md border border-white/10  bg-white/5"
        >
          <div className="h-[16rem] w-[27rem] rounded-t-3xl bg-black p-4">
            <p className="text-7xl text-left text-white/60 font-bold">”</p>
            <p className="mt-2  md:text-2xl text-center">
              {testimonial.feedback}
            </p>
          </div>
          <div className="flex flex-row justify-between p-3 mt-4">
            <div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-lg text-gray-500">{testimonial.role}</p>
            </div>
            <div>
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
      {testimomials.map((testimonial, index) => (
        <div
          key={index}
          className=" gap-4 mb-6 h-[24rem] w-[29rem] p-4 rounded-3xl shadow-md border border-white/10  bg-white/5"
        >
          <div className="h-[16rem] w-[27rem] rounded-t-3xl bg-black p-4">
            <p className="text-8xl text-left text-white/60">”</p>
            <p className="mt-2  md:text-2xl text-center">
              {testimonial.feedback}
            </p>
          </div>
          <div className="flex flex-row justify-between p-3 mt-4">
            <div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-lg text-gray-500">{testimonial.role}</p>
            </div>
            <div>
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TestimonialCard;
