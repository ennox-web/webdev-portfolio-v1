import BodyTitleSeparator from '../body-title-separator'
import ExperienceBlock, { ExperienceDataInterface } from './experience-block'
import styles from './experience-section.module.css'

const experienceData: ExperienceDataInterface[] = [
    {
        start: "Jan 2020",
        end: "Feb 2024",
        company: "Sony Interactive Entertainment",
        title: "Software Engineer II",
        description: `Developed software systems, tools, and automated tests as a full-stack engineer. Spearheaded full-stack development of containerized web services. Collaborated with cross-discipline teams to design and implement features.`,
        skills: {
            "lang": [
                "Python",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS"
            ],
            "tech": [
                "Git",
                "Angular",
                "MongoDB",
                "GraphQL",
                "Figma",
                "AWS"
            ],
            "devop": [
                "Kubernetes",
                "Docker",
                "CI/CD"
            ],
            "testauto": [
                "PyTest",
                "Jest",
                "Storybook",
                "Cypress"
            ]
        }
    },
    {
        start: "Jan 2020",
        end: "Feb 2024",
        company: "Sony Interactive Entertainment",
        title: "Software Engineer II",
        description: `Developed software systems, tools, and automated tests as a full-stack engineer. Spearheaded full-stack development of containerized web services. Collaborated with cross-discipline teams to design and implement features.`,
        skills: {
            "lang": [
                "Python",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS"
            ],
            "tech": [
                "Git",
                "Angular",
                "MongoDB",
                "GraphQL",
                "Figma",
                "AWS"
            ],
            "devop": [
                "Kubernetes",
                "Docker",
                "CI/CD"
            ],
            "testauto": [
                "PyTest",
                "Jest",
                "Storybook",
                "Cypress"
            ]
        }
    },
    {
        start: "Jan 2020",
        end: "Feb 2024",
        company: "Sony Interactive Entertainment",
        title: "Software Engineer II",
        description: `Developed software systems, tools, and automated tests as a full-stack engineer. Spearheaded full-stack development of containerized web services. Collaborated with cross-discipline teams to design and implement features.`,
        skills: {
            "lang": [
                "Python",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS"
            ],
            "tech": [
                "Git",
                "Angular",
                "MongoDB",
                "GraphQL",
                "Figma",
                "AWS"
            ],
            "devop": [
                "Kubernetes",
                "Docker",
                "CI/CD"
            ],
            "testauto": [
                "PyTest",
                "Jest",
                "Storybook",
                "Cypress"
            ]
        }
    }
];

export default function ExperienceSection() {
    return (
        <div className={styles.experienceContainer}>
            <BodyTitleSeparator title="Experience" />
            {
                experienceData.map((expData) => {
                    return (
                        <ExperienceBlock expData={expData} key={expData.start} />
                    );
                })
            }
        </div>
    )
}