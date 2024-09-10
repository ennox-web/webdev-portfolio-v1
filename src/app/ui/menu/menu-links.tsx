'use client'

import { useEffect } from 'react';
import styles from './menu-links.module.css'
import { Events, Link, scroller, scrollSpy } from 'react-scroll';
import CustomIntersectionObserver from '@/app/components/CustomIntersectionObserver';
import { calcSlideUpStyle } from '@/app/lib/helpers';

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

function MenuLink({link, style}: {link: MenuItemInterface, style: any}) {
    return (
        <CustomIntersectionObserver
            classes={styles.menulink}
            useStyle={true}
            bottomIn={style}
            key={link.name}
        >
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
        </CustomIntersectionObserver>
    )
}

export default function MenuLinks({delayOrder}: {delayOrder: number}) {
    return (
        <div className={styles.menuItems}>
            {
                links.map((link) => {
                    delayOrder += 1
                    const style = calcSlideUpStyle(delayOrder);

                    return MenuLink({link, style});
                })
            }
        </div>
    )
}