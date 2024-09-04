import styles from "./skill-chip.module.css";

const chipStyles: {[id: string]: string} = {
    "lang": styles.languageChip,
    "tech": styles.techChip,
    "devop": styles.devopChip,
    "testauto": styles.testautoChip,
}

export default function SkillChip({type, skill}: {type: string, skill: string}) {
    return (
        <div className={`${styles.chipContainer} ${chipStyles[type]}`}>
            <span className={styles.chip}>{skill}</span>
        </div>
    )
}