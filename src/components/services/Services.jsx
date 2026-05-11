"use client";

import React from "react";

import {
    Wrench,
    Droplets,
    Settings2,
    ShieldCheck,
    Filter,
} from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "RO Repair",
        description:
            "All types of RO repair services for all major brands.",
    },

    {
        icon: Droplets,
        title: "RO Service",
        description:
            "Complete RO servicing to keep your water 100% pure.",
    },

    {
        icon: Settings2,
        title: "RO Installation",
        description:
            "Professional installation of new RO systems.",
    },

    {
        icon: ShieldCheck,
        title: "AMC Maintenance",
        description:
            "Regular maintenance ensures long life of your RO.",
    },

    {
        icon: Filter,
        title: "RO Accessories",
        description:
            "Filters, membranes, pumps & all RO spare parts available.",
    },
];

const Services = () => {

    return (

        <section className="w-full bg-white py-16 md:py-24">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* SECTION TAG */}

                <div className="flex justify-center">

                    <div className="h-[36px] px-5 rounded-full bg-[#EAF2FF] flex items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                            Our Services

                        </p>

                    </div>

                </div>

                {/* TITLE */}

                <h2 className="mt-5 text-center text-[34px] md:text-[52px] font-extrabold text-[#0A1B4D] leading-tight">

                    Complete RO Solutions

                </h2>

                {/* SUBTITLE */}

                <p className="mt-5 text-center text-[17px] md:text-[20px] text-gray-500 max-w-[850px] mx-auto leading-[1.8]">

                    Professional RO repair, installation,
                    AMC service & water purifier
                    maintenance for homes, offices and
                    commercial spaces in Gurugram.

                </p>

                {/* CARDS */}

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">

                    {services.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white border border-[#E8EEF9] rounded-[28px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                            >

                                {/* ICON */}

                                <div className="w-[80px] h-[80px] rounded-2xl bg-[#EEF4FF] flex items-center justify-center group-hover:bg-[#0F52BA] transition-all duration-300">

                                    <Icon
                                        size={38}
                                        className="text-[#0F52BA] group-hover:text-white transition-all duration-300"
                                    />

                                </div>

                                {/* TITLE */}

                                <h3 className="mt-7 text-[24px] font-bold text-[#0A1B4D]">

                                    {item.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p className="mt-4 text-[16px] leading-[1.8] text-gray-500 min-h-[110px]">

                                    {item.description}

                                </p>

                                {/* BUTTON */}

                                <button className="mt-6 h-[52px] w-full rounded-xl bg-[#0F52BA] hover:bg-[#083B8A] transition-all duration-300 text-white font-semibold text-[16px]">

                                    Book Now

                                </button>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>

    );
};

export default Services;
