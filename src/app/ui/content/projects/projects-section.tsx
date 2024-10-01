import { v4 as uuid } from "uuid";

import BodyTitleSeparator from "../body-title-separator";
import type { ProjectDataInterface } from "./project-block";
import ProjectBlock from "./project-block";
import styles from "./projects-section.module.css";

const projects: ProjectDataInterface[] = [
  {
    id: uuid(),
    name: "Web Portfolio v1",
    description:
      "Next.js web application personal project for showcasing my work over my career. Designed in Figma - Deployed with Vercel.",
    end: "Sep 2024",
    skills: {
      lang: ["TypeScript", "JavaScript", "HTML", "CSS"],
      tech: ["Git", "React", "Next.js", "Figma"],
      devop: ["CI/CD"],
      testauto: ["Cypress"],
    },
    images: [
      {
        src: "/assets/projects/web-portfolio/WebPortfolio1.png",
        alt: "An image of this site's main banner, a starry sky with the E.N. Nox logo",
      },
      {
        src: "/assets/projects/web-portfolio/WebPortfolio2.png",
        alt: "An image of this site's desktop version",
      },
      {
        src: "/assets/projects/web-portfolio/WebPortfolio3.png",
        alt: "An image of this site's mobile version",
      },
    ],
  },
  {
    id: uuid(),
    name: "T-Rex",
    description:
      "Full-stack containerized web application for tracking and generating visual automated test reports. This project was internal and is unavailable to the public. Rough mock-up images (drafted from memory) are available to provide an estimation of the work.",
    start: "June 2018",
    end: "Feb 2024",
    company: "Sony Interactive Entertainment",
    skills: {
      lang: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"],
      tech: ["Git", "Angular", "MongoDB", "GraphQL", "Figma", "AWS"],
      devop: ["Kubernetes", "Docker", "CI/CD"],
      testauto: ["PyTest", "Jest", "Storybook", "Cypress"],
    },
    images: [
      {
        src: "/assets/projects/t-rex/TRexMockup1.png",
        alt: "A mockup of a test report dashboard on T-Rex.",
      },
      {
        src: "/assets/projects/t-rex/TRexMockup2.png",
        alt: "A mockup of the Periodic Digest dashboard on T-Rex.",
      },
    ],
  },
  {
    id: uuid(),
    name: "PlayStation Devkit Streaming Automated Tests",
    description:
      "Custom tools and automated tests for communicating with PlayStation devkits and recording test data. Due to this project being internal and unavailable to the public, no images are available.",
    start: "Feb 2016",
    end: "June 2018",
    company: "Sony Interactive Entertainment",
    skills: {
      lang: ["Python", "C#"],
      tech: ["Git"],
      testauto: ["PyTest", "Xunit"],
    },
    images: [
      {
        src: "blank",
        alt: "",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <article className={styles.projectsContainer}>
      <BodyTitleSeparator title="Projects" dataCy="projects-title" />
      {projects.map((project) => {
        return <ProjectBlock projData={project} key={project.id} />;
      })}
    </article>
  );
}
