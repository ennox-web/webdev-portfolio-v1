import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

import styles from "./body-title-separator.module.css";

export default function BodyTitleSeparator({
    title,
    dataCy,
}: {
    title: string;
    dataCy?: string;
}) {
    return (
        <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            classes={`${styles.preAnim} ${styles.bodyTitle}`}
            thresholdValue={0}
            useStyle
            bottomIn={calcSlideLeftStyle(0)}
        >
            <h3 data-cy={dataCy}>{title}</h3>
            <span className={styles.titleSeparator} />
        </CustomIntersectionObserver>
    );
}
