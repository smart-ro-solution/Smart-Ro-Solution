"use client";

const useScrollToSection = () => {

    const scrollToSection = (
        id,
        offset = 50
    ) => {

        const section =
            document.getElementById(id);

        if (!section) return;

        const targetPosition =
            section.offsetTop - offset;

        const startPosition =
            window.pageYOffset;

        const distance =
            targetPosition - startPosition;

        const duration = 900;

        let start = null;

        // EASING
        const easeInOutQuad = (
            t,
            b,
            c,
            d
        ) => {

            t /= d / 2;

            if (t < 1)
                return c / 2 * t * t + b;

            t--;

            return -c / 2 *
                (t * (t - 2) - 1) + b;

        };

        const animation = (
            currentTime
        ) => {

            if (start === null)
                start = currentTime;

            const timeElapsed =
                currentTime - start;

            const run =
                easeInOutQuad(
                    timeElapsed,
                    startPosition,
                    distance,
                    duration
                );

            window.scrollTo(0, run);

            if (
                timeElapsed < duration
            ) {

                requestAnimationFrame(
                    animation
                );

            }

        };

        requestAnimationFrame(
            animation
        );

    };

    return scrollToSection;

};

export default useScrollToSection;
