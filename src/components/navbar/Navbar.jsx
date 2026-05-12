"use client";

import React, { useState } from "react";

import {
    Phone,
    MapPin,
    Clock3,
    Menu,
    X,
} from "lucide-react";
import { handleBookNow, handleCall } from "@/utill/contactActions";

const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Our Work",
    "Service Areas",
    "Contact Us",
];

const Navbar = () => {

    const [mobileMenu, setMobileMenu] =
        useState(false);

    return (
        <header className="w-full">

            {/* TOP HEADER */}

            <div className="w-full bg-[#021B4E] text-white">

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-[42px] flex items-center justify-between">

                    {/* LEFT */}

                    <div className="flex items-center gap-2 text-[13px] font-medium">

                        <MapPin size={15} />

                        <span>
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

                    <div className="hidden md:flex items-center gap-3">

                        <span className="text-[13px]">
                            Follow Us:
                        </span>

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                        <div className="w-5 h-5 rounded-full bg-white/20" />

                    </div>

                </div>

            </div>

            {/* MAIN NAVBAR */}

            <div className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-[90px] flex items-center justify-between">

                    {/* LOGO */}

                    <div className="flex items-center gap-3">

                        <div className="w-[52px] h-[52px] rounded-full bg-[#0F52BA] flex items-center justify-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                                alt="logo"
                                className="w-[28px] h-[28px] object-contain"
                            />

                        </div>

                        <div>

                            <h2 className="text-[28px] leading-none font-extrabold text-[#0A1B4D]">

                                SMART RO

                            </h2>

                            <p className="text-[16px] font-semibold text-[#0F52BA]">

                                SOLUTION

                            </p>

                        </div>

                    </div>

                    {/* DESKTOP MENU */}

                    <nav className="hidden lg:flex items-center gap-10">

                        {navLinks.map((item, index) => (

                            <button
                                key={index}
                                className={`text-[15px] font-semibold transition-all duration-300 hover:text-[#0F52BA]

                ${index === 0
                                        ? "text-[#0F52BA]"
                                        : "text-[#111827]"
                                    }`}
                            >

                                {item}

                            </button>

                        ))}

                    </nav>

                    {/* CALL BUTTON */}

                    <div className="hidden md:flex pointer-coarse">

                        <button onClick={() => {
                            handleBookNow("Hello, I want to book RO service.")



                        }} className="cursor-pointer h-[58px] px-6 rounded-full border-2 border-[#0F52BA] flex items-center gap-4 hover:bg-[#0F52BA] transition-all duration-300 group ">

                            <div className="w-[42px] h-[42px] rounded-full bg-[#EEF4FF] flex items-center justify-center group-hover:bg-white">

                                <Phone
                                    size={18}
                                    className="text-[#0F52BA]"
                                />

                            </div>

                            <div className="text-left">

                                <h3 className="text-[20px] leading-none font-bold text-[#0A1B4D] group-hover:text-white">

                                    8307318570

                                </h3>

                                <p className="text-[14px] font-medium text-gray-500 group-hover:text-white">

                                    Call / WhatsApp

                                </p>

                            </div>

                        </button>

                    </div>

                    {/* MOBILE MENU */}

                    <button
                        onClick={() =>
                            setMobileMenu(!mobileMenu)
                        }
                        className="lg:hidden"
                    >

                        {mobileMenu
                            ? <X size={30} />
                            : <Menu size={30} />}

                    </button>

                </div>

                {/* MOBILE DROPDOWN */}

                {mobileMenu && (

                    <div className="lg:hidden w-full bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-5">

                        {navLinks.map((item, index) => (

                            <button
                                key={index}
                                className="text-left text-[16px] font-semibold text-[#111827]"
                            >

                                {item}

                            </button>

                        ))}

                        <button className="mt-2 h-[52px] rounded-full bg-[#0F52BA] text-white font-semibold cursor-pointer " onClick={handleCall} >

                            Call Now

                        </button>

                    </div>

                )}

            </div>

        </header>
    );
};

export default Navbar;
