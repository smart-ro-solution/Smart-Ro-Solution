"use client";

import React from "react";

import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    Navigation,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [

    {
        name: "Rahul Sharma",
        location: "Manesar",
        review:
            "Very professional RO repair service. Technician arrived on time and fixed the issue quickly.",
    },

    {
        name: "Amit Verma",
        location: "Sector 84",
        review:
            "Excellent water purifier installation service. Affordable pricing and fast response.",
    },

    {
        name: "Neha Gupta",
        location: "Sector 93",
        review:
            "Highly recommended for RO AMC service. Genuine parts and polite staff.",
    },

    {
        name: "Rohit Yadav",
        location: "Sector 82",
        review:
            "Quick response and same-day RO repair service. Highly satisfied with the work quality.",
    },

    {
        name: "Pooja Singh",
        location: "IMT Manesar",
        review:
            "Professional technician and genuine spare parts used in my RO service.",
    },

    {
        name: "Sandeep Kumar",
        location: "New Gurgaon",
        review:
            "Very affordable AMC plans and excellent customer support.",
    },

    {
        name: "Anjali Mehta",
        location: "Sector 91",
        review:
            "Best RO installation service in Gurugram. Fast and clean work.",
    },

    {
        name: "Deepak Chauhan",
        location: "Kherki Daula",
        review:
            "Technician explained everything properly and fixed the issue within minutes.",
    },
];

const Testimonials = () => {

    return (

        <section className="w-full bg-white py-16 md:py-24 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* TOP */}

                <div className="text-center">

                    <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                            Testimonials

                        </p>

                    </div>

                    <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">

                        Happy Customers

                    </h2>

                </div>

                {/* SLIDER */}

                <div className="relative mt-16">

                    {/* LEFT BUTTON */}

                    <button className="testimonial-prev absolute left-[-10px] md:left-[-30px] top-1/2 -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-[#0F52BA] group transition-all duration-300">

                        <ChevronLeft
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    {/* RIGHT BUTTON */}

                    <button className="testimonial-next absolute right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 z-20 w-[54px] h-[54px] rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-[#0F52BA] group transition-all duration-300">

                        <ChevronRight
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },

                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {testimonials.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div className="relative bg-[#F7FAFF] border border-[#E8EEF9] rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[320px]">

                                    {/* QUOTE */}

                                    <div className="absolute top-8 right-8 w-[54px] h-[54px] rounded-2xl bg-[#0F52BA] flex items-center justify-center shadow-lg shadow-blue-200">

                                        <Quote
                                            size={24}
                                            className="text-white"
                                        />

                                    </div>

                                    {/* STARS */}

                                    <div className="flex items-center gap-1">

                                        {[1, 2, 3, 4, 5].map((star) => (

                                            <Star
                                                key={star}
                                                size={18}
                                                fill="#FDBA12"
                                                className="text-[#FDBA12]"
                                            />

                                        ))}

                                    </div>

                                    {/* REVIEW */}

                                    <p className="mt-6 text-[17px] leading-[1.9] text-gray-600">

                                        {item.review}

                                    </p>

                                    {/* USER */}

                                    <div className="mt-8 flex items-center gap-4">

                                        <div className="w-[58px] h-[58px] rounded-full bg-[#0F52BA] flex items-center justify-center text-white text-[22px] font-bold">

                                            {item.name.charAt(0)}

                                        </div>

                                        <div>

                                            <h3 className="text-[19px] font-bold text-[#0A1B4D]">

                                                {item.name}

                                            </h3>

                                            <p className="text-[15px] text-gray-500">

                                                {item.location}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div>

        </section>

    );
};

export default Testimonials;
