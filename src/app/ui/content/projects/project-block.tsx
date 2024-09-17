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
    start?: string;
    end: string;
    company?: string;
    skills: {[id: string]: string[]};
    images: ImageDataInterface[];
}

export default function ProjectBlock({projData}: {projData: ProjectDataInterface}) {
    const date = projData.start ? `${projData.start} — ${projData.end}` : projData.end;
    return (
        <div className={styles.projectBlockContainer}>
            <ImageCardsList images={projData.images} dataCy={`projects-${projData.name}-image`}/>
            <div className={styles.content}>
                <div className={styles.header}>
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
                        bottomIn={calcSlideLeftStyle(0)}
                    >
                        <span className={`${styles.company}`} data-cy={`${projData.name}-company`}>{projData.company}</span>
                    </CustomIntersectionObserver>
                    <CustomIntersectionObserver
                        rootMargin="0px 0px 0px 400px"
                        thresholdValue={0}
                        classes={styles.preAnim}
                        useStyle={true}
                        bottomIn={calcSlideLeftStyle(0)}
                    >
                        <span className={`${styles.date}`} data-cy={`${projData.name}-dates`}>{date}</span>
                    </CustomIntersectionObserver>
                </div>
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