import { Element, Link } from "react-scroll";
import BodyTitleSeparator from "../body-title-separator";
import SkillType from "./skill-type";
import styles from "./skills-section.module.css";

export interface SkillTypeInterface {
    type: string;
    title: string;
}

const skillTypes: SkillTypeInterface[] = [
    {
        type: "lang",
        title: "Languages"
    },
    {
        type: "tech",
        title: "Technical"
    },
    {
        type: "devop",
        title: "DevOps"
    },
    {
        type: "testauto",
        title: "Test Automation"
    }
]

export default function SkillsSection() {
    var delayOrder = 0;
    return (
        <div className={styles.skillsContainer}>
            {
                skillTypes.map((skillType) => {
                    delayOrder += 1;
                    return (
                        <SkillType type={skillType.type} title={skillType.title} key={skillType.type} delayOrder={delayOrder} />
                    );
                })
            }
        </div>
    )
}