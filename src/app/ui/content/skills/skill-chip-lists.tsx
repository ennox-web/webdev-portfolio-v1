import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

function ChipList({type, skills, id}: {type: string, skills: string[], id: string}) {
    return (
        <>
            {
                skills.map((skill, index) => {
                    const _id = id + "-" + type + "-" + skill;
                    return (
                        <SkillChip skill={skill} type={type} key={_id} />
                    )
                })
            }
        </>
    )
}

export default function SkillChipLists({skills, id}: {skills: {[id: string]: string[]}, id: string}) {
    return (
        <div className={styles.chipList}>
            {
                
                Object.keys(skills).map(skillType => {
                    const skillList = skills[skillType];
                    return ChipList({type: skillType, skills: skillList, id: id});
                })
            }
        </div>
    )
}