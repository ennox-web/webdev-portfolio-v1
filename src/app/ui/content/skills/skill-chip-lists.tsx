import React from "react";

import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

function ChipList({
    type,
    skills,
    searchSkill,
}: {
    type: string;
    skills: string[];
    searchSkill?: string[];
}) {
    return (
        <>
            {skills.map((skill) => {
                const id = `${type}-${skill}`;
                return (
                    <SkillChip
                        skill={skill}
                        type={type}
                        key={id}
                        disabled={searchSkill && searchSkill.includes(skill)}
                    />
                );
            })}
        </>
    );
}

export default function SkillChipLists({
    skills,
    searchSkill,
}: {
    skills: { [id: string]: string[] };
    searchSkill?: { [id: string]: string[] };
}) {
    return (
        <div className={styles.chipList}>
            {Object.keys(skills).map((skillType) => {
                const skillList = skills[skillType];
                const search =
                    searchSkill && skillType in searchSkill
                        ? searchSkill[skillType]
                        : undefined;
                console.log(search);
                return (
                    <React.Fragment key={skillType}>
                        {ChipList({
                            type: skillType,
                            skills: skillList,
                            searchSkill: search,
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
