import SkillChipList from '../skills/skill-chip-list';
import SkillChipLists from '../skills/skill-chip-lists';
import styles from './experience-block.module.css';

export interface ExperienceDataInterface {
    id: string;
    start: string;
    end: string;
    company: string;
    title: string;
    description: string;
    skills: {[id: string]: string[]};
}

export default function ExperienceBlock({expData}: {expData: ExperienceDataInterface}) {
    return (
        <div className={styles.expBlockContainer}>
            <span className={`${styles.header} ${styles.dates}`}>{expData.start} — {expData.end}</span>
            <div className={styles.expBlockContent}>
                <div>
                    <h5 className={styles.header}>{expData.company}</h5>
                    <span className={styles.title}>{expData.title}</span>
                </div>
                <span>{expData.description}</span>
                <SkillChipLists skills={expData.skills} />
            </div>
        </div>
    )
}