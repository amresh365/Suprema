import React from "react";
import Faq from "./Faq";

const Faqs = () => {
  const faqs = [
    {
      question: "What is the purpose of this FAQ section?",
      answer:
        "The FAQ section aims to address common questions and provide clarity on various topics.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team via the contact form or email us directly.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "Additional information can be found in our documentation or help center.",
    },
    {
      question: "What is the purpose of this FAQ section?",
      answer:
        "The FAQ section aims to address common questions and provide clarity on various topics.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team via the contact form or email us directly.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "Additional information can be found in our documentation or help center.",
    },
    {
      question: "What is the purpose of this FAQ section?",
      answer:
        "The FAQ section aims to address common questions and provide clarity on various topics.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team via the contact form or email us directly.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "Additional information can be found in our documentation or help center.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "Additional information can be found in our documentation or help center.",
    },
  ];
  return (
    <section className="mt-64">
      <div>
        <div className="text-center">
          <span>
            <i className="fa-solid fa-circle-question text-2xl text-yellow-300 mr-3"></i>
          </span>
          <span className="text-2xl text-white/60 ">FAQ’s</span>
        </div>
        <h1 className="text-6xl font-bold text-center mt-8 mb-14">
          Frequently Asked Questions
        </h1>
      </div>
      <Faq faqs={faqs} />
    </section>
  );
};

export default Faqs;
