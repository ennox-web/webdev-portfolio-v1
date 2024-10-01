"use client"

import { Element } from "react-scroll"

import Summary from "./about-section"
import ExperienceSection from "./experience/experience-section"
import styles from "./main-body.module.css"
import ProjectsSection from "./projects/projects-section"
import SkillsSection from "./skills/skills-section"

export default function MainBody() {
  return (
    <div
      className={styles.mainBody}
      id="mainBody"
      data-cy="main-body-container"
    >
      <Element
        id="about"
        name="about"
        className={`${styles.firstItem} ${styles.section}`}
      >
        <Summary />
      </Element>
      <Element name="skills" className={styles.section}>
        <SkillsSection />
      </Element>
      <Element name="experience" className={styles.section}>
        <ExperienceSection />
      </Element>
      <Element name="projects">
        <ProjectsSection />
      </Element>
    </div>
  )
}
