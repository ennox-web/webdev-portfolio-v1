import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.mainbody}>
            <main className={styles.mainpage}>{children}</main>
        </div>
    );
}
