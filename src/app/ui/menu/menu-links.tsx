'use client'

import { useEffect } from 'react';
import styles from './menu-links.module.css'
import { Events, Link, scroller, scrollSpy } from 'react-scroll';

interface MenuItemInterface {
    name: string;
    section: string;
}

const links: MenuItemInterface[] = [
    {
        name: 'About',
        section: 'about'
    },
    {
        name: 'Skills',
        section: 'skills'
    },
    {
        name: 'Experience',
        section: 'experience'
    },
    {
        name: 'Projects',
        section: 'projects'
    }
]

function MenuLink({link}: {link: MenuItemInterface}) {
    return (
        <div className={styles.menulink} key={link.name}>
            <Link
                activeClass={styles.menulinkActive}
                to={link.section}
                smooth={true}
                duration={500}
                containerId='mainBody'
                spy={true}
                hashSpy={true}
                className={styles.linkName}
            >
                <span className={styles.itemIndicator} />
                <h4>{link.name}</h4>
                <span className={`material-symbols-outlined ${styles.icon}`}>{'keyboard_double_arrow_right'}</span>
            </Link>
        </div>
    )
}

export default function MenuLinks(){
    return (
        <div className={styles.menuItems}>
            {
                links.map((link) => {
                    return MenuLink({link});
                })
            }
        </div>
    )
}