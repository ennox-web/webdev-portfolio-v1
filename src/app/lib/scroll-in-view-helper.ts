import { useEffect, useRef, useState } from "react";

export function useBoundaryObserver(
    rootMargin: string,
    thresholdValue: number,
) {
    const ref = useRef(null);
    const [boundary, setBoundary] = useState("");

    useEffect(() => {
        if (ref.current == null) return;
        const currentRef = ref.current;
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin,
            threshold: thresholdValue,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const boundingRect = entry.boundingClientRect;

                if (boundingRect.y <= 0) {
                    if (entry.isIntersecting) setBoundary("topIn");
                    else setBoundary("topOut");
                } else if (
                    boundingRect.y <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)
                ) {
                    setBoundary("bottomIn");
                } else if (
                    boundingRect.y >=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)
                )
                    setBoundary("bottomOut");
            });
        }, observerOptions);

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [rootMargin, thresholdValue]);

    return [ref, boundary];
}
