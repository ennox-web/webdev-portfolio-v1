"use client"

import Link from "next/link";
import styles from './sidenav.module.css';
import { usePathname } from "next/navigation";

interface LinkInterface {
    name: string;
    href: string;
    icon: string;
}

const links: LinkInterface[] = [
    {
        name: 'Home',
        href: '/',
        icon: 'home'
    }, 
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: 'team_dashboard'
    }
]

function NavLink({ link }: { link: LinkInterface }) {
    const pathname = usePathname();
    if (pathname === link.href) {
        return (
            <Link
                key={link.name}
                href={link.href}
                className={styles.navlink}
            >
                <div className={styles.icon}><span className="material-symbols-outlined">{link.icon}</span></div>
                <div className={styles.line}>{link.name}</div>
            </Link>
        )
    }
    else {
        return (
            <Link
                key={link.name}
                href={link.href}
                className={styles.navlink}
            >
                <div className={styles.icon}><span className="material-symbols-outlined">{link.icon}</span></div>
                {link.name}
            </Link>
        )
    }
}

export default function NavLinks() {
    return (
        <>
            {
                links.map((link) => {
                    return NavLink({ link });
                })
            }
        </>
    )
}
