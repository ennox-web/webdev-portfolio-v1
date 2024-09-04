import styles from "./body-title-separator.module.css";

export default function BodyTitleSeparator({title}: {title: string}) {
    return (
        <div className={styles.bodyTitle}>
            <h3>{title}</h3>
            <span className={styles.titleSeparator} />
        </div>
    )
}