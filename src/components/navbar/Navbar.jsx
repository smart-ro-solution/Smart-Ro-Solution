"use client";

import React, { useState } from "react";

import {
    Phone,
    MapPin,
    Clock3,
    Menu,
    X,
} from "lucide-react";

import {
    handleBookNow,
    handleCall,
} from "@/utill/contactActions";

import useScrollToSection from "@/hook/useScrollToSection";

const navLinks = [
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
        label: "Our Work",
        id: "gallery",
    },
    {
        label: "Service Areas",
        id: "service-areas",
    },
    {
        label: "Contact Us",
        id: "contact",
    },
];

const Navbar = () => {

    const [mobileMenu, setMobileMenu] =
        useState(false);

    const scrollToSection =
        useScrollToSection();

    return (

        <header className="w-full">

            {/* ========================= */}
            {/* TOP HEADER */}
            {/* ========================= */}

            <div className="w-full bg-[#021B4E] text-white">

                <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8 h-[42px] flex items-center justify-between">

                    {/* LEFT */}

                    <div className="flex items-center gap-2 text-[11px] sm:text-[13px] font-medium truncate">

                        <MapPin
                            size={14}
                            className="flex-shrink-0"
                        />

                        <span className="truncate">
                            Serving All Over Gurugram
                        </span>

                    </div>

                    {/* CENTER */}

                    <div className="hidden md:flex items-center gap-2 text-[13px] font-medium">

                        <Clock3 size={15} />

                        <span>
                            Mon - Sun: 8:00 AM - 8:00 PM
                        </span>

                    </div>

                    {/* RIGHT */}

                    <div className="hidden lg:flex items-center gap-3">

                        <span className="text-[13px]">
                            Follow Us:
                        </span>

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                    </div>

                </div>

            </div>

            {/* ========================= */}
            {/* MAIN NAVBAR */}
            {/* ========================= */}

            <div className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">

                <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8 h-[76px] md:h-[90px] flex items-center justify-between gap-3">

                    {/* ========================= */}
                    {/* LOGO */}
                    {/* ========================= */}

                    <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 min-w-0">

                        {/* ICON */}

                        <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full bg-[#0F52BA] flex items-center justify-center flex-shrink-0">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                                alt="logo"
                                className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] object-contain"
                            />

                        </div>

                        {/* TEXT */}

                        <div className="min-w-0">

                            <h2 className="text-[18px] sm:text-[22px] md:text-[28px] leading-[1.1] font-extrabold text-[#0A1B4D] whitespace-nowrap">

                                SMART ARO
                                <span className="text-[#0F52BA]">

                                    {" "}SOLUTION

                                </span>

                            </h2>

                        </div>

                    </div>

                    {/* ========================= */}
                    {/* DESKTOP MENU */}
                    {/* ========================= */}

                    <nav className="hidden xl:flex items-center gap-6 2xl:gap-10">

                        {navLinks.map((item, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    scrollToSection(item.id)
                                }
                                className={`text-[14px] 2xl:text-[15px] font-semibold transition-all duration-300 hover:text-[#0F52BA]

                                ${index === 0
                                        ? "text-[#0F52BA]"
                                        : "text-[#111827]"
                                    }`}
                            >

                                {item.label}

                            </button>

                        ))}

                    </nav>

                    {/* ========================= */}
                    {/* CALL BUTTON */}
                    {/* ========================= */}

                    <div className="hidden 2xl:flex">

                        <button
                            onClick={() => {

                                handleBookNow(
                                    "Hello, I want to book RO service."
                                );

                            }}
                            className="cursor-pointer h-[58px] px-6 rounded-full border-2 border-[#0F52BA] flex items-center gap-4 hover:bg-[#0F52BA] transition-all duration-300 group"
                        >

                            {/* ICON */}

                            <div className="w-[42px] h-[42px] rounded-full bg-[#EEF4FF] flex items-center justify-center group-hover:bg-white">

                                <Phone
                                    size={18}
                                    className="text-[#0F52BA]"
                                />

                            </div>

                            {/* TEXT */}

                            <div className="text-left">

                                <h3 className="text-[18px] leading-none font-bold text-[#0A1B4D] group-hover:text-white">

                                    8307318570

                                </h3>

                                <p className="text-[13px] font-medium text-gray-500 group-hover:text-white">

                                    Call / WhatsApp

                                </p>

                            </div>

                        </button>

                    </div>

                    {/* ========================= */}
                    {/* MOBILE MENU BUTTON */}
                    {/* ========================= */}

                    <button
                        onClick={() =>
                            setMobileMenu(!mobileMenu)
                        }
                        className="xl:hidden flex-shrink-0"
                    >

                        {mobileMenu
                            ? <X size={28} />
                            : <Menu size={28} />}

                    </button>

                </div>

                {/* ========================= */}
                {/* MOBILE DROPDOWN */}
                {/* ========================= */}

                <div
                    className={`
        xl:hidden
        overflow-hidden
        transition-all
        duration-500
        ease-in-out
        bg-white
        border-t
        border-gray-200
        shadow-lg

        ${mobileMenu
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
    `}
                >

                    <div className="px-5 py-5 flex flex-col gap-5">

                        {/* LINKS */}

                        {navLinks.map((item, index) => (

                            <button
                                key={index}
                                onClick={() => {

                                    scrollToSection(item.id);

                                    setMobileMenu(false);

                                }}
                                className="
                    text-left
                    text-[16px]
                    font-semibold
                    text-[#111827]
                    hover:text-[#0F52BA]
                    transition-all
                    duration-300
                "
                            >

                                {item.label}

                            </button>

                        ))}

                        {/* CALL BUTTON */}

                        <button
                            className="
                mt-2
                h-[54px]
                rounded-full
                bg-[#0F52BA]
                hover:bg-[#083B8A]
                transition-all
                duration-300
                text-white
                font-semibold
                cursor-pointer
            "
                            onClick={handleCall}
                        >

                            Call Now

                        </button>

                    </div>

                </div>

            </div>

        </header>

    );
};

export default Navbar;
