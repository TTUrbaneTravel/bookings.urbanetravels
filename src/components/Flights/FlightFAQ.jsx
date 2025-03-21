// src/components/FAQ.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons

const FlightFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active FAQ

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Vite?",
      answer:
        "Vite is a next-generation, fast build tool and development server for modern web projects.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly.",
    },
    {
      question: "How do I install Vite?",
      answer:
        'You can install Vite using npm or yarn, with the command: "npm create vite@latest my-project --template react".',
    },
  ];

  // Function to toggle the FAQ open/close state
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="w-full py-12 paragraphFonts">
      <div className="max-w-6xl mx-auto px-12">
        {" "}
        {/* Increased width and padding */}
        <h2 className="text-3xl font-bold text-center mb-8 paragraphFonts">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray200">
              <button
                onClick={() => toggleFAQ(index)} // Toggle FAQ visibility on click
                className="w-full text-left py-4 px-6 font-semibold paragraphFonts text-gray800 hover:bg-gray100 
                rounded-lg transition duration-200 flex items-center justify-between"
              >
                <span>{faq.question}</span>
                <span className="ml-2">
                  {/* Conditional rendering of arrow */}
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray600 transition-transform transform rotate-180" /> // Show up arrow when FAQ is open
                  ) : (
                    <FaChevronDown className="text-gray600 transition-transform transform rotate-0" /> // Show down arrow when FAQ is closed
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-900 ease-in-out  ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {activeIndex === index && (
                  <p className="py-2 px-6 text-gray600 paragraphFonts">{faq.answer}</p> // Show answer when FAQ is open
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFAQ;
