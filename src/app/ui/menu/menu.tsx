"use client"

import { Element } from "react-scroll";
import MenuLinks from "./menu-links";
import styles from "./menu.module.css";
import Socials from "./socials";
import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideUpStyle } from "@/app/lib/helpers";


export default function Menu() {
    const name: string = "Emily Nox";
    const position: string = "Software Engineer";
    const summary: string = "Software engineer with 8 years of professional experience who enjoys working the full stack from complex backends to responsive frontends.";

    return (
        <div className={styles.menuContainer} data-cy="menu-container">
            <div className={styles.menu}>
                <CustomIntersectionObserver 
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(0)}
                >
                    <h1 data-cy="menu-full-name">{name}</h1>
                </CustomIntersectionObserver>

                <div className={styles.position}>
                    <CustomIntersectionObserver 
                        classes={`${styles.preAnim} ${styles.positionMain}`}
                        useStyle={true}
                        bottomIn={calcSlideUpStyle(1)}
                    > 
                        <h3 data-cy="menu-job-position">{position}</h3>
                    </CustomIntersectionObserver>
                    <div className={styles.positionSubContainer}>
                        <div className={styles.positionSub}>
                            <CustomIntersectionObserver 
                                classes={`${styles.preAnim}`}
                                useStyle={true}
                                bottomIn={calcSlideUpStyle(1)}
                            > 
                                <h5 data-cy="menu-job-sub1">Frontend</h5>
                            </CustomIntersectionObserver>
                            <CustomIntersectionObserver 
                                classes={`${styles.preAnim}`}
                                useStyle={true}
                                bottomIn={calcSlideUpStyle(1)}
                            > 
                                <h5 data-cy="menu-job-sub2">Backend</h5>
                            </CustomIntersectionObserver>
                        </div>
                        <CustomIntersectionObserver 
                            classes={`${styles.preAnim}`}
                            useStyle={true}
                            bottomIn={calcSlideUpStyle(1)}
                        > 
                            <h5 data-cy="menu-job-sub3">Full Stack</h5>
                        </CustomIntersectionObserver>
                    </div>
                </div>

                <CustomIntersectionObserver 
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(2)}
                >
                    <p className={styles.summary} data-cy="menu-summary">{summary}</p>
                </CustomIntersectionObserver>

                <div className={styles.menuItems}>
                    <MenuLinks delayOrder={3} />
                </div>

                <CustomIntersectionObserver 
                    classes={`${styles.preAnim} ${styles.socials}`}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(3)}
                >
                    <Socials />
                </CustomIntersectionObserver>
            </div>
        </div>
    )
}