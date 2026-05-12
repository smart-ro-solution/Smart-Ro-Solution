"use client";

import React, {
    useRef,
} from "react";

import {
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

const galleryImages = [

    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600566752227-8f3b2f9f6d19?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1626806788144-f17f3e3df5c6?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop",
];

const Gallery = () => {

    const prevRef = useRef(null);

    const nextRef = useRef(null);

    return (

        <section className="w-full bg-[#F7FAFF] py-16 md:py-24 overflow-hidden" id={"gallery"} >

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* TOP */}

                <div className="text-center">

                    <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                            Our Work

                        </p>

                    </div>

                    <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">

                        Glimpses Of
                        <br />

                        Our RO Services

                    </h2>

                    <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-gray-500 max-w-[850px] mx-auto">

                        Professional RO repair,
                        installation and maintenance work
                        completed across Gurugram.

                    </p>

                </div>

                {/* SLIDER */}

                <div className="relative mt-16">

                    {/* LEFT BUTTON */}

                    <button
                        ref={prevRef}
                        className="absolute left-[-10px] md:left-[-30px] top-1/2 -translate-y-1/2 z-50 w-[56px] h-[56px] rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-[#0F52BA] group transition-all duration-300"
                    >

                        <ChevronLeft
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    {/* RIGHT BUTTON */}

                    <button
                        ref={nextRef}
                        className="absolute right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 z-50 w-[56px] h-[56px] rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-[#0F52BA] group transition-all duration-300"
                    >

                        <ChevronRight
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}

                        loop={true}

                        speed={1000}

                        spaceBetween={30}

                        slidesPerView={1}

                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                        onBeforeInit={(swiper) => {

                            swiper.params.navigation.prevEl =
                                prevRef.current;

                            swiper.params.navigation.nextEl =
                                nextRef.current;
                        }}

                        breakpoints={{

                            640: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 3,
                            },

                            1400: {
                                slidesPerView: 4,
                            },
                        }}
                    >

                        {galleryImages.map((image, index) => (

                            <SwiperSlide key={index}>

                                <div className="group relative overflow-hidden rounded-[32px] shadow-xl cursor-pointer">

                                    {/* IMAGE */}

                                    <img
                                        src={image}
                                        alt="gallery"
                                        className="w-full h-[380px] object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* OVERLAY */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#031B4E]/90 via-[#031B4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                    {/* CONTENT */}

                                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-[120%] group-hover:translate-y-0 transition-all duration-500">

                                        <h3 className="text-[26px] font-bold text-white">

                                            RO Service Work

                                        </h3>

                                        <p className="mt-2 text-[16px] text-white/80">

                                            Professional Installation &
                                            Repair

                                        </p>

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

export default Gallery;
