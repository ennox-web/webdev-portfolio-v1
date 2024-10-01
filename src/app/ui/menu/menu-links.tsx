"use client"

import { Link } from "react-scroll"

import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver"
import { calcSlideUpStyle } from "@/app/lib/helpers"

import styles from "./menu-links.module.css"

interface MenuItemInterface {
  name: string
  section: string
  dataCy: string
}

const links: MenuItemInterface[] = [
  {
    name: "About",
    section: "about",
    dataCy: "menu-link-about",
  },
  {
    name: "Skills",
    section: "skills",
    dataCy: "menu-link-skills",
  },
  {
    name: "Experience",
    section: "experience",
    dataCy: "menu-link-experience",
  },
  {
    name: "Projects",
    section: "projects",
    dataCy: "menu-link-projects",
  },
]

function MenuLink({ link, style }: { link: MenuItemInterface; style: any }) {
  return (
    <CustomIntersectionObserver
      classes={`${styles.menulink} ${styles.preAnim}`}
      useStyle
      bottomIn={style}
      key={link.name}
    >
      <Link
        activeClass={styles.menulinkActive}
        to={link.section}
        smooth
        duration={500}
        containerId="mainBody"
        spy
        hashSpy
        className={styles.linkName}
        data-cy={link.dataCy}
      >
        <span className={styles.itemIndicator} />
        <h4>{link.name}</h4>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          keyboard_double_arrow_right
        </span>
      </Link>
    </CustomIntersectionObserver>
  )
}

export default function MenuLinks({ delayOrder }: { delayOrder: number }) {
  return (
    <nav className={styles.menuItems}>
      {links.map((link) => {
        delayOrder += 1
        const style = calcSlideUpStyle(delayOrder)

        return MenuLink({ link, style })
      })}
    </nav>
  )
}
