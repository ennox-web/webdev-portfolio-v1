import styles from "./skill-overlay.module.css";
import SkillChip from "./skill-chip";
import ExperienceSection from "../experience/experience-section";
import ProjectsSection from "../projects/projects-section";

export default function SkillOverlay({
    skill,
    skillType,
    isOpen,
    onClose,
}: {
    skill: string;
    skillType: string;
    isOpen: boolean;
    onClose: () => void;
}) {
    const check: { [id: string]: string[] } = {};
    check[skillType] = [skill];
    return (
        <div className={styles.container}>
            {isOpen && (
                <div>
                    <button
                        className={styles.overlayBackground}
                        onClick={onClose}
                        data-cy="skill-overlay-bg"
                        type="button"
                        aria-label="Close"
                    />
                    <div className={styles.noticeWrapper}>
                        <div className={styles.noticeContainer}>
                            <h5 className={styles.notice}>
                                Click anywhere blank to close
                            </h5>
                        </div>
                    </div>
                </div>
            )}
            <section
                className={
                    isOpen
                        ? `${styles.openOverlay} ${styles.overlay}`
                        : `${styles.closeOverlay} ${styles.overlay}`
                }
                data-cy="skill-overlay"
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    data-cy="skill-overlay-close-button"
                    type="button"
                    aria-label="Close"
                >
                    <span
                        className={`material-symbols-outlined ${styles.icon}`}
                    >
                        close
                    </span>
                </button>
                <div className={styles.content}>
                    <SkillChip type={skillType} skill={skill} disabled={true} />
                    <div className={styles.sections}>
                        <ExperienceSection searchSkill={check} />
                    </div>

                    <div className={styles.sections}>
                        <ProjectsSection searchSkill={check} />
                    </div>
                </div>
            </section>
        </div>
    );
}
