"use client"

import { Element } from "react-scroll"
import styles from "./main-body.module.css"
import Summary from "./summary"


export default function MainBody() {
    return (
        <div className={styles.mainBody}>
            <Element name="aboutSection">
                <Summary />
            </Element>
            <Element name="skillSection"></Element>
            <Element name="experienceSection"></Element>
            <Element name="projectSection"></Element>
        </div>
    )
}