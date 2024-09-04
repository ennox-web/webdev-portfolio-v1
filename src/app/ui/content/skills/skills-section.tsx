import { Element, Link } from "react-scroll";
import BodyTitleSeparator from "../body-title-separator";
import SkillType from "./skill-type";
import styles from "./skills-section.module.css";

export default function SkillsSection() {
    return (
        <div className={styles.skillsContainer}>
            <SkillType type="lang" title="Languages" />
            <SkillType type="tech" title="Technical" />
            <SkillType type="devop" title="DevOps" />
            <SkillType type="testauto" title="Test Automation" />
        </div>
    )
}