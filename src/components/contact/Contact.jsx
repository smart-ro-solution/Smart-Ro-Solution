"use client";

import React, { useState } from "react";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { handleEmailSubmit, handleWhatsAppSubmit } from "@/utill/contactActions";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        message: "",
        alternatePhone: "",
    });
    const isMobile = () => {

        return /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
        );

    };
    const [emailLoading, setEmailLoading] =
        useState(false);

    const [whatsappLoading, setWhatsappLoading] =
        useState(false);
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    return (

        <section className="w-full bg-[#031B4E] py-16 md:py-24 overflow-hidden" id="contact">

            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}

                    <div>

                        {/* TAG */}

                        <div className="inline-flex h-[36px] px-5 rounded-full bg-white/10 items-center justify-center">

                            <p className="text-[#5EA8FF] text-[13px] font-bold uppercase tracking-wide">

                                Contact Us

                            </p>

                        </div>

                        {/* TITLE */}

                        <h2 className="mt-6 text-[38px] md:text-[58px] leading-[1.2] font-extrabold text-white">

                            Need RO Repair
                            <br />

                            Or Installation
                            <br />

                            Service?

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="mt-6 text-[18px] md:text-[20px] leading-[1.9] text-[#C8D3EA] max-w-[700px]">

                            Contact Smart RO Solution
                            Gurugram today for fast and
                            reliable RO repair, installation
                            and AMC services at your doorstep.

                        </p>

                        {/* CONTACT INFO */}

                        <div className="mt-10 flex flex-col gap-5">

                            {/* PHONE */}

                            <div className="flex items-center gap-5">

                                <div className="w-[64px] h-[64px] rounded-2xl bg-[#0F52BA] flex items-center justify-center shadow-xl shadow-blue-900">

                                    <Phone
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#C8D3EA]">

                                        Call Us

                                    </p>

                                    <h3 className="text-[24px] font-bold text-white">

                                        +91 8307318570

                                    </h3>

                                </div>

                            </div>

                            {/* EMAIL */}

                            <div className="flex items-center gap-5">

                                <div className="w-[64px] h-[64px] rounded-2xl bg-[#0F52BA] flex items-center justify-center shadow-xl shadow-blue-900">

                                    <Mail
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#C8D3EA]">

                                        Email Address

                                    </p>

                                    <h3 className="text-[22px] font-bold text-white break-all">

                                        smartrosolution@gmail.com

                                    </h3>

                                </div>

                            </div>

                            {/* LOCATION */}

                            <div className="flex items-center gap-5">

                                <div className="w-[64px] h-[64px] rounded-2xl bg-[#0F52BA] flex items-center justify-center shadow-xl shadow-blue-900">

                                    <MapPin
                                        size={28}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-[15px] text-[#C8D3EA]">

                                        Service Areas

                                    </p>

                                    <h3 className="text-[22px] font-bold text-white">

                                        Gurugram & Manesar

                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT FORM */}

                    <div className="bg-white rounded-[36px] p-6 md:p-10 shadow-2xl">

                        {/* TITLE */}

                        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#0A1B4D]">

                            Book Service

                        </h2>

                        <p className="mt-3 text-[17px] text-gray-500 leading-[1.8]">

                            Fill out the form and our team
                            will contact you shortly.

                        </p>

                        {/* FORM */}

                        <form className="mt-8 flex flex-col gap-5">

                            {/* NAME */}

                            <div>

                                <label className="block mb-3 text-[16px] font-semibold text-[#0A1B4D]">

                                    Full Name
                                    <span className="text-red-500">

                                        {" "}*

                                    </span>

                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="
                h-[62px]
                w-full
                rounded-2xl
                border
                border-[#DCE6F7]
                px-5
                text-[17px]
                text-[#0A1B4D]
                placeholder:text-gray-400
                outline-none
                focus:border-[#0F52BA]
            "
                                />

                            </div>

                            {/* PHONE */}

                            <div>

                                <label className="block mb-3 text-[16px] font-semibold text-[#0A1B4D]">

                                    Phone Number
                                    <span className="text-red-500">

                                        {" "}*

                                    </span>

                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="
                h-[62px]
                w-full
                rounded-2xl
                border
                border-[#DCE6F7]
                px-5
                text-[17px]
                text-[#0A1B4D]
                placeholder:text-gray-400
                outline-none
                focus:border-[#0F52BA]
            "
                                />

                            </div>

                            {/* ALTERNATE PHONE */}

                            <div>

                                <label className="block mb-3 text-[16px] font-semibold text-[#0A1B4D]">

                                    Alternate Number
                                </label>

                                <input
                                    type="text"
                                    name="alternatePhone"
                                    value={formData.alternatePhone}
                                    onChange={handleChange}
                                    placeholder="Optional alternate number"
                                    className="
                h-[62px]
                w-full
                rounded-2xl
                border
                border-[#DCE6F7]
                px-5
                text-[17px]
                text-[#0A1B4D]
                placeholder:text-gray-400
                outline-none
                focus:border-[#0F52BA]
            "
                                />

                            </div>

                            {/* SERVICE */}

                            <div>

                                <label className="block mb-3 text-[16px] font-semibold text-[#0A1B4D]">

                                    Select Service
                                    <span className="text-red-500">

                                        {" "}*

                                    </span>

                                </label>

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="
                h-[62px]
                w-full
                rounded-2xl
                border
                border-[#DCE6F7]
                px-5
                text-[17px]
                text-[#0A1B4D]
                outline-none
                focus:border-[#0F52BA]
            "
                                >

                                    <option value="">
                                        Choose a service
                                    </option>

                                    <option value="RO Repair">
                                        RO Repair
                                    </option>

                                    <option value="RO Service">
                                        RO Service
                                    </option>

                                    <option value="RO Installation">
                                        RO Installation
                                    </option>

                                    <option value="AMC Maintenance">
                                        AMC Maintenance
                                    </option>

                                    <option value="Filter Replacement">
                                        Filter Replacement
                                    </option>

                                    <option value="Leakage Repair">
                                        Leakage Repair
                                    </option>

                                    <option value="Water Purifier Service">
                                        Water Purifier Service
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                            {/* MESSAGE */}

                            <div>

                                <label className="block mb-3 text-[16px] font-semibold text-[#0A1B4D]">

                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your service requirement..."
                                    className="
                w-full
                rounded-2xl
                border
                border-[#DCE6F7]
                p-5
                text-[17px]
                text-[#0A1B4D]
                placeholder:text-gray-400
                outline-none
                focus:border-[#0F52BA]
            "
                                />

                            </div>

                            {/* BUTTONS */}

                            <div className="flex flex-col sm:flex-row gap-4">

                                {/* SUBMIT */}

                                <button

                                    type="submit"

                                    disabled={emailLoading}

                                    onClick={(e) => {

                                        e.preventDefault();


                                        setEmailLoading(true);

                                        setTimeout(() => {

                                            // MOBILE -> WHATSAPP

                                            if (isMobile()) {

                                                handleWhatsAppSubmit(formData);

                                            }

                                            // DESKTOP -> GMAIL

                                            else {

                                                handleEmailSubmit(formData);

                                            }

                                            setEmailLoading(false);

                                        }, 1800);

                                    }}

                                    className="cursor-pointer flex-1 h-[60px] rounded-2xl bg-[#0F52BA] hover:bg-[#083B8A] transition-all duration-300 text-white font-bold text-[17px] disabled:opacity-70 disabled:cursor-not-allowed"
                                >

                                    {
                                        emailLoading
                                            ? "Submitting..."
                                            : "Book Now"
                                    }

                                </button>

                                {/* WHATSAPP */}

                                {
                                    !isMobile() && (

                                        <button

                                            onClick={(e) => {

                                                e.preventDefault();

                                                setWhatsappLoading(true);

                                                setTimeout(() => {

                                                    handleWhatsAppSubmit(formData);

                                                    setWhatsappLoading(false);

                                                }, 1500);

                                            }}

                                            type="button"

                                            disabled={whatsappLoading}

                                            className="cursor-pointer flex-1 h-[60px] rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] transition-all duration-300 text-white font-bold text-[17px] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >

                                            <MessageCircle size={22} />

                                            {
                                                whatsappLoading
                                                    ? "Opening..."
                                                    : "WhatsApp"
                                            }

                                        </button>

                                    )
                                }

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Contact;
