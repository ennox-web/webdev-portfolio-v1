import BodyTitleSeparator from "./body-title-separator";
import styles from "./about-section.module.css";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";
import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";
import Link from "next/link";


export default function Summary() {
    const title: string = "About Me";
    return (
        <div className={styles.summaryContainer}>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 800px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(0)}
            >
                <BodyTitleSeparator title={title} dataCy="about-title"/>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 800px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                topIn={calcSlideLeftStyle(1)}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary1">
                    Hi! My name is <b className={styles.embolden}>Emily Nox</b>, and I am a <b className={styles.embolden}>Software Engineer</b> with 8 years of 
                    professional experience in various roles supporting the PlayStation Plus Cloud Streaming team, from
                    automated testing PlayStation devkits to building containerized live-service web applications.
                </span>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 800px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                topIn={calcSlideLeftStyle(1)}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary2">
                    I began my career as a <b className={styles.embolden}>Junior SDET</b> with <b className={styles.embolden}>Sony Interactive Entertainment</b> back in 
                    2016, where I specialized in building automated testing tools for communicating with and recording test data from 
                    PlayStation 3 and PlayStation 4 devkits.
                </span>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 800px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                topIn={calcSlideLeftStyle(1)}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary3">
                    I have since risen the ranks into web development, from <b className={styles.embolden}>Backend</b> to <b className={styles.embolden}>Frontend</b>, 
                    then <b className={styles.embolden}>Full Stack</b>. There I focused on building beautiful, robust features while maintaining 
                    a <b className={styles.embolden}>CI/CD pipeline</b> through GitLab for a seamless red-green deployment strategy for an 
                    internal <b className={styles.embolden}>containerized web application</b> built to provide internal developers
                    a one-stop-shop for running, reporting, and tracking customized automated test performance metrics and statistics.
                </span>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 800px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                topIn={calcSlideLeftStyle(1)}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary3">
                    Want to learn more? Think I might be a good fit for your <b className={styles.embolden}>WebDev</b> opportunity?
                    I am currently seeking new employment and would love to hear from you! You can reach out to me via my <b className={styles.embolden}>
                        <Link
                            href="https://www.linkedin.com/in/ennox/"
                            target="_blank"
                            className={styles.links}
                        >LinkedIn</Link>
                    </b> profile or check out my <b className={styles.embolden}>
                        <Link
                            href="https://github.com/ennox-web"
                            target="_blank"
                            className={styles.links}
                        >GitHub</Link>
                    </b> repos for a deeper dive into my experience.
                </span>
            </CustomIntersectionObserver>
        </div>
    )
}
/*

*/