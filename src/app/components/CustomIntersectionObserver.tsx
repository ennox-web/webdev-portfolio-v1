"use client";

import { useEffect, useState } from "react";

import { useBoundaryObserver } from "../lib/scroll-in-view-helper";

export default function CustomIntersectionObserver({
    children,
    rootMargin = "0px",
    thresholdValue = 0,
    classes,
    useStyle = false,
    useStyleWithReduced = false,
    topIn,
    topOut,
    bottomIn,
    bottomOut,
    // onClick,
    onMouseEnter,
    onMouseLeave,
}: {
    children: React.ReactNode;
    rootMargin?: string;
    thresholdValue?: number;
    classes?: string;
    useStyle?: boolean;
    useStyleWithReduced?: boolean;
    topIn?: string | any;
    topOut?: string | any;
    bottomIn?: string | any;
    bottomOut?: string | any;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    const [ref, boundary] = useBoundaryObserver(rootMargin, thresholdValue);
    const [className, setClassName] = useState("");
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const checkReduced =
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ===
            true;
        // Update the className based on the boundary state.
        if (checkReduced) {
            setClassName(`${classes}`);
            if (useStyleWithReduced) {
                if (topIn) setStyles(topIn);
                else if (topOut) setStyles(topOut);
                else if (bottomIn) setStyles(bottomIn);
                else if (bottomOut) setStyles(bottomOut);
            }
            return;
        }

        switch (boundary) {
            case "topIn":
                if (topIn) {
                    if (useStyle) setStyles(topIn);
                    else setClassName(`${classes} ${topIn}`);
                }
                break;
            case "topOut":
                if (topOut) {
                    if (useStyle) setStyles(topOut);
                    else setClassName(`${classes} ${topOut}`);
                }
                break;
            case "bottomIn":
                if (bottomIn) {
                    if (useStyle) setStyles(bottomIn);
                    else setClassName(`${classes} ${bottomIn}`);
                }
                break;
            case "bottomOut":
                if (bottomOut) {
                    if (useStyle) setStyles(bottomOut);
                    else setClassName(`${classes} ${bottomOut}`);
                }
                break;
            default:
                setClassName(`${classes}`);
                break;
        }
    }, [
        boundary,
        classes,
        topIn,
        topOut,
        bottomIn,
        bottomOut,
        useStyle,
        useStyleWithReduced,
    ]);

    return (
        <div
            ref={ref}
            className={className || undefined}
            style={styles}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
}
