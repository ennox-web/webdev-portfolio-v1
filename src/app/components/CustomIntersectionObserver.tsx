'use client';
import { useEffect, useState } from "react";
import { useBoundaryObserver } from "../lib/scroll-in-view-helper";

export default function CustomIntersectionObserver({ 
        children, 
        rootMargin = "0px", 
        thresholdValue = 1, 
        classes,
        useStyle = false,
        topIn, 
        topOut, 
        bottomIn, 
        bottomOut,
    }: {
        children: React.ReactNode,
        rootMargin?: string,
        thresholdValue?: number,
        classes?: string,
        useStyle?: boolean,
        topIn?: string | any,
        topOut?: string | any,
        bottomIn?: string | any,
        bottomOut?: string | any,
    }) {
    const [ref, boundary] = useBoundaryObserver(rootMargin, thresholdValue);
    const [className, setClassName] = useState("");
    const [styles, setStyles] = useState({});

    useEffect(() => {
        // Update the className based on the boundary state.
        switch (boundary) {
            case 'topIn':
                if(topIn) {
                    if(useStyle) setStyles(topIn);
                    else setClassName(`${classes} ${topIn}`);
                }
                break;
            case 'topOut':
                if(topOut) {
                    if(useStyle) setStyles(topOut);
                    else setClassName(`${classes} ${topOut}`);
                }
                break;
            case 'bottomIn':
                if(bottomIn) {
                    if(useStyle) setStyles(bottomIn);
                    else setClassName(`${classes} ${bottomIn}`);
                }
                break;
            case 'bottomOut':
                if(bottomOut) {
                    if(useStyle) setStyles(bottomOut);
                    else setClassName(`${classes} ${bottomOut}`);
                }
                break;
            default:
                setClassName(`${classes}`);
                break;
        }
    }, [boundary, classes, topIn, topOut, bottomIn, bottomOut]);

    return (
        <div ref={ref} className={className ? className : undefined} style={styles}>
            {children}
        </div>
    );
}