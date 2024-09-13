import BodyTitleSeparator from '../body-title-separator';
import ProjectBlock, { ProjectDataInterface } from './project-block';
import styles from './projects-section.module.css';
import { v4 as uuid } from 'uuid';

const projects: ProjectDataInterface[] = [
    {
        id: uuid(),
        name: "Web Portfolio v1",
        description: "Next.js web application personal project for showcasing my work as a full stack engineer.",
        skills: {
            "lang": [
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS"
            ],
            "tech": [
                "Git",
                "React",
                "Next.js",
                "Figma"
            ],
            "devop": [
                "CI/CD"
            ],
            "testauto": [
                "Cypress"
            ]
        },
        images: [
            "/assets/projects/web-portfolio/WebPortfolio1.png",
            "/assets/projects/web-portfolio/WebPortfolio2.png",
            "/assets/projects/web-portfolio/WebPortfolio3.png",
        ]
    },
    {
        id: uuid(),
        name: "T-Rex",
        description: "Full-stack containerized web application for tracking and generating visual automated test reports. Due to this project being internal and unavailable to the public, all images are mock-ups with placeholder data.",
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
        },
        images: [
            "blank"
        ]
    },
    {
        id: uuid(),
        name: "PlayStation Devkit Streaming Automated Tests",
        description: "Custom tools and automated tests for communicating with PlayStation devkits and recording test data. Due to this project being internal and unavailable to the public, no images are available.",
        skills: {
            "lang": [
                "Python",
                "C#"
            ],
            "tech": [
                "Git"
            ],
            "testauto": [
                "PyTest",
                "Xunit"
            ]
        },
        images: [
            "blank"
        ]
    }
]

export default function ProjectsSection() {
    return (
        <div className={styles.projectsContainer}>
            <BodyTitleSeparator title="Projects" />
            {
                projects.map((project) => {
                    return (
                        <ProjectBlock projData={project} key={project.id}/>
                    )
                })
            }
        </div>
    )
}