import BodyTitleSeparator from "../../../components/body-title-separator";
import SkillType from "./skill-type";
import styles from "./skills-section.module.css";

export interface SkillTypeInterface {
    type: string;
    title: string;
}

const skillTypes: SkillTypeInterface[] = [
    {
        type: "lang",
        title: "Languages",
    },
    {
        type: "tech",
        title: "Technical",
    },
    {
        type: "devop",
        title: "DevOps",
    },
    {
        type: "testauto",
        title: "Test Automation",
    },
];

export default function SkillsSection({
    onClick,
}: {
    onClick: (skill: string, type: string) => void;
}) {
    return (
        <article className={styles.skillsContainer}>
            <BodyTitleSeparator
                title={"Skills"}
                dataCy={"skills-title"}
                subtitle="Click a Skill to view relevant experience"
            />
            {skillTypes.map((skillType) => {
                return (
                    <SkillType
                        type={skillType.type}
                        title={skillType.title}
                        key={skillType.type}
                        onClick={onClick}
                    />
                );
            })}
        </article>
    );
}
