import SideNav from "../ui/sidenav";
import styles from './Layout.module.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.mainbody}>
                {/* <div>
                    <div>
                        <SideNav />
                    </div>
                </div> */}

                <main className={styles.mainpage}>{children}</main>
            </div>
        </>
    )
}