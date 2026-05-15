'use client';

import React from 'react';

import {
    Phone,
    ShieldCheck,
    Clock3,
    BadgeCheck,
    Wrench,
} from 'lucide-react';

import ArrowImage from '../hero/images/arrow.png';
import { handleCall, handleWhatsApp } from '@/utill/contactActions';
import { FaWhatsapp } from 'react-icons/fa';

const features = [
    {
        icon: ShieldCheck,
        title: '100% Satisfaction',
    },
    {
        icon: Wrench,
        title: 'Expert Technicians',
    },
    {
        icon: Clock3,
        title: 'Same Day Service',
    },
    {
        icon: BadgeCheck,
        title: 'Affordable Pricing',
    },
];

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F8FBFF] to-[#EAF4FF]  py-7" id={'home'}>

            {/* BACKGROUND GLOW */}
            <div className="absolute top-[-120px] right-[-120px] w-[700px] h-[700px] rounded-full bg-[#0F52BA]/10 blur-3xl" />

            <div className="max-w-[1450px] mx-auto px-4 md:px-8 py-8 lg:py-0 flex items-center">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 items-center w-full">

                    {/* LEFT CONTENT */}
                    <div className="relative z-20 order-2 lg:order-1 -mt-6 lg:mt-0">

                        {/* TAG */}
                        <div className="inline-flex h-[42px] px-6 rounded-full bg-[#E7F0FF] items-center justify-center">

                            <p className="text-[#0F52BA] text-[13px] md:text-[14px] font-bold tracking-wide uppercase">
                                Pure Water, Healthy Life
                            </p>

                        </div>

                        {/* HEADING */}
                        <h1 className="mt-6 text-[40px] sm:text-[58px] lg:text-[78px] leading-[1.05] font-extrabold text-[#0A1B4D]">

                            Pure Water.
                            <br />

                            <span className="text-[#0F52BA]">
                                Healthy Life.
                            </span>

                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-6 text-[17px] md:text-[22px] leading-[1.8] text-gray-600 max-w-[700px]">

                            Professional RO Repair, Service,
                            Installation & AMC in Gurugram.
                            100% Pure Water Solutions at
                            Your Doorstep.

                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            {/* CALL BUTTON */}
                            <button className="h-[60px] px-8 rounded-2xl bg-[#0F52BA] hover:bg-[#083B8A] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 cursor-pointer" onClick={handleCall} >

                                <Phone size={21} className="text-white" />

                                <span className="text-white text-[16px] font-bold">
                                    Call Now: 8307318570
                                </span>

                            </button>

                            {/* WHATSAPP BUTTON */}
                            <button className="h-[60px] px-8 rounded-2xl border-2 border-[#D7E3FF] bg-white hover:border-[#0F52BA] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer" onClick={() => {
                                handleWhatsApp()
                            }}>

                                {/* <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                    alt="whatsapp"
                                    className="w-6 h-6"
                                /> */}
                                <FaWhatsapp
                                    size={22}
                                    className="text-[#25D366]"
                                />

                                <span className="text-[#111827] text-[16px] font-semibold">
                                    Chat on WhatsApp
                                </span>

                            </button>

                        </div>

                        {/* FEATURES */}
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">

                            {features.map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >

                                        <div className="w-[44px] h-[44px] rounded-full bg-white shadow-lg flex items-center justify-center">

                                            <Icon
                                                size={20}
                                                className="text-[#0F52BA]"
                                            />

                                        </div>

                                        <p className="text-[15px] md:text-[16px] font-semibold text-[#0A1B4D]">
                                            {item.title}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className="
                            relative
                            flex
                            items-center
                            justify-center
                            order-1
                            lg:order-2
                            min-h-[320px]
                            sm:min-h-[420px]
                            lg:min-h-[700px]
                            -mt-10
                            lg:mt-0
                        "
                    >

                        {/* MAIN IMAGE */}
                        <img
                            src={ArrowImage.src}
                            alt="RO Machine"
                            className="
                                relative
                                z-10
                                w-[140%]
                                sm:w-[125%]
                                lg:w-[200%]
                                max-w-[520px]
                                sm:max-w-[650px]
                                lg:max-w-[900px]
                                object-contain
                                scale-[1.15]
                                sm:scale-[1.08]
                                lg:scale-100
                                drop-shadow-[0_40px_80px_rgba(15,82,186,0.25)]
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
