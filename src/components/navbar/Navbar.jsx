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
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

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

        <>
            {/* BODY SPACING */}
            <div className="h-[118px] md:h-[132px]" />

            <header
                className="
                    fixed
                    top-0
                    left-0
                    right-0
                    z-[9999]
                    w-full
                "
            >

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
                                Mon - Sun: 9:00 AM - 9:00 PM
                            </span>

                        </div>

                        {/* RIGHT */}

                        <div className="hidden lg:flex items-center gap-3">

                            <span className="text-[13px]">
                                Follow Us:
                            </span>

                            {/* INSTAGRAM */}

                            <a
                                href="https://www.instagram.com/reel/DUcvF5Kks7x/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-white
                                "
                            >

                                <FaInstagram
                                    size={16}
                                    className="text-[#E1306C]"
                                />

                            </a>

                            {/* FACEBOOK */}

                            <a
                                href="https://www.facebook.com/share/1E88nZnukC/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-white
                                "
                            >

                                <FaFacebookF
                                    size={15}
                                    className="text-[#1877F2]"
                                />

                            </a>

                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/918307318570"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-white
                                "
                            >

                                <FaWhatsapp
                                    size={16}
                                    className="text-[#25D366]"
                                />

                            </a>

                            {/* YOUTUBE */}

                            <a
                                href="https://youtube.com/@joniverma6867?si=RbQk01RC-EaafTCr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    hover:bg-white
                                "
                            >

                                <FaYoutube
                                    size={16}
                                    className="text-[#FF0000]"
                                />

                            </a>

                        </div>

                    </div>

                </div>

                {/* ========================= */}
                {/* MAIN NAVBAR */}
                {/* ========================= */}

                <div
                    className="
                        w-full
                        bg-white/90
                        backdrop-blur-xl
                        border-b
                        border-gray-100
                        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    "
                >

                    <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8 h-[76px] md:h-[90px] flex items-center justify-between gap-3">

                        {/* ========================= */}
                        {/* LOGO */}
                        {/* ========================= */}

                        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 min-w-0">

                            {/* LOGO ICON */}

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    md:w-[54px]
                                    md:h-[54px]
                                    rounded-full
                                    bg-[#0F52BA]
                                    flex
                                    items-center
                                    justify-center
                                    shadow-lg
                                    flex-shrink-0
                                "
                            >

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                                    alt="logo"
                                    className="
                                        w-[22px]
                                        h-[22px]
                                        md:w-[28px]
                                        md:h-[28px]
                                        object-contain
                                    "
                                />

                            </div>

                            {/* LOGO TEXT */}

                            <div className="min-w-0">

                                <h2
                                    className="
                                        text-[18px]
                                        sm:text-[22px]
                                        md:text-[30px]
                                        leading-[1.1]
                                        font-extrabold
                                        text-[#0A1B4D]
                                        whitespace-nowrap
                                    "
                                >

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
                                    className={`
                                        relative
                                        text-[14px]
                                        2xl:text-[15px]
                                        font-semibold
                                        transition-all
                                        duration-300
                                        hover:text-[#0F52BA]

                                        ${index === 0
                                            ? "text-[#0F52BA]"
                                            : "text-[#111827]"
                                        }

                                        after:absolute
                                        after:left-0
                                        after:-bottom-2
                                        after:h-[2px]
                                        after:w-0
                                        after:bg-[#0F52BA]
                                        after:transition-all
                                        after:duration-300

                                        hover:after:w-full
                                    `}
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
                                className="
                                    cursor-pointer
                                    h-[56px]
                                    px-6
                                    rounded-full
                                    bg-[#0F52BA]
                                    hover:bg-[#083B8A]
                                    transition-all
                                    duration-300
                                    flex
                                    items-center
                                    gap-4
                                    shadow-lg
                                    hover:scale-[1.02]
                                "
                            >

                                {/* ICON */}

                                <div
                                    className="
                                        w-[42px]
                                        h-[42px]
                                        rounded-full
                                        bg-white
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Phone
                                        size={18}
                                        className="text-[#0F52BA]"
                                    />

                                </div>

                                {/* TEXT */}

                                <div className="text-left">

                                    <h3
                                        className="
                                            text-[18px]
                                            leading-none
                                            font-bold
                                            text-white
                                        "
                                    >

                                        8307318570

                                    </h3>

                                    <p
                                        className="
                                            text-[13px]
                                            font-medium
                                            text-white/80
                                        "
                                    >

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
                            className="
                                xl:hidden
                                w-11
                                h-11
                                rounded-full
                                bg-[#F3F7FF]
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                hover:bg-[#E5EEFF]
                                flex-shrink-0
                            "
                        >

                            {mobileMenu
                                ? <X size={26} />
                                : <Menu size={26} />}

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
                            bg-white/95
                            backdrop-blur-xl
                            border-t
                            border-gray-200

                            ${mobileMenu
                                ? "max-h-[600px] opacity-100"
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
                                    h-[56px]
                                    rounded-full
                                    bg-[#0F52BA]
                                    hover:bg-[#083B8A]
                                    transition-all
                                    duration-300
                                    text-white
                                    font-semibold
                                    cursor-pointer
                                    shadow-lg
                                "
                                onClick={handleCall}
                            >

                                Call Now

                            </button>

                        </div>

                    </div>

                </div>

            </header>
        </>

    );
};

export default Navbar;
