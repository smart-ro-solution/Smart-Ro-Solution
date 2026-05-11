"use client";

import React from "react";

import {
    MapPin,
} from "lucide-react";

import TechnicianFront from './images/front-img.png'

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

        <section className="w-full bg-[#F5FAFF] py-16 md:py-24 overflow-hidden">

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

                <div className="mt-16 relative overflow-hidden bg-[#031B4E] rounded-[40px] p-10 md:p-16">

                    {/* BG GLOW */}

                    <div className="absolute right-[-100px] top-[-100px] w-[400px] h-[400px] rounded-full bg-[#0F52BA]/30 blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* LEFT */}

                        <div className="max-w-[700px]">

                            {/* TAG */}

                            <div className="inline-flex h-[36px] px-5 rounded-full bg-white/10 items-center justify-center border border-white/10">

                                <p className="text-white text-[13px] font-bold uppercase tracking-wide">

                                    Need RO Service?

                                </p>

                            </div>

                            {/* TITLE */}

                            <h2 className="mt-6 text-[34px] md:text-[52px] leading-[1.15] font-extrabold text-white">

                                Need Fast RO Service?
                                <br />

                                Contact Us Today

                            </h2>

                            {/* DESCRIPTION */}

                            <p className="mt-6 text-[18px] leading-[1.9] text-[#C9D6EE]">

                                Book your RO repair,
                                installation or maintenance
                                service now and get quick
                                doorstep support from our
                                expert technicians across
                                Gurugram.

                            </p>

                            {/* BUTTONS */}

                            <div className="mt-8 flex flex-col sm:flex-row gap-5">

                                {/* CALL */}

                                <a
                                    href="tel:+918307318570"
                                    className="h-[58px] px-8 rounded-2xl bg-[#0F52BA] hover:bg-[#2563EB] transition-all duration-300 text-white font-bold text-[17px] flex items-center justify-center shadow-xl shadow-blue-900"
                                >

                                    Call Now

                                </a>

                                {/* WHATSAPP */}

                                <a
                                    href="https://wa.me/918307318570"
                                    target="_blank"
                                    className="h-[58px] px-8 rounded-2xl bg-white hover:bg-gray-100 transition-all duration-300 text-[#0A1B4D] font-bold text-[17px] flex items-center justify-center"
                                >

                                    WhatsApp Us

                                </a>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="relative flex items-end justify-center">

                            {/* GLOW */}

                            <div className="absolute bottom-0 w-[320px] h-[320px] rounded-full bg-[#0F52BA]/40 blur-3xl" />

                            {/* IMAGE */}

                            <img
                                src={TechnicianFront.src}
                                alt="RO Technician"
                                className="relative z-10 w-full max-w-[380px] object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default ServiceAreas;
