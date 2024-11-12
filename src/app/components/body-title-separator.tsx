import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

import styles from "./body-title-separator.module.css";

export default function BodyTitleSeparator({
    title,
    subtitle,
    dataCy,
    titleTag,
    fadeTitle = false,
}: {
    title: string;
    subtitle?: string;
    dataCy?: string;
    titleTag?: keyof JSX.IntrinsicElements;
    fadeTitle?: boolean;
}) {
    const Tag = titleTag as keyof JSX.IntrinsicElements;
    return (
        <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            classes={`${styles.preAnim} ${styles.bodyTitle}`}
            thresholdValue={0}
            useStyle
            bottomIn={calcSlideLeftStyle(0)}
        >
            {titleTag ? (
                <Tag data-cy={dataCy} className={fadeTitle ? styles.faded : ``}>
                    {title}
                </Tag>
            ) : (
                <h3 data-cy={dataCy} className={fadeTitle ? styles.faded : ``}>
                    {title}
                </h3>
            )}
            <span
                className={
                    fadeTitle
                        ? `${styles.fadedSeparator} ${styles.titleSeparator}`
                        : styles.titleSeparator
                }
            />
            {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
        </CustomIntersectionObserver>
    );
}
