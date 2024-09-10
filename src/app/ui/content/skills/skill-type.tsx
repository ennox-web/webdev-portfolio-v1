import BodyTitleSeparator from "../body-title-separator";
import SkillChipList from "./skill-chip-list";
import styles from "./skill-type.module.css";

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

export default function SkillType({type, title, delayOrder=0}: {type: string, title: string, delayOrder?: number}) {
    return (
        <div className={styles.skillTypeContainer}>
            <BodyTitleSeparator title={title} delayOrder={delayOrder} />
            <SkillChipList type={type} skills={skills[type]} />
        </div>
    )
}