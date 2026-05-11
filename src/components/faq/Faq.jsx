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

            <div className="max-w-[1200px] mx-auto px-4 md:px-8">

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

                {/* FAQ LIST */}

                <div className="mt-16 flex flex-col gap-5">

                    {faqData.map((item, index) => {

                        const isOpen =
                            activeIndex === index;

                        return (

                            <div
                                key={index}
                                className={`rounded-[28px] border transition-all duration-300 overflow-hidden

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
                                    className="w-full px-7 md:px-10 py-7 flex items-center justify-between gap-5 text-left"
                                >

                                    <h3 className="text-[20px] md:text-[24px] leading-[1.5] font-bold text-[#0A1B4D]">

                                        {item.question}

                                    </h3>

                                    <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0

                    ${isOpen
                                            ? "bg-[#0F52BA]"
                                            : "bg-[#EEF4FF]"
                                        }`}
                                    >

                                        {isOpen ? (

                                            <Minus
                                                size={20}
                                                className="text-white"
                                            />

                                        ) : (

                                            <Plus
                                                size={20}
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

                                        <p className="px-7 md:px-10 pb-8 text-[17px] md:text-[18px] leading-[1.9] text-gray-600">

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
