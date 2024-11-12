import styles from "./footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const years = currentYear !== 2024 ? `2024-${currentYear}` : "2024";

    return (
        <div className={styles.footer}>
            <span>Copyright © {years} E.N. Nox. All rights reserved.</span>
        </div>
    );
}
