import BodyTitleSeparator from "../body-title-separator";
import SkillChipList from "./skill-chip-list";
import styles from "./skill-type.module.css";

const skills: { [id: string]: string[] } = {
    lang: ["C#", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    tech: [
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
        "Azure",
        "FastAPI",
        "PostgreSQL",
    ],
    devop: ["Kubernetes", "Docker", "CI/CD"],
    testauto: ["PyTest", "XUnit", "Jest", "Storybook", "Cypress", "Selenium"],
};

export default function SkillType({
    type,
    title,
    onClick,
}: {
    type: string;
    title: string;
    onClick: (skill: string, type: string) => void;
}) {
    return (
        <section className={styles.skillTypeContainer}>
            <BodyTitleSeparator title={title} dataCy={`skills-title-${type}`} />
            <SkillChipList type={type} skills={skills[type]} onClick={onClick} />
        </section>
    );
}
