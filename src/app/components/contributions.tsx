import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";
import styles from "./contributions.module.css";

export default function Contributions({
    contributionList,
    noSlide = false,
}: {
    contributionList: string[];
    noSlide?: boolean;
}) {
    return (
        <ul className={styles.list}>
            {contributionList.map((contribution) => {
                const key = `${contribution}-icon`;
                return (
                    <CustomIntersectionObserver
                        rootMargin="0px 0px 0px 400px"
                        thresholdValue={0}
                        classes={noSlide ? `` : `${styles.preAnim}`}
                        useStyle
                        topIn={calcSlideLeftStyle(1)}
                        bottomIn={calcSlideLeftStyle(1)}
                        key={contribution}
                    >
                        <li className={styles.item}>
                            <span
                                className={`material-symbols-outlined ${styles.icon}`}
                            >
                                keyboard_arrow_right
                            </span>
                            {contribution}
                        </li>
                    </CustomIntersectionObserver>
                );
            })}
        </ul>
    );
}
