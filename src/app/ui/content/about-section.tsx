import BodyTitleSeparator from "./body-title-separator";
import styles from "./about-section.module.css";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";
import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideLeftStyle } from "@/app/lib/helpers";


export default function Summary() {
    const title: string = "About Me";
    return (
        <div className={styles.summaryContainer}>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(0)}
            >
                <BodyTitleSeparator title={title} dataCy="about-title"/>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary1">
                    Hi! My name is <b>Emily Nox</b>, and I am a <b>Software Engineer</b> with 8 years of 
                    professional experience in various roles supporting the PlayStation Plus Cloud Streaming team, from
                    automated testing PlayStation devkits to building containerized live-service web applications.
                </span>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary2">
                    I began my career as a <b>Junior SDET</b> with <b>Sony Interactive Entertainment</b> back in 2016, where
                    I specialized in building automated testing tools for communicating with and recording test data from 
                    PlayStation 3 and PlayStation 4 devkits.
                </span>
            </CustomIntersectionObserver>
            <CustomIntersectionObserver
                rootMargin="0px 0px 0px 400px"
                thresholdValue={0}
                classes={styles.preAnim}
                useStyle={true}
                bottomIn={calcSlideLeftStyle(1)}
            >
                <span className={styles.summary} data-cy="about-summary3">
                    I have since risen the ranks into web development, from <b>Backend</b> to <b>Full Stack</b>, where I
                    focused on building beautiful, robust full-stack features while maintaining a CI/CD pipeline
                    through GitLab for an internal containerized web application for visually reporting and tracking 
                    highly customized automated test performance metrics and statistics.
                </span>
            </CustomIntersectionObserver>
        </div>
    )
}
/*

*/