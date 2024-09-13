import CustomIntersectionObserver from '@/app/components/CustomIntersectionObserver';
import SkillChipLists from '../skills/skill-chip-lists';
import ImageCardsList from './image-cards-list';
import styles from './project-block.module.css';
import { calcSlideLeftStyle } from '@/app/lib/helpers';
import { ImageDataInterface } from './image-card';


export interface ProjectDataInterface {
    id: string;
    name: string;
    description: string;
    skills: {[id: string]: string[]};
    images: ImageDataInterface[];
}

export default function ProjectBlock({projData}: {projData: ProjectDataInterface}) {
    return (
        <div className={styles.projectBlockContainer}>
            <ImageCardsList images={projData.images} dataCy={`projects-${projData.name}-image`}/>
            <div className={styles.content}>
                <CustomIntersectionObserver
                    rootMargin="0px 0px 0px 400px"
                    thresholdValue={0}
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideLeftStyle(0)}
                >
                    <h5 className={styles.header} data-cy={`projects-${projData.name}-title`}>{projData.name}</h5>
                </CustomIntersectionObserver>
                <CustomIntersectionObserver
                    rootMargin="0px 0px 0px 400px"
                    thresholdValue={0}
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideLeftStyle(1)}
                >
                    <span data-cy={`projects-${projData.name}-description`}>{projData.description}</span>
                </CustomIntersectionObserver>
                <SkillChipLists skills={projData.skills} />
            </div>
        </div>
    )
}