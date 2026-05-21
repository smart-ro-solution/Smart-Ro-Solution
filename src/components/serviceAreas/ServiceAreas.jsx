"use client";

import React from "react";

import { MapPin, Phone } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import TechnicianFront from "./images/front-img.png";
import { handleCall, handleWhatsApp } from "@/utill/contactActions";

const areas = [
    "All Gurugram",
    "Manesar",
    "IMT Manesar",
    "Sector 58",
    "Sector 82",
    "Sector 83",
    "Sector 84",
    "Sector 85",
    "Sector 86",
    "Sector 90",
    "Sector 91",
    "Sector 92",
    "Sector 93",
    "Sector 95A",
    "Rampura Sector 78",
    "Kherki Daula",
    "Hayatpur",
    "New Gurgaon",
    "Sikandarpur Badha",
    "Wazirpur",
    "Naurangpur",
    "Naharpur Kasan",
    "Garhi Harsaru",
    "Shikohpur",
    "Bhangrola",
    "Bas Kusla",
    "Kadarpur",
    "Dwarka Expressway",
    "And Many More...",
];

const ServiceAreas = () => {
    return (
        <section className="w-full bg-[#F5FAFF] py-16 md:py-24 overflow-hidden " id="service-areas">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* ===================== */}
                {/* TOP */}
                {/* ===================== */}

                <div className="text-center">

                    {/* TAG */}

                    <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">
                            Service Areas
                        </p>

                    </div>

                    {/* TITLE */}

                    <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">
                        Areas We Serve
                        <br />
                        In Gurugram
                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-gray-500 max-w-[850px] mx-auto">
                        We provide fast and reliable RO
                        repair, installation and maintenance
                        services across Gurugram and nearby
                        locations with same-day doorstep
                        support.
                    </p>

                </div>

                {/* ===================== */}
                {/* AREA CARDS */}
                {/* ===================== */}

                <div className="mt-14 flex flex-wrap justify-center gap-5">

                    {areas.map((item, index) => (

                        <div
                            key={index}
                            className="group h-[64px] px-7 rounded-2xl bg-white border border-[#E4ECFA] shadow-sm hover:shadow-xl hover:border-[#0F52BA] transition-all duration-300 flex items-center gap-4 cursor-pointer"
                        >

                            {/* ICON */}

                            <div className="w-[42px] h-[42px] rounded-full bg-[#EEF4FF] group-hover:bg-[#0F52BA] transition-all duration-300 flex items-center justify-center">

                                <MapPin
                                    size={20}
                                    className="text-[#0F52BA] group-hover:text-white transition-all duration-300"
                                />

                            </div>

                            {/* TEXT */}

                            <p className="text-[17px] font-semibold text-[#0A1B4D]">
                                {item}
                            </p>

                        </div>

                    ))}

                </div>

                {/* ===================== */}
                {/* CTA BOX */}
                {/* ===================== */}

                <div className="mt-20 relative overflow-hidden rounded-[38px] bg-gradient-to-r from-[#F8FBFF] via-[#EEF5FF] to-[#E7F1FF] border border-[#DCE8FF] shadow-[0_20px_80px_rgba(15,82,186,0.08)]">

                    {/* BACKGROUND GLOW */}

                    <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#0F52BA]/10 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-10 lg:px-16 py-10 lg:py-0 min-h-[520px]">

                        {/* MOBILE IMAGE FIRST */}

                        <div className="relative flex items-end justify-center order-1 lg:order-2 min-h-[320px] lg:min-h-[520px]">

                            {/* BLUE GLOW */}

                            <div className="absolute bottom-0 w-[380px] h-[380px] rounded-full bg-[#0F52BA]/10 blur-3xl" />

                            {/* WATER SPLASH EFFECT */}

                            <div className="absolute bottom-0 w-[110%] h-[180px] bg-gradient-to-t from-[#0F52BA]/10 to-transparent blur-2xl" />

                            {/* TECHNICIAN IMAGE */}

                            <img
                                src={TechnicianFront.src}
                                alt="RO Technician"
                                className="
                                    relative
                                    z-10
                                    w-160%
                                    max-w-[520px]
                                    lg:max-w-[660px]
                                    object-contain
                                    drop-shadow-[0_25px_60px_rgba(15,82,186,0.18)]
                                "
                            />

                        </div>

                        {/* TEXT CONTENT */}

                        <div className="relative z-20 order-2 lg:order-1 text-center lg:text-left py-6 lg:py-0">

                            {/* TAG */}

                            <div className="inline-flex h-[38px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                                <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">
                                    Need RO Service?
                                </p>

                            </div>

                            {/* TITLE */}

                            <h2 className="mt-6 text-[38px] md:text-[54px] leading-[1.1] font-extrabold text-[#0A1B4D]">

                                Book Your Service Now!

                            </h2>

                            {/* DESCRIPTION */}

                            <p className="mt-6 text-[18px] md:text-[21px] leading-[1.8] text-gray-600 max-w-[650px]">

                                Get quick and reliable RO
                                repair, installation and AMC
                                service at your doorstep with
                                trained expert technicians
                                across Gurugram.

                            </p>

                            {/* BUTTONS */}

                            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-5 cursor-pointer">

                                {/* CALL BUTTON */}

                                <button
                                    onClick={() => {
                                        handleCall()
                                    }}

                                    className="
                                        h-[60px]
                                        px-8
                                        rounded-2xl
                                        bg-[#0F52BA]
                                        hover:bg-[#0A43A0]
                                        transition-all
                                        duration-300
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        shadow-xl
                                        shadow-blue-200
                                        cursor-pointer
                                    "
                                >

                                    <Phone
                                        size={20}
                                        className="text-white"
                                    />

                                    <span className="text-white text-[16px] font-bold">
                                        Call Now: 8307318570
                                    </span>

                                </button>

                                {/* WHATSAPP BUTTON */}

                                <button

                                    onClick={
                                        () => {
                                            handleWhatsApp()
                                        }
                                    }
                                    className="
                                        h-[60px]
                                        px-8
                                        rounded-2xl
                                        border-2
                                        border-[#D7E3FF]
                                        bg-white
                                        hover:border-[#25D366]
                                        transition-all
                                        duration-300
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        shadow-lg
                                          cursor-pointer
                                    "
                                >

                                    <FaWhatsapp
                                        size={22}
                                        className="text-[#25D366]"
                                    />

                                    <span className="text-[#111827] text-[16px] font-semibold">
                                        Chat on WhatsApp
                                    </span>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServiceAreas;
