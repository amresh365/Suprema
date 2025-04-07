"use client";
import { useState } from "react";

type FaqProps = {
  question: string;
  answer: string;
};

interface Faqs {
  faqs: FaqProps[];
}

const Faq = (Faqs: Faqs) => {
  // Use an array to keep track of which FAQs are open
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        {Faqs.faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-8 w-[43rem] border border-white/10 bg-white/5 rounded-3xl overflow-hidden ${
              openIndexes.includes(index)
                ? "overflow-visible "
                : "overflow-hidden h-21 pt-8"
            }`}
          >
            <div className="flex flex-row justify-between">
              <h3 className="md:text-2xl font-semibold">{faq.question}</h3>
              <button
                className="h-10 w-10 text-4xl bg-gray-700 text-center rounded-md"
                onClick={() => toggle(index)}
              >
                {openIndexes.includes(index) ? "-" : "+"}
              </button>
            </div>
            {openIndexes.includes(index) && (
              <div className="border-t-2 border-white/5 mt-4 p-4">
                <p className="mt-2 md:text-2xl text-gray-600 ">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
