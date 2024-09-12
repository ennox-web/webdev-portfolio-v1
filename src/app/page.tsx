import styles from './page.module.css';
import Banner from "./ui/banner";
import Menu from "./ui/menu/menu";
import MainBody from "./ui/content/main-body";
import Footer from './components/footer';

export default function Home() {

  return (
    <main className={styles.main}>
      <Banner />

      <div className={styles.mainContentContainer}>
        <div className={styles.mainContent}>
          <div className={styles.menu}>
            <Menu />
          </div>
          <div className={styles.content}>
            <MainBody />
          </div>
        </div>
        <Footer />
      </div>

    </main>
  );
}
