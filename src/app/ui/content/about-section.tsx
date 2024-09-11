import BodyTitleSeparator from "./body-title-separator";
import styles from "./about-section.module.css";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";
import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";


export default function Summary() {
    const title: string = "About Me";
    const summary: string = "test";
    return (
        <div className={styles.summaryContainer}>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(0)}
            >
                <BodyTitleSeparator title={title} />
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(1)}
            >
                {summary}
            </CustomIntersectionObserver>
        </div>
    )
}