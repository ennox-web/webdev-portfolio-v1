import BodyTitleSeparator from "../body-title-separator";
import SkillChipList from "./skill-chip-list";
import styles from "./skill-type.module.css";

export default function SkillType({type, title}: {type: string, title: string}) {
    return (
        <div className={styles.skillTypeContainer}>
            <BodyTitleSeparator title={title} />
            <SkillChipList type={type} />
        </div>
    )
}