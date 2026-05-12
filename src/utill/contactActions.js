// 📁 src/utils/contactActions.js

const PHONE_NUMBER = "918307318570";


// ==============================
// CALL FUNCTION
// ==============================

export const handleCall = () => {

    window.location.href = `tel:+${PHONE_NUMBER}`;

};


// ==============================
// WHATSAPP FUNCTION
// ==============================

export const handleWhatsApp = (
    message = "Hello, I need RO service."
) => {

    const encodedMessage = encodeURIComponent(message);

    window.open(
        `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
        "_blank"
    );

};


// ==============================
// BOOK NOW FUNCTION
// Desktop  -> WhatsApp
// Mobile/Tablet -> Call
// ==============================

export const handleBookNow = (
    message = "Hello, I want to book RO service."
) => {

    const isMobileOrTablet =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
        );

    if (isMobileOrTablet) {

        // MOBILE/TABLET -> CALL
        window.location.href = `tel:+${PHONE_NUMBER}`;

    } else {

        // DESKTOP -> WHATSAPP
        const encodedMessage = encodeURIComponent(message);

        window.open(
            `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
            "_blank"
        );

    }

};
