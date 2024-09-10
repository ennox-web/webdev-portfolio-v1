"use client"

import { Element } from "react-scroll";
import MenuLinks from "./menu-links";
import styles from "./menu.module.css";
import Socials from "./socials";
import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver";
import { calcSlideUpStyle } from "@/app/lib/helpers";


export default function Menu() {
    const name: string = "Emily Nox";
    const position: string = "Full Stack Engineer";
    const summary: string = `Summary of experience/tagline.

We have always done things a little differently. Some would say the hard way, we would say the right way. The OLD FASHIONED line celebrates top quality ingredients and preparation by hand to create an all-natural* beef jerky like no other.`;

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <CustomIntersectionObserver 
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(0)}
                >
                    <h1>{name}</h1>
                </CustomIntersectionObserver>
                <CustomIntersectionObserver 
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(1)}
                > 
                    <h3>{position}</h3>
                </CustomIntersectionObserver>
                <CustomIntersectionObserver 
                    classes={styles.preAnim}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(2)}
                >
                    <p className={styles.summary}>{summary}</p>
                </CustomIntersectionObserver>

                <div className={styles.menuItems}>
                    <MenuLinks delayOrder={3} />
                </div>

                <CustomIntersectionObserver 
                    classes={`${styles.preAnim} ${styles.socials}`}
                    useStyle={true}
                    bottomIn={calcSlideUpStyle(8)}
                >
                    <Socials />
                </CustomIntersectionObserver>
            </div>
        </div>
    )
}