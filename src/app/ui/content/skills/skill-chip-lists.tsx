import React from "react";
import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

function ChipList({type, skills}: {type: string, skills: string[]}) {
    return (
        <>
            {
                skills.map((skill, index) => {
                    const _id = type + "-" + skill;
                    return (
                        <SkillChip skill={skill} type={type} key={_id} />
                    )
                })
            }
        </>
    )
}

export default function SkillChipLists({skills}: {skills: {[id: string]: string[]}}) {
    return (
        <div className={styles.chipList}>
            {
                
                Object.keys(skills).map(skillType => {
                    const skillList = skills[skillType];
                    return (
                        <React.Fragment key={skillType}>
                            {
                                ChipList({type: skillType, skills: skillList})
                            }
                        </React.Fragment>
                    );
                })
            }
        </div>
    )
}