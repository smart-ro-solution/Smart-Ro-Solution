"use client";

import React from "react";

import {
    BadgeCheck,
    Users,
    Wrench,
    ShieldCheck,
} from "lucide-react";

const statsData = [

    {
        icon: BadgeCheck,
        number: "10+",
        title: "Years Experience",
    },

    {
        icon: Users,
        number: "5000+",
        title: "Happy Customers",
    },

    {
        icon: Wrench,
        number: "25+",
        title: "Expert Technicians",
    },

    {
        icon: ShieldCheck,
        number: "100%",
        title: "Satisfaction Guaranteed",
    },
];

const Stats = () => {

    return (

        <section className="w-full bg-[#031B4E] py-16 md:py-24 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        {/* TAG */}

                        <div className="inline-flex h-[36px] px-5 rounded-full bg-white/10 items-center justify-center">

                            <p className="text-[#5EA8FF] text-[13px] font-bold uppercase tracking-wide">

                                Why Choose Us

                            </p>

                        </div>

                        {/* TITLE */}

                        <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-white">

                            Your Satisfaction
                            <br />

                            Is Our Priority

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-[#C8D3EA] max-w-[650px]">

                            We are committed to providing
                            fast, affordable and reliable RO
                            repair services in Gurugram with
                            professional technicians and
                            genuine spare parts.

                        </p>

                        {/* BUTTON */}

                        <button className="mt-9 h-[58px] px-8 rounded-2xl bg-[#0F52BA] hover:bg-[#2563EB] transition-all duration-300 text-white font-bold text-[17px] shadow-xl shadow-blue-900">

                            Know More About Us

                        </button>

                    </div>

                    {/* RIGHT STATS */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {statsData.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-500"
                                >

                                    {/* ICON */}

                                    <div className="w-[80px] h-[80px] rounded-2xl bg-[#0F52BA] flex items-center justify-center shadow-xl shadow-blue-900">

                                        <Icon
                                            size={38}
                                            className="text-white"
                                        />

                                    </div>

                                    {/* NUMBER */}

                                    <h2 className="mt-8 text-[52px] leading-none font-extrabold text-white">

                                        {item.number}

                                    </h2>

                                    {/* TITLE */}

                                    <p className="mt-4 text-[20px] leading-[1.5] font-semibold text-[#D5E2F7]">

                                        {item.title}

                                    </p>

                                </div>

                            );
                        })}

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Stats;
