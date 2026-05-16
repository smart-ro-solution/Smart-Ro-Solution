// 📁 src/utils/contactActions.js

const PHONE_NUMBER = "918307318570";
const EMAIL = "joniverma2688@gmail.com";

// ==============================
// CALL FUNCTION
// ==============================

export const handleCall = () => {

    if (typeof window === "undefined") return;

    window.location.href = `tel:+${PHONE_NUMBER}`;

};

// ==============================
// WHATSAPP FUNCTION
// ==============================

export const handleWhatsApp = (
    message = "Hello, I need RO service."
) => {

    if (typeof window === "undefined") return;

    const encodedMessage =
        encodeURIComponent(message);

    window.open(
        `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
        "_blank"
    );

};

// ==============================
// BOOK NOW FUNCTION
// ==============================

export const handleBookNow = (
    message = "Hello, I want to book RO service."
) => {

    if (typeof window === "undefined") return;

    const isMobileOrTablet =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
        );

    if (isMobileOrTablet) {

        window.location.href =
            `tel:+${PHONE_NUMBER}`;

    } else {

        const encodedMessage =
            encodeURIComponent(message);

        window.open(
            `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
            "_blank"
        );

    }

};

// ========================================
// SEND FORM TO EMAIL
// ========================================

export const handleEmailSubmit = ({
    name,
    phone,
    alternatePhone,
    service,
    message,
}) => {

    if (typeof window === "undefined") return;

    const finalName =
        name || "Not Provided";

    const finalPhone =
        phone || "Not Provided";

    const finalAlternatePhone =
        alternatePhone || "Not Provided";

    const finalService =
        service || "Not Provided";

    const finalMessage =
        message || "Not Provided";

    const subject =
        encodeURIComponent(
            `New RO Service Booking - ${finalService}`
        );

    const body =
        encodeURIComponent(

            `SMART RO SOLUTION - CUSTOMER ENQUIRY

━━━━━━━━━━━━━━━━━━━

Customer Name:
${finalName}

Phone Number:
${finalPhone}

Alternate Number:
${finalAlternatePhone}

Selected Service:
${finalService}

Customer Message:
${finalMessage}

━━━━━━━━━━━━━━━━━━━

Please contact the customer as soon as possible.`

        );

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`,
        "_blank"
    );

};

// ========================================
// SEND FORM TO WHATSAPP
// ========================================

export const handleWhatsAppSubmit = ({
    name,
    phone,
    alternatePhone,
    service,
    message,
}) => {

    if (typeof window === "undefined") return;

    const finalName =
        name || "Not Provided";

    const finalPhone =
        phone || "Not Provided";

    const finalAlternatePhone =
        alternatePhone || "Not Provided";

    const finalService =
        service || "Not Provided";

    const finalMessage =
        message || "Not Provided";

    const text =

        `SMART RO SOLUTION - CUSTOMER ENQUIRY

━━━━━━━━━━━━━━━━━━━

Customer Name:
${finalName}

Phone Number:
${finalPhone}

Alternate Number:
${finalAlternatePhone}

Selected Service:
${finalService}

Customer Message:
${finalMessage}

━━━━━━━━━━━━━━━━━━━

Please contact the customer soon.`;

    const encodedMessage =
        encodeURIComponent(text);

    window.open(
        `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
        "_blank"
    );

};
