import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";

import styles from "./skill-chip.module.css";

const chipStyles: { [id: string]: string } = {
    lang: styles.languageChip,
    tech: styles.techChip,
    devop: styles.devopChip,
    testauto: styles.testautoChip,
};


const chipStylesDisabled: { [id: string]: string } = {
    lang: styles.languageChipNoHover,
    tech: styles.techChipNoHover,
    devop: styles.devopChipNoHover,
    testauto: styles.testautoChipNoHover,
};

export default function SkillChip({
    type,
    skill,
    onClick,
    delayOrder = 0,
    dataCy,
    disabled = false,
}: {
    type: string;
    skill: string;
    onClick?: (skill: string, type: string) => void;
    delayOrder?: number;
    dataCy?: string;
    disabled?: boolean;
}) {
    const onClickDefault = () => {
        if (onClick)
            onClick(skill, type);
    }
    const chipStyle = disabled ? `${chipStylesDisabled[type]} ${styles.chipContainerNoHover}` : `${chipStyles[type]} ${styles.chipContainer}`;
    return (
        <div>
            <CustomIntersectionObserver
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle
                topIn={calcSlideLeftStyle(delayOrder)}
                bottomIn={calcSlideLeftStyle(delayOrder)}
            >
                <button
                    className={`${styles.chip} ${chipStyle}`}
                    data-cy={dataCy}
                    onClick={onClickDefault}
                    disabled={disabled}
                >
                    {skill}
                </button>
            </CustomIntersectionObserver>

        </div>
    );
}
