'use client';
import React, { useState } from "react";
import Heading from "./Heading"; // Adjust the path as needed
import { ArrowRight } from "lucide-react"; // Use lucide-react for the arrow icon

const faqs = [
  {
    question: "What is the date and location of the Harmonia music concert?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
  {
    question: "Can I change the attendee name on the ticket?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
  {
    question: "How can I purchase tickets for the event?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
  {
    question: "Are there age restrictions for attending the event?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
  {
    question: "Is there parking available at the venue?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
  {
    question: "Is the event accessible for individuals with disabilities?",
    answer: "Are you a developer interested in building web applications and at the same time thinking about multiple parts of the stack needed to build them? Then this conference is for you. Many of the sessions either touch a specific concept or go about multiple parts of the stack.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center  text-white p-0 md:p-8">
      {/* Left Side with Heading */}
      <div className="md:w-[40%] w-full flex items-start h-full pr-8">
        <Heading top="Solutions for Your Curiosities" med="IdeaTex" last="HELPDESK" />
      </div>

      {/* Right Side with FAQ */}
      <div className="md:w-[60%] w-full mt-8 md:mt-0 h-[60vh] overflow-y-auto hide-scrollbar hide-scrollbar::-webkit-scrollbar space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="p-6 rounded-lg border-2 border-[#26222D] cursor-pointer bg-[#110C1A] transition-all ease-in-out duration-300"
          >
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-[700] text-[#d2d2d2]">
                {faq.question}
              </p>
              <ArrowRight
                className={`transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-90 text-[#838490]" : "text-[#838490]"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-[400] text-[#838490] text-[16px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
 