import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import styles from "./skill-chip.module.css";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

const chipStyles: {[id: string]: string} = {
    "lang": styles.languageChip,
    "tech": styles.techChip,
    "devop": styles.devopChip,
    "testauto": styles.testautoChip,
}

export default function SkillChip({type, skill, delayOrder=0}: {type: string, skill: string, delayOrder?: number}) {
    return (
        <CustomIntersectionObserver 
            rootMargin="0px 0px 0px 400px"
            classes={`${styles.chipContainer} ${chipStyles[type]}`}
            useStyle={true}
            bottomIn={calcSlideLeftStyle(delayOrder)}
        >
            <span className={styles.chip}>{skill}</span>
        </CustomIntersectionObserver>
    )
}