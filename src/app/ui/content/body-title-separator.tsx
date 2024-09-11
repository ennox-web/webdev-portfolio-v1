import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import styles from "./body-title-separator.module.css";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

export default function BodyTitleSeparator({title}: {title: string}) {
    return (
        <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            classes={`${styles.preAnim} ${styles.bodyTitle}`}
            thresholdValue={0}
            useStyle={true}
            bottomIn={calcSlideLeftStyle(0)}
        >
            <h3>{title}</h3>
            <span className={styles.titleSeparator} />
        </CustomIntersectionObserver>
    )
}