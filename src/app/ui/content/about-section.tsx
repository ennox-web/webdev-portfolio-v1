import BodyTitleSeparator from "./body-title-separator";
import styles from "./about-section.module.css";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";


export default function Summary() {
    const title: string = "About Me";
    const summary: string = "test";
    return (
        <div className={styles.summaryContainer}>
            <BodyTitleSeparator title={title} />
            <div>
                {summary}
            </div>
        </div>
    )
}