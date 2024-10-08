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

export default function SkillsSection() {
  return (
    <article className={styles.skillsContainer}>
      {skillTypes.map((skillType) => {
        return (
          <SkillType
            type={skillType.type}
            title={skillType.title}
            key={skillType.type}
          />
        );
      })}
    </article>
  );
}
