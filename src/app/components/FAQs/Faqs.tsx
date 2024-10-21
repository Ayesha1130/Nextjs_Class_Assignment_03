"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface State  {
  question: string;
  answer: string;
};

const initialFaqs: State[] = [
  {
    question: "What types of travel packages do you offer",
    answer:
      "We offer a variety of travel packages, including adventure tours, cultural experiences, beach vacations, and family-friendly trips. Each package can be customized to fit your needs.",
  },
  {
    question: "How do I book a travel package",
    answer:
      "To book a travel package, please contact our travel agency directly at our office, or visit our website and select a package from our menu. We will then schedule your trip and provide you with all necessary information.",
  },
  {
    question: "What are the cancellation policies",
    answer:
      "We offer flexible cancellation policies. If you need to cancel a trip before it starts, please contact our travel agency within 24 hours of booking. If you need to cancel after the trip has started, please contact our travel agency within 48 hours of departure. Please note that cancellations after 48 hours of departure may result in additional charges.",
  },
  {
    question: "What are the terms and conditions for booking a travel package",
    answer:
      "Please review our terms and conditions before booking a travel package. These terms and conditions may change from time to time, so it's important to check our website for the most current information.",
  },
  {
    question: "Can I change my travel package after booking",
    answer:
      "Yes, you can change your travel package after booking. Please contact our travel agency within 24 hours of booking, or visit our website and select a new package from our menu. We will then schedule your new trip and provide you with all necessary information.",
  },
  {
    question: "How do I get a travel insurance package",
    answer:
      "To get a travel insurance package, please contact our travel agency directly at our office, or visit our website and select a package from our menu. We will then schedule your trip and provide you with all necessary information.",
  },
];

/* Function Component for FAQS */
const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  // Function to toggle the showAnswer state when a question is clicked.
  const toggleAnswer = (index: number) => {
    setShowAnswer(index === showAnswer ? null : index);
  };

  return (
    // Main container for FAQs content.
    <div className="max-w-3xl mx-auto my-10 p-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic animate-bounce mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {initialFaqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-4">
            <h3
            // Toggles visibility on click
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer text-lg font-semibold flex justify-between items-center"
            >
              {faq.question}
              {showAnswer === index ? <FaMinus /> : <FaPlus />} {/**Show Icons */}
            </h3>
            {showAnswer === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p> // Display answer
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
