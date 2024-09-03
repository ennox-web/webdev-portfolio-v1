import MenuLinks from "./menu-links";
import styles from "./menu.module.css";
import Socials from "./socials";


export default function Menu() {
    const name: string = "Emily Nox";
    const position: string = "Full Stack Engineer";
    const summary: string = `Summary of experience/tagline.

We have always done things a little differently. Some would say the hard way, we would say the right way. The OLD FASHIONED line celebrates top quality ingredients and preparation by hand to create an all-natural* beef jerky like no other.`;

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <h1>{name}</h1>
                <h3>{position}</h3>
                <p className={styles.summary}>{summary}</p>

                <div className={styles.menuItems}>
                    <MenuLinks />
                </div>

                <div className={styles.socials}>
                    <Socials />
                </div>
            </div>
        </div>
    )
}