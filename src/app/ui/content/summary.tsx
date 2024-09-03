import BodyTitleSeparator from "./body-title-separator";
import styles from "./summary.module.css";

export default function Summary() {
    const summary: string = "test";
    return (
        <div className={styles.summaryContainer}>
            <div>
                <h3>About Me</h3>
                <BodyTitleSeparator />
            </div>
            <div>
                {summary}
            </div>
        </div>
    )
}