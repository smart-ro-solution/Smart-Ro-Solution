"use client";

import React from "react";

import Image from "next/image";

import { handleBookNow } from "@/utill/contactActions";

import Leckage from "./images/Leckage.png";
import RoRepair from "./images/Ro-Repair.png";
import RoServices from "./images/Ro-Services.png";

import Install from "./images/Ro-Install.png";
import Amc from "./images/Amc-Mantance.png";
import Filter from "./images/Filter-Resplacement.png";

const services = [

    {
        image: RoRepair,
        title: "RO Repair",
        description:
            "All types of RO repair services for all major brands.",
    },

    {
        image: RoServices,
        title: "RO Service",
        description:
            "Complete RO servicing to keep your water 100% pure.",
    },

    {
        image: Install,
        title: "RO Installation",
        description:
            "Professional installation of new RO systems.",
    },

    {
        image: Amc,
        title: "AMC Maintenance",
        description:
            "Regular maintenance ensures long life of your RO.",
    },

    {
        image: Filter,
        title: "Filter Replacement",
        description:
            "Filter, membrane and candle replacement service.",
    },

    {
        image: Leckage,
        title: "Leakage Repair",
        description:
            "Quick RO water leakage and pipe fixing solutions.",
    },

];

const Services = () => {

    return (

        <section
            id="services"
            className="
                w-full
                bg-white
                py-20
                md:py-28
                overflow-hidden
            "
        >

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* ===================== */}
                {/* TOP CONTENT */}
                {/* ===================== */}

                <div className="text-center">

                    {/* TAG */}

                    <div className="inline-flex h-[38px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-[1px]">

                            Our Services

                        </p>

                    </div>

                    {/* TITLE */}

                    <h2
                        className="
                            mt-4
                            text-[36px]
                            md:text-[56px]
                            font-extrabold
                            text-[#0A1B4D]
                            leading-[1.15]
                        "
                    >

                        Complete RO Solutions

                    </h2>

                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-6
                            text-[17px]
                            md:text-[20px]
                            text-gray-500
                            max-w-[900px]
                            mx-auto
                            leading-[1.9]
                        "
                    >

                        Professional RO repair,
                        installation, AMC maintenance,
                        filter replacement and water
                        purifier services for homes,
                        offices and commercial spaces
                        across Gurugram.

                    </p>

                </div>

                {/* ===================== */}
                {/* SERVICES GRID */}
                {/* ===================== */}

                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {services.map((item, index) => (

                        <div
                            key={index}
                            className="
                                overflow-hidden
                                bg-white
                                border
                                border-[#E8EEF9]
                                rounded-[30px]
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all
                                duration-500
                                group
                            "
                        >

                            {/* ===================== */}
                            {/* IMAGE */}
                            {/* ===================== */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    h-[300px]
                                    md:h-[290px]
                                    rounded-t-[30px]
                                "
                            >

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    priority
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                        group-hover:scale-110
                                        transition-all
                                        duration-700
                                    "
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            </div>

                            {/* ===================== */}
                            {/* CONTENT */}
                            {/* ===================== */}

                            <div className="p-5">

                                {/* TITLE */}

                                <h3
                                    className="
                                        text-[22px]
                                        md:text-[26px]
                                        font-bold
                                        text-[#0A1B4D]
                                    "
                                >

                                    {item.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p
                                    className="
                                        mt-4
                                        text-[16px]
                                        leading-[1.8]
                                        text-gray-500
                                        md:min-h-[85px]
                                    "
                                >

                                    {item.description}

                                </p>

                                {/* BUTTON */}

                                <button
                                    onClick={() => {

                                        handleBookNow(
                                            `Hello, I want ${item.title} service.`
                                        );

                                    }}
                                    className="
                                        mt-3
                                        h-[54px]
                                        w-full
                                        rounded-2xl
                                        bg-[#0F52BA]
                                        hover:bg-[#083B8A]
                                        transition-all
                                        duration-300
                                        text-white
                                        font-semibold
                                        text-[16px]
                                        cursor-pointer
                                        shadow-lg
                                        hover:shadow-blue-200
                                    "
                                >

                                    Book Now

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default Services;
