import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

export default function SkillChipList({type, skills}: {type: string, skills: string[]}) {
    return (
        <div className={styles.chipList}>
            {
                skills.map((skill) => {
                    return (
                        <SkillChip skill={skill} type={type} key={skill} />
                    )
                })
            }
        </div>
    )
}