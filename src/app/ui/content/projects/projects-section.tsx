import BodyTitleSeparator from '../body-title-separator';
import ProjectBlock, { ProjectDataInterface } from './project-block';
import styles from './projects-section.module.css';
import { v4 as uuid } from 'uuid';

const projects: ProjectDataInterface[] = [
    {
        id: uuid(),
        name: "T-Rex",
        description: "Full-stack containerized web application for tracking and generating automated test reports.",
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
            "/assets/owil_energy.jpg",
            "/assets/Nozaki2.jpg",
            "/assets/Elias.PNG"
        ]
    },
    {
        id: uuid(),
        name: "T-Rex",
        description: "Full-stack containerized web application for tracking and generating automated test reports.",
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
            "/assets/owil_energy.jpg",
            "/assets/Nozaki2.jpg",
            "/assets/Elias.PNG"
        ]
    },
    {
        id: uuid(),
        name: "T-Rex",
        description: "Full-stack containerized web application for tracking and generating automated test reports.",
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
            "/assets/owil_energy.jpg",
            "/assets/Nozaki2.jpg",
            "/assets/Elias.PNG"
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