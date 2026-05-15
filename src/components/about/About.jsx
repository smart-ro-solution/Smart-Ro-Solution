"use client";

import React from "react";

import {
    CheckCircle2,
} from "lucide-react";

import workingImg from './images/working.png'
import useScrollToSection from "@/hook/useScrollToSection";
const features = [

    "Trained & Verified Technicians",

    "Transparent Pricing",

    "Genuine Spare Parts",

    "Customer Satisfaction",

    "On-time Service",

    "Doorstep Service",
];

const About = () => {


    const scrollToSection =
        useScrollToSection();


    return (

        <section className="w-full bg-white py-16 md:py-24 overflow-hidden" id="about">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        {/* TAG */}

                        <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                            <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                                About Us

                            </p>

                        </div>

                        {/* TITLE */}

                        <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">

                            Your Trusted RO
                            <br />

                            Service Partner
                            <br />

                            In Gurugram

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-gray-500 max-w-[650px]">

                            Smart RO Solution is a leading RO
                            service company in Gurugram
                            providing professional repair,
                            installation, AMC and water
                            purifier maintenance services for
                            homes, offices and commercial
                            locations.

                        </p>

                        {/* FEATURES */}

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >

                                    <div className="w-[34px] h-[34px] rounded-full bg-[#EAF2FF] flex items-center justify-center flex-shrink-0">

                                        <CheckCircle2
                                            size={18}
                                            className="text-[#0F52BA]"
                                        />

                                    </div>

                                    <p className="text-[17px] font-semibold text-[#0A1B4D]">

                                        {item}

                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* BUTTON */}

                        <button className="mt-10 h-[58px] px-8 rounded-2xl bg-[#0F52BA] hover:bg-[#083B8A] transition-all duration-300 text-white font-bold text-[17px] shadow-xl shadow-blue-100 cursor-pointer" onClick={() => {
                            scrollToSection('gallery')
                        }}>

                            Know More About Us

                        </button>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="relative flex items-center justify-center">

                        {/* MAIN IMAGE */}

                        <div className="relative rounded-[36px] overflow-hidden shadow-2xl">

                            <img
                                src={workingImg.src}
                                alt="RO Technician"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        {/* EXPERIENCE CARD */}

                        {/* <div className="absolute bottom-6 right-6 md:right-[-20px] w-[170px] h-[170px] rounded-[30px] bg-white shadow-2xl flex flex-col items-center justify-center">

                            <h2 className="text-[52px] leading-none font-extrabold text-[#0F52BA]">

                                8+

                            </h2>

                            <p className="mt-3 text-center text-[18px] leading-[1.5] font-semibold text-[#0A1B4D]">

                                Years of
                                <br />

                                Trusted Service

                            </p>

                        </div> */}

                    </div>

                </div>

            </div>

        </section>

    );
};

export default About;
