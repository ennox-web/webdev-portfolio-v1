import styles from "./skill-overlay.module.css";
import SkillChip from "./skill-chip";
import ExperienceSection from "../experience/experience-section";
import ProjectsSection from "../projects/projects-section";

export default function SkillOverlay({ skill, skillType, isOpen, onClose }: { skill: string; skillType: string; isOpen: boolean; onClose: () => void; }) {
    const check: { [id: string]: string[] } = {}
    check[skillType] = [skill];
    return (
        <div className={styles.container}>
            {isOpen && (
                <div>
                    <button
                        className={styles.overlayBackground}
                        onClick={onClose}
                        data-cy="image-overlay-bg"
                        type="button"
                        aria-label="Close"
                    />
                    <div className={styles.noticeWrapper}>
                        <div className={styles.noticeContainer}>
                            <h5 className={styles.notice}>Click anywhere blank to close.</h5>
                        </div>
                    </div>
                </div>
            )}
            <section className={isOpen ? `${styles.openOverlay} ${styles.overlay}` : `${styles.closeOverlay} ${styles.overlay}`}>
                <button className={styles.closeButton}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>close</span>
                </button>
                <div className={styles.content}>
                    {/* <span className={styles.title}>{skill}</h2> */}
                    <SkillChip type={skillType} skill={skill} disabled={true} />
                    <ExperienceSection searchSkill={check} />
                    <ProjectsSection searchSkill={check} />
                </div>
            </section>
        </div>

    )
}