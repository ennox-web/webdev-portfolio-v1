import BodyTitleSeparator from "../../../components/body-title-separator";
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
        "Flask",
        "PostgreSQL",
    ],
    devop: ["Kubernetes", "kind", "Docker", "Helm", "CI/CD"],
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
            <BodyTitleSeparator
                title={title}
                dataCy={`skills-title-${type}`}
                titleTag="h5"
                fadeTitle={true}
            />
            <SkillChipList
                type={type}
                skills={skills[type]}
                onClick={onClick}
            />
        </section>
    );
}
