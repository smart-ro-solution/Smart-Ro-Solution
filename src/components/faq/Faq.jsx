"use client";

import React, {
    useState,
} from "react";

import {
    Plus,
    Minus,
} from "lucide-react";

const faqData = [

    {
        question:
            "Do you provide same-day RO repair service?",

        answer:
            "Yes, we provide fast same-day RO repair and maintenance services across Gurugram and nearby areas.",
    },

    {
        question:
            "Which RO brands do you repair?",

        answer:
            "We repair all major RO brands including Kent, Aquaguard, Livpure, Pureit, AO Smith and many more.",
    },

    {
        question:
            "Do you provide RO AMC service?",

        answer:
            "Yes, we provide affordable AMC maintenance plans for residential and commercial RO systems.",
    },

    {
        question:
            "How much does RO service cost?",

        answer:
            "RO service charges depend on the issue and spare parts required. We always provide transparent pricing.",
    },

    {
        question:
            "Do you provide doorstep service?",

        answer:
            "Yes, our technicians visit your home or office for complete RO repair and installation support.",
    },

    {
        question:
            "Which areas do you serve?",

        answer:
            "We serve Manesar, New Gurgaon, Sector 79-95, IMT Manesar, Rampura, Hayatpur and nearby locations.",
    },
];

const Faq = () => {

    const [activeIndex, setActiveIndex] =
        useState(0);

    const toggleFaq = (index) => {

        if (activeIndex === index) {

            setActiveIndex(null);

        } else {

            setActiveIndex(index);
        }
    };

    return (

        <section className="w-full bg-white py-16 md:py-24 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* TOP */}

                <div className="text-center">

                    {/* TAG */}

                    <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                            FAQ

                        </p>

                    </div>

                    {/* TITLE */}

                    <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">

                        Frequently Asked
                        <br />

                        Questions

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-gray-500 max-w-[850px] mx-auto">

                        Find answers to common questions
                        about our RO repair, installation
                        and maintenance services.

                    </p>

                </div>

                {/* FAQ GRID */}

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {faqData.map((item, index) => {

                        const isOpen =
                            activeIndex === index;

                        return (

                            <div
                                key={index}
                                className={`rounded-[28px] border transition-all duration-300 overflow-hidden self-start

                ${isOpen
                                        ? "border-[#0F52BA] shadow-xl shadow-blue-50 bg-[#F7FAFF]"
                                        : "border-[#E8EEF9] bg-white"
                                    }`}
                            >

                                {/* HEADER */}

                                <button
                                    onClick={() =>
                                        toggleFaq(index)
                                    }
                                    className="w-full px-5 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left"
                                >

                                    <h3 className="text-[17px] md:text-[21px] leading-[1.6] font-bold text-[#0A1B4D]">

                                        {item.question}

                                    </h3>

                                    {/* ICON */}

                                    <div className={`w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0

                    ${isOpen
                                            ? "bg-[#0F52BA]"
                                            : "bg-[#EEF4FF]"
                                        }`}
                                    >

                                        {isOpen ? (

                                            <Minus
                                                size={18}
                                                className="text-white"
                                            />

                                        ) : (

                                            <Plus
                                                size={18}
                                                className="text-[#0F52BA]"
                                            />

                                        )}

                                    </div>

                                </button>

                                {/* ANSWER */}

                                <div className={`grid transition-all duration-500 ease-in-out

                    ${isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                    }`}
                                >

                                    <div className="overflow-hidden">

                                        <p className="px-5 md:px-8 pb-6 md:pb-8 text-[15px] md:text-[17px] leading-[1.9] text-gray-600">

                                            {item.answer}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>

    );
};

export default Faq;
