'use client'

import styles from './menu-links.module.css'
import { Link } from 'react-scroll';

interface MenuItemInterface {
    name: string;
    section: string;
}

const links: MenuItemInterface[] = [
    {
        name: 'About',
        section: 'aboutSection'
    },
    {
        name: 'Skills',
        section: 'skillSection'
    },
    {
        name: 'Experience',
        section: 'experienceSection'
    },
    {
        name: 'Projects',
        section: 'projectSection'
    }
]

function MenuLink({link}: {link: MenuItemInterface}) {
    return (
        <div className={styles.linkname}>
            <Link
                key={link.name}
                to={link.section}
                smooth={true}
                duration = {500}
            >
                <div className={styles.menulink}>
                    <span className={styles.itemIndicator} />
                    <div className={styles.linkName}>
                        <h4>{link.name}</h4>
                        <span className={`material-symbols-outlined ${styles.icon}`}>{'keyboard_double_arrow_right'}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function MenuLinks(){
    return (
        <>
            {
                links.map((link) => {
                    return MenuLink({link});
                })
            }
        </>
    )
}