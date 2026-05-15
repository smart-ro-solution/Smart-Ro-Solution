"use client";

import React from "react";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowUp,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

import useScrollToSection from "@/hook/useScrollToSection";

const Footer = () => {

    // =========================
    // CUSTOM SCROLL HOOK
    // =========================

    const scrollToSection =
        useScrollToSection();

    // =========================
    // SCROLL TO TOP
    // =========================

    const scrollToTop = () => {

        scrollToSection('home')

    };

    // =========================
    // QUICK LINKS
    // =========================

    const quickLinks = [
        {
            label: "Home",
            id: "home",
        },
        {
            label: "About Us",
            id: "about",
        },
        {
            label: "Services",
            id: "services",
        },
        {
            label: "Testimonials",
            id: "testimonials",
        },
        {
            label: "Gallery",
            id: "gallery",
        },
        {
            label: "FAQ",
            id: "faq",
        },
        {
            label: "Contact",
            id: "contact",
        },
    ];

    return (

        <footer className="w-full bg-[#02153D] overflow-hidden">

            {/* ========================= */}
            {/* MAIN FOOTER */}
            {/* ========================= */}

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* ABOUT */}

                    <div>

                        <h2 className="text-[36px] font-extrabold text-white">

                            Smart RO
                            <span className="text-[#5EA8FF]">

                                {" "}Solution

                            </span>

                        </h2>

                        <p className="mt-6 text-[17px] leading-[1.9] text-[#C8D3EA]">

                            Professional RO repair,
                            installation and AMC service
                            provider in Gurugram & Manesar
                            with fast doorstep support.

                        </p>

                        {/* SOCIAL ICONS */}

                        <div className="mt-8 flex items-center gap-4">

                            {/* FACEBOOK */}

                            <a
                                href="#"
                                className="w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-[#0F52BA] transition-all duration-300 flex items-center justify-center"
                            >

                                <FaFacebookF
                                    size={18}
                                    className="text-white"
                                />

                            </a>

                            {/* INSTAGRAM */}

                            <a
                                href="#"
                                className="w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-[#E1306C] transition-all duration-300 flex items-center justify-center"
                            >

                                <FaInstagram
                                    size={18}
                                    className="text-white"
                                />

                            </a>

                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/918307318570"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-[#25D366] transition-all duration-300 flex items-center justify-center"
                            >

                                <MessageCircle
                                    size={20}
                                    className="text-white"
                                />

                            </a>

                        </div>

                    </div>

                    {/* QUICK LINKS */}

                    <div>

                        <h3 className="text-[24px] font-bold text-white">

                            Quick Links

                        </h3>

                        <div className="mt-7 flex flex-col gap-4">

                            {quickLinks.map((item, index) => (

                                <button
                                    key={index}
                                    onClick={() =>
                                        scrollToSection(item.id)


                                    }
                                    className="text-left text-[17px] text-[#C8D3EA] hover:text-white transition-all duration-300 cursor-pointer"
                                >

                                    {item.label}

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* SERVICES */}

                    <div>

                        <h3 className="text-[24px] font-bold text-white">

                            Our Services

                        </h3>

                        <div className="mt-7 flex flex-col gap-4">

                            {[
                                "RO Repair",
                                "RO Installation",
                                "AMC Service",
                                "Water Purifier Service",
                                "RO Maintenance",
                                "Filter Replacement",
                                "RO Cleaning",
                            ].map((item, index) => (

                                <button
                                    key={index}
                                    className="text-left text-[17px] text-[#C8D3EA] hover:text-white transition-all duration-300"
                                >

                                    {item}

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* CONTACT INFO */}

                    <div>

                        <h3 className="text-[24px] font-bold text-white">

                            Contact Info

                        </h3>

                        <div className="mt-7 flex flex-col gap-6">

                            {/* PHONE */}

                            <div className="flex items-start gap-4">

                                <div className="w-[52px] h-[52px] rounded-2xl bg-[#0F52BA] flex items-center justify-center flex-shrink-0">

                                    <Phone
                                        size={22}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#9EB1D4]">

                                        Phone Number

                                    </p>

                                    <h4 className="mt-1 text-[18px] font-semibold text-white">

                                        +91 8307318570

                                    </h4>

                                </div>

                            </div>

                            {/* EMAIL */}

                            <div className="flex items-start gap-4">

                                <div className="w-[52px] h-[52px] rounded-2xl bg-[#0F52BA] flex items-center justify-center flex-shrink-0">

                                    <Mail
                                        size={22}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#9EB1D4]">

                                        Email Address

                                    </p>

                                    <h4 className="mt-1 text-[18px] font-semibold text-white break-all">

                                        smartrosolution@gmail.com

                                    </h4>

                                </div>

                            </div>

                            {/* LOCATION */}

                            <div className="flex items-start gap-4">

                                <div className="w-[52px] h-[52px] rounded-2xl bg-[#0F52BA] flex items-center justify-center flex-shrink-0">

                                    <MapPin
                                        size={22}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#9EB1D4]">

                                        Service Areas

                                    </p>

                                    <h4 className="mt-1 text-[18px] font-semibold text-white">

                                        Gurugram & Manesar

                                    </h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ========================= */}
            {/* BOTTOM BAR */}
            {/* ========================= */}

            <div className="border-t border-white/10">

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* COPYRIGHT */}

                    <p className="text-[16px] text-[#AFC0E0] text-center">

                        © 2026 Smart RO Solution Gurugram.
                        All Rights Reserved.

                    </p>

                    {/* DEVELOPER */}

                    <p className="text-[16px] text-[#AFC0E0] text-center">

                        Designed & Developed By
                        <span className="text-white font-semibold">

                            {" "}Amit

                        </span>

                    </p>

                    {/* SCROLL TOP */}

                    <button
                        onClick={scrollToTop}
                        className="w-[54px] h-[54px] rounded-full bg-[#0F52BA] hover:bg-[#2563EB] transition-all duration-300 flex items-center justify-center shadow-xl shadow-blue-900"
                    >

                        <ArrowUp
                            size={22}
                            className="text-white"
                        />

                    </button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
