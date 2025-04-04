import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

export default function SkillChipList({
    type,
    skills,
    onClick,
}: {
    type: string;
    skills: string[];
    onClick: (skill: string, type: string) => void;
}) {
    let delayOrder = 0;
    return (
        <div className={styles.chipList}>
            {skills.map((skill) => {
                delayOrder += 1;
                return (
                    <SkillChip
                        skill={skill}
                        type={type}
                        key={skill}
                        delayOrder={delayOrder}
                        dataCy={`skills-${type}-chip`}
                        onClick={onClick}
                        clickable={true}
                    />
                );
            })}
        </div>
    );
}
