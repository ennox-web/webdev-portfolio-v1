"use client"

import { Element, scrollSpy } from "react-scroll"
import styles from "./main-body.module.css"
import Summary from "./about-section"
import SkillsSection from "./skills/skills-section"
import { useEffect } from "react";

export default function MainBody() {
    return (
        <div className={styles.mainBody} id="mainBody">
            <Element id="about" name="about" className={styles.firstItem}>
                <Summary />
            </Element>
            <Element name="skills" className={styles.section}>
                <SkillsSection />
            </Element>
            <Element name="experience" className={styles.section}></Element>
            <Element name="projects" className={styles.section}></Element>
        </div>
    )
}