import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import styles from "./skill-chip.module.css";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

const chipStyles: {[id: string]: string} = {
    "lang": styles.languageChip,
    "tech": styles.techChip,
    "devop": styles.devopChip,
    "testauto": styles.testautoChip,
}

export default function SkillChip({type, skill, delayOrder=0, dataCy}: {type: string, skill: string, delayOrder?: number, dataCy?: string}) {
    return (
        <CustomIntersectionObserver 
            classes={`${styles.chipContainer} ${styles.preAnim} ${chipStyles[type]}`}
            useStyle={true}
            bottomIn={calcSlideLeftStyle(delayOrder)}
        >
            <span className={styles.chip} data-cy={dataCy}>{skill}</span>
        </CustomIntersectionObserver>
    )
}