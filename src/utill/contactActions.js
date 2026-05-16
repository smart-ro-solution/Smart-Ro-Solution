// 📁 src/utils/contactActions.js

const PHONE_NUMBER = "918307318570";

const EMAIL = "joniverma2688@gmail.com";
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







// Submit Form  ----

// ========================================
// SEND FORM TO EMAIL
// ========================================

// export const handleEmailSubmit = ({
//     name,
//     phone,
//     service,
//     message,
// }) => {

//     const subject =
//         encodeURIComponent(
//             `New RO Service Booking - ${service}`
//         );

//     const body =
//         encodeURIComponent(

//             `Name: ${name}

// Phone: ${phone}

// Service: ${service}

// Message:
// ${message}`

//         );

//     window.location.href =
//         `mailto:${EMAIL}?subject=${subject}&body=${body}`;

// };
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

            ` SMART RO SOLUTION -  CUSTOMER ENQUIRY

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

    // OPEN GMAIL DIRECTLY

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

        `SMART RO SOLUTION -  CUSTOMER ENQUIRY

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
