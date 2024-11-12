import { v4 as uuid } from "uuid";

import BodyTitleSeparator from "../../../components/body-title-separator";
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
        description: `Developed software systems, tools, and automated tests as a full-stack engineer.`,
        contributions: [
            "Spearheaded full-stack development of containerized web services and tools.",
            "Collaborated with cross-discipline teams to design and implement new features, ensuring testability and flexibility.",
            "Researched technologies to provide modern solutions.",
            "Deployed containerized live-services with Kubernetes and Docker.",
            "Established CI/CD pipeline utilizing Gitlab with Helm.",
            "Oversaw development of applications through full software development lifecycle.",
            "Implemented end-to-end (e2e) integration tests, functional tests, and unit tests for backend and frontend services.",
            "Championed code coverage with automated tests, increasing test coverage by 35% and ensuring stable releases.",
            "Provided detailed documentation for technical and non-technical staff, including deployment guides.",
        ],
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
        contributions: [
            "Collaborated with frontend engineers to design backend services.",
            "Identified and resolved backend performance issues.",
            "Deployed live-service containerized services with Kubernetes and Docker in CI/CD pipelines.",
        ],
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
        contributions: [
            "Designed test plans for functional and end-to-end automated tests for live-service PlayStation Now streams.",
            "Developed virtual controller to play test PlayStation streaming service features.",
            "Proactively expanded tool sets to encompass new requirements and increase efficiency.",
            "Caught regressions in stability and blocked issues from deploying to production environments, reducing player error rates by 30%.",
        ],
        skills: {
            lang: ["Python", "C#"],
            tech: ["Git"],
            testauto: ["PyTest", "XUnit", "Selenium"],
        },
    },
];

export default function ExperienceSection({
    searchSkill,
}: {
    searchSkill?: { [id: string]: string[] };
}) {
    var experience = experienceData;
    if (searchSkill) {
        experience = experienceData.filter((exp) => {
            for (const skillType in searchSkill) {
                if (
                    exp.skills.hasOwnProperty(skillType) &&
                    exp.skills[skillType].some((skill) =>
                        searchSkill[skillType].includes(skill),
                    )
                )
                    return exp;
            }
        });
    }

    return (
        <article className={styles.experienceContainer}>
            <BodyTitleSeparator title="Experience" dataCy="experience-title" />
            {experience.map((expData) => {
                return (
                    <ExperienceBlock
                        expData={expData}
                        key={expData.id}
                        searchSkill={searchSkill}
                    />
                );
            })}
            {experience.length === 0 && <h5>Nothing is here yet!</h5>}
        </article>
    );
}
