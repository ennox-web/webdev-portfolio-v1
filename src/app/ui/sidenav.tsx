"use client"

import Link from "next/link"
import Logo from "./logo"
import styles from "./sidenav.module.css"
import transitionStyles from "../styles/states.module.css"
import NavLinks from "./nav-links"
import { useState } from "react"


export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className={isOpen ? `${styles.sidenavContent} ${styles.openSideNav}` : `${styles.sidenavContent} ${styles.closeSideNav}`}>
                <div className={styles.menuButtons}>
                    {
                        !isOpen && <button className={`${styles.sidenavButton} ${styles.openBtn}`} onClick={openMenu}>
                            <span className="material-symbols-outlined">menu</span>
                            </button>
                    }
                    
                    {
                        isOpen && <button className={`${styles.sidenavButton} ${styles.closeBtn}`} onClick={closeMenu}>
                            <div className={styles.icon}><span className="material-symbols-outlined">close</span></div>
                        </button>
                    }

                </div>

                <Logo />
                <div className={styles.sidenavlinks}>
                    <NavLinks />
                    <div className={styles.filler}></div>
                </div>
            </div>
        </div>
    )
}
