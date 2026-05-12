"use client";

import React from "react";

import { handleBookNow } from "@/utill/contactActions";

const services = [

    {
        image: "/images/services/repair.jpg",
        title: "RO Repair",
        description:
            "All types of RO repair services for all major brands.",
    },

    {
        image: "/images/services/service.jpg",
        title: "RO Service",
        description:
            "Complete RO servicing to keep your water 100% pure.",
    },

    {
        image: "/images/services/install.jpg",
        title: "RO Installation",
        description:
            "Professional installation of new RO systems.",
    },

    {
        image: "/images/services/amc.jpg",
        title: "AMC Maintenance",
        description:
            "Regular maintenance ensures long life of your RO.",
    },

    {
        image: "/images/services/filter.jpg",
        title: "Filter Replacement",
        description:
            "Filter, membrane and candle replacement service.",
    },

    {
        image: "/images/services/leakage.jpg",
        title: "Leakage Repair",
        description:
            "Quick RO water leakage and pipe fixing solutions.",
    },
];

const Services = () => {

    return (

        <section className="w-full bg-white py-20 md:py-28 overflow-hidden" id="services">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* TAG */}

                <div className="flex justify-center">

                    <div className="h-[38px] px-5 rounded-full bg-[#EAF2FF] flex items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-[1px]">

                            Our Services

                        </p>

                    </div>

                </div>

                {/* TITLE */}

                <h2 className="mt-6 text-center text-[36px] md:text-[56px] font-extrabold text-[#0A1B4D] leading-[1.15]">

                    Complete RO Solutions

                </h2>

                {/* DESCRIPTION */}

                <p className="mt-6 text-center text-[17px] md:text-[20px] text-gray-500 max-w-[900px] mx-auto leading-[1.9]">

                    Professional RO repair, installation,
                    AMC maintenance, filter replacement
                    and water purifier services for homes,
                    offices and commercial spaces across
                    Gurugram.

                </p>

                {/* SERVICES GRID */}

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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

                            {/* IMAGE */}

                            <div className="relative overflow-hidden h-[220px] md:h-[240px]">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-110
                                        transition-all
                                        duration-700
                                    "
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            </div>

                            {/* CONTENT */}

                            <div className="p-7">

                                {/* TITLE */}

                                <h3 className="text-[22px] md:text-[26px] font-bold text-[#0A1B4D]">

                                    {item.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p className="mt-4 text-[16px] leading-[1.8] text-gray-500 md:min-h-[85px]">

                                    {item.description}

                                </p>

                                {/* BUTTON */}

                                <button
                                    onClick={() => {
                                        handleBookNow();
                                    }}
                                    className="
                                        mt-6
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
