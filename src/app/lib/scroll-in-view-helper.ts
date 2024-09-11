import { useEffect, useRef, useState } from "react";

export function useBoundaryObserver(rootMargin: string, thresholdValue: number) {
    const ref = useRef(null);
    const [boundary, setBoundary] = useState('');

    useEffect(() => {
        if(ref.current == null) return;
        const currentRef = ref.current;
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: rootMargin,
            threshold: thresholdValue,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const boundingRect = entry.boundingClientRect;

                if(boundingRect.y <= 0) {
                    entry.isIntersecting ? setBoundary('topIn') : setBoundary('topOut');
                }
                else if(boundingRect.y <= (window.innerHeight || document.documentElement.clientHeight)) {
                    setBoundary('bottomIn');
                }
                else if(boundingRect.y >= (window.innerHeight || document.documentElement.clientHeight)) setBoundary('bottomOut');
            })
        }, observerOptions);

        if(currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if(currentRef) observer.unobserve(currentRef);
        }
    }, [rootMargin, thresholdValue])

    return [ref, boundary];
}

/*
import { useEffect, useRef, useState } from "react";

export function useBoundaryObserver(rootMargin: string, thresholdValue: number, viewportRef?: HTMLDivElement | null) {
    const ref = useRef(null);
    const [boundary, setBoundary] = useState('');

    useEffect(() => {
        if(ref.current == null) return;
        const currentRef = ref.current;
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: rootMargin,
            threshold: thresholdValue,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const boundingRect = entry.boundingClientRect;

                if(boundingRect.y <= 0) {
                    entry.isIntersecting ? setBoundary('topIn') : setBoundary('topOut');
                    return;
                }

                if(viewportRef) {
                    const viewportRect = viewportRef.getBoundingClientRect();
                    if(boundingRect.y <= viewportRect.height) setBoundary('bottomIn');
                    else if(boundingRect.y >= (viewportRect.height)) setBoundary('bottomOut');
                }
                else {
                    if(boundingRect.y <= (window.innerHeight || document.documentElement.clientHeight)) {
                        setBoundary('bottomIn');
                    }
                    else if(boundingRect.y >= (window.innerHeight || document.documentElement.clientHeight)) setBoundary('bottomOut');
                }
            })
        }, observerOptions);

        if(currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if(currentRef) observer.unobserve(currentRef);
        }
    }, [rootMargin, thresholdValue])

    return [ref, boundary];
}
*/