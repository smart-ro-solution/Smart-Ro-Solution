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
    Autoplay,
} from "swiper/modules";

import "swiper/css";

const galleryImages = [

    "/images/gallery/work1.jpeg",

    "/images/gallery/work2.jpeg",

    "/images/gallery/work3.jpeg",

    "/images/gallery/work4.jpeg",

    "/images/gallery/work5.jpeg",

    "/images/gallery/work6.jpeg",

    "/images/gallery/work7.jpeg",
];

const Gallery = () => {

    const swiperRef = useRef(null);

    return (

        <section
            id="gallery"
            className="w-full bg-[#F7FAFF] py-20 md:py-28 overflow-hidden"
        >

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* ===================== */}
                {/* TOP */}
                {/* ===================== */}

                <div className="text-center">

                    {/* TAG */}

                    <div className="inline-flex h-[36px] px-5 rounded-full bg-[#EAF2FF] items-center justify-center">

                        <p className="text-[#0F52BA] text-[13px] font-bold uppercase tracking-wide">

                            Our Work

                        </p>

                    </div>

                    {/* TITLE */}

                    <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-[#0A1B4D]">

                        Glimpses Of
                        <br />

                        Our RO Services

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-gray-500 max-w-[850px] mx-auto">

                        Professional RO repair,
                        installation and maintenance
                        work completed across Gurugram.

                    </p>

                </div>

                {/* ===================== */}
                {/* SLIDER */}
                {/* ===================== */}

                <div className="relative mt-16">

                    {/* LEFT BUTTON */}

                    <button
                        onClick={() => {
                            swiperRef.current?.slidePrev();
                        }}
                        className="
                            absolute
                            left-[-10px]
                            md:left-[-30px]
                            top-1/2
                            -translate-y-1/2
                            z-50
                            w-[56px]
                            h-[56px]
                            rounded-full
                            bg-white
                            shadow-2xl
                            border
                            border-gray-100
                            flex
                            items-center
                            justify-center
                            hover:bg-[#0F52BA]
                            group
                            transition-all
                            duration-300
                        "
                    >

                        <ChevronLeft
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    {/* RIGHT BUTTON */}

                    <button
                        onClick={() => {
                            swiperRef.current?.slideNext();
                        }}
                        className="
                            absolute
                            right-[-10px]
                            md:right-[-30px]
                            top-1/2
                            -translate-y-1/2
                            z-50
                            w-[56px]
                            h-[56px]
                            rounded-full
                            bg-white
                            shadow-2xl
                            border
                            border-gray-100
                            flex
                            items-center
                            justify-center
                            hover:bg-[#0F52BA]
                            group
                            transition-all
                            duration-300
                        "
                    >

                        <ChevronRight
                            size={24}
                            className="text-[#0F52BA] group-hover:text-white"
                        />

                    </button>

                    {/* SWIPER */}

                    <Swiper

                        modules={[Autoplay]}

                        onSwiper={(swiper) => {

                            swiperRef.current = swiper;
                        }}

                        loop={true}

                        speed={1000}

                        spaceBetween={30}

                        slidesPerView={1}

                        autoplay={{

                            delay: 2500,

                            disableOnInteraction: false,

                            pauseOnMouseEnter: true,
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
                                        className="
        w-full
       h-[520px]
sm:h-[600px]
md:h-[650px]
lg:h-[520px]
xl:h-[560px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
    "
                                    />

                                    {/* OVERLAY */}

                                    <div className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#031B4E]/90
                                        via-[#031B4E]/20
                                        to-transparent
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-all
                                        duration-500
                                    " />

                                    {/* CONTENT */}

                                    <div className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        p-8
                                        translate-y-[120%]
                                        group-hover:translate-y-0
                                        transition-all
                                        duration-500
                                    ">

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
