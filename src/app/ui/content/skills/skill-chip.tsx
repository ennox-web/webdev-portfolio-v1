import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver"
import { calcSlideLeftStyle } from "@/app/lib/helpers"

import styles from "./skill-chip.module.css"

const chipStyles: { [id: string]: string } = {
  lang: styles.languageChip,
  tech: styles.techChip,
  devop: styles.devopChip,
  testauto: styles.testautoChip,
}

export default function SkillChip({
  type,
  skill,
  delayOrder = 0,
  dataCy,
}: {
  type: string
  skill: string
  delayOrder?: number
  dataCy?: string
}) {
  return (
    <CustomIntersectionObserver
      thresholdValue={0}
      classes={`${styles.chipContainer} ${styles.preAnim} ${chipStyles[type]}`}
      useStyle
      topIn={calcSlideLeftStyle(delayOrder)}
      bottomIn={calcSlideLeftStyle(delayOrder)}
    >
      <span className={styles.chip} data-cy={dataCy}>
        {skill}
      </span>
    </CustomIntersectionObserver>
  )
}
