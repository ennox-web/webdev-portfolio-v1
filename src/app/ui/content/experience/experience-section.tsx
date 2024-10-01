import { v4 as uuid } from "uuid";

import BodyTitleSeparator from "../body-title-separator";
import type { ExperienceDataInterface } from "./experience-block";
import ExperienceBlock from "./experience-block";
import styles from "./experience-section.module.css";

const experienceData: ExperienceDataInterface[] = [
  {
    id: uuid(),
    start: "June 2020",
    end: "Feb 2024",
    company: "Sony Interactive Entertainment",
    title: "Software Engineer II",
    description: `Developed software systems, tools, and automated tests as a full-stack engineer. Spearheaded full-stack development of containerized web services. Collaborated with cross-discipline teams to design and implement features.`,
    skills: {
      lang: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"],
      tech: ["Git", "Angular", "MongoDB", "GraphQL", "Figma", "AWS"],
      devop: ["Kubernetes", "Docker", "CI/CD"],
      testauto: ["PyTest", "Jest", "Storybook", "Cypress"],
    },
  },
  {
    id: uuid(),
    start: "June 2018",
    end: "June 2020",
    company: "Sony Interactive Entertainment",
    title: "Backend Engineer",
    description: `Supported backend services for containerized web applications, tools, and automated tests as a backend engineer.`,
    skills: {
      lang: ["Python"],
      tech: ["Git", "MongoDB", "GraphQL"],
      devop: ["CI/CD"],
      testauto: ["PyTest"],
    },
  },
  {
    id: uuid(),
    start: "Feb 2016",
    end: "June 2018",
    company: "Sony Interactive Entertainment",
    title: "Junior SDET",
    description: `Developed automated tests and custom testing tools for communicating with PlayStation devkits.`,
    skills: {
      lang: ["Python", "C#"],
      tech: ["Git"],
      testauto: ["PyTest", "XUnit", "Selenium"],
    },
  },
];

export default function ExperienceSection() {
  return (
    <article className={styles.experienceContainer}>
      <BodyTitleSeparator title="Experience" dataCy="experience-title" />
      {experienceData.map((expData) => {
        return <ExperienceBlock expData={expData} key={expData.id} />;
      })}
    </article>
  );
}
