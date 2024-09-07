import SkillChipLists from '../skills/skill-chip-lists';
import ImageCardsList from './image-cards-list';
import styles from './project-block.module.css';

export interface ProjectDataInterface {
    id: string;
    name: string;
    description: string;
    skills: {[id: string]: string[]};
    images: string[];
}

export default function ProjectBlock({projData}: {projData: ProjectDataInterface}) {
    return (
        <div className={styles.projectBlockContainer}>
            <ImageCardsList images={projData.images} />
            <div className={styles.content}>
                <h5 className={styles.header}>{projData.name}</h5>
                <span>{projData.description}</span>
                <SkillChipLists skills={projData.skills} />
            </div>
        </div>
    )
}