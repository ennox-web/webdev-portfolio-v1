import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";
import Link from "next/link";

import SkillChipLists from "../skills/skill-chip-lists";
import type { ImageDataInterface } from "./image-card";
import ImageCardsList from "./image-cards-list";
import styles from "./project-block.module.css";
import Contributions from "../contributions";

export interface ProjectDataInterface {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  company?: string;
  github?: string;
  link?: string;
  details?: string[];
  skills: { [id: string]: string[] };
  images: ImageDataInterface[];
}

export default function ProjectBlock({
  projData,
}: {
  projData: ProjectDataInterface;
}) {
  const date = projData.start
    ? `${projData.start} — ${projData.end}`
    : projData.end;
  return (
    <section className={styles.projectBlockContainer}>
      <ImageCardsList
        images={projData.images}
        dataCy={`projects-${projData.name}-image`}
      />
      <div className={styles.content}>
        <hgroup className={styles.header}>
          <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            thresholdValue={0}
            classes={styles.preAnim}
            useStyle
            bottomIn={calcSlideLeftStyle(0)}
          >
            <h5
              className={styles.title}
              data-cy={`projects-${projData.name}-title`}
            >
              {projData.link ? (
                <Link
                  href={projData.link}
                  target="_blank"
                  data-cy="site-link"
                  className={styles.link}
                >
                  {projData.name}
                </Link>
              ) : (
                projData.name
              )}
              {projData.github && (
                <Link
                  href={projData.github}
                  target="_blank"
                  data-cy="github-link"
                  className={styles.link}
                >
                  <span className={`material-symbols-outlined ${styles.icon}`}>
                    open_in_new
                  </span>
                </Link>
              )}
            </h5>
          </CustomIntersectionObserver>
          <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            thresholdValue={0}
            classes={styles.preAnim}
            useStyle
            bottomIn={calcSlideLeftStyle(0)}
          >
            <p
              className={`${styles.company}`}
              data-cy={`${projData.name}-company`}
            >
              {projData.company}
            </p>
          </CustomIntersectionObserver>
          <CustomIntersectionObserver
            rootMargin="0px 0px 0px 400px"
            thresholdValue={0}
            classes={styles.preAnim}
            useStyle
            bottomIn={calcSlideLeftStyle(0)}
          >
            <p className={`${styles.date}`} data-cy={`${projData.name}-dates`}>
              {date}
            </p>
          </CustomIntersectionObserver>
        </hgroup>
        <CustomIntersectionObserver
          rootMargin="0px 0px 0px 400px"
          thresholdValue={0}
          classes={styles.preAnim}
          useStyle
          bottomIn={calcSlideLeftStyle(1)}
        >
          <p data-cy={`projects-${projData.name}-description`}>
            {projData.description}
          </p>
        </CustomIntersectionObserver>
        {projData.details && (
          <Contributions contributionList={projData.details} />
        )}
        <SkillChipLists skills={projData.skills} />
      </div>
    </section>
  );
}
