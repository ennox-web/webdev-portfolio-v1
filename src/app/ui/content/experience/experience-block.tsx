import CustomIntersectionObserver from '@/app/components/CustomIntersectionObserver';
import SkillChipList from '../skills/skill-chip-list';
import SkillChipLists from '../skills/skill-chip-lists';
import styles from './experience-block.module.css';
import { calcSlideLeftStyle } from '@/app/lib/helpers';

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
        <section className={styles.expBlockContainer}>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                topIn={calcSlideLeftStyle(0)}
                bottomIn={calcSlideLeftStyle(0)}
            >
                <span className={`${styles.header} ${styles.dates}`} data-cy={`${expData.title}-dates`}>{expData.start} — {expData.end}</span>
            </CustomIntersectionObserver>
            <div className={styles.expBlockContent}>
                <div>
                    <CustomIntersectionObserver
                        rootMargin="0px 0px 0px 400px"
                        thresholdValue={0}
                        classes={styles.preAnim}
                        useStyle={true}
                        bottomIn={calcSlideLeftStyle(1)}
                    >
                        <h5 className={styles.header} data-cy={`${expData.title}-company`}>{expData.company}</h5>
                    </CustomIntersectionObserver>
                    <CustomIntersectionObserver
                        rootMargin="0px 0px 0px 400px"
                        thresholdValue={0}
                        classes={styles.preAnim}
                        useStyle={true}
                        bottomIn={calcSlideLeftStyle(2)}
                    >
                        <span className={styles.title} data-cy={`${expData.title}-title`}>{expData.title}</span>
                    </CustomIntersectionObserver>
                </div>
                <CustomIntersectionObserver
                    rootMargin="0px 0px 0px 400px"
                    thresholdValue={0}
                    classes={styles.preAnim}
                    useStyle={true}
                    topIn={calcSlideLeftStyle(3)}
                    bottomIn={calcSlideLeftStyle(3)}
                >
                    <span data-cy={`${expData.title}-description`}>{expData.description}</span>
                </CustomIntersectionObserver>
                <SkillChipLists skills={expData.skills} />
            </div>
        </section>
    )
}