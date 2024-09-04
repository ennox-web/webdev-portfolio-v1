import SkillChip from "./skill-chip";
import styles from "./skill-chip-list.module.css";

// Temporarily hardcoded
const skills: {[id: string]: string[]} = {
    "lang": [
        "C#",
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS"
    ],
    "tech": [
        "Git",
        "Angular",
        "React",
        "Next.js",
        "MongoDB",
        "SQL",
        "REST",
        "GraphQL",
        "ASP.Net",
        "Figma",
        "AWS",
        "Azure"
    ],
    "devop": [
        "Kubernetes",
        "Docker",
        "CI/CD"
    ],
    "testauto": [
        "PyTest",
        "XUnit",
        "Jest",
        "Storybook",
        "Cypress"
    ]
}

function SkillChips({type, skill}: {type: string, skill: string}) {
    return (
        <SkillChip skill={skill} type={type} key={skill} />
    )
}

export default function SkillChipList({type}: {type: string}) {
    if(type in skills) {
        return (
            <div className={styles.chipList}>
                {
                    skills[type].map((skill) => {
                        return SkillChips({type, skill});
                    })
                }
            </div>
        )
    }
    return (
        <></>
    )
}