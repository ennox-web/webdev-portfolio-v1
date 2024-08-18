import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image
                src="/assets/ENNoxTan.png"
                width={280}
                height={100}
                alt="Header logo"
                priority={true}
            />
        </div>
    )
}