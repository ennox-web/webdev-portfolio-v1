"use client";

import { useState } from "react";
import Footer from "./components/footer";
import styles from "./page.module.css";
import Banner from "./ui/banner";
import MainBody from "./ui/content/main-body";
import Menu from "./ui/menu/menu";
import SkillOverlay from "./ui/content/skills/skill-overlay";

export default function Home() {
    const [isSkillOverlayOpen, setIsSkillOverlayOpen] = useState(false);
    const [activeSkill, setActiveSkill] = useState("");
    const [activeSkillType, setActiveSkillType] = useState("");

    const onClickSkillOverlay = (skill: string, type: string) => {
        setIsSkillOverlayOpen(true);
        setActiveSkill(skill);
        setActiveSkillType(type);
    };

    const onCloseSkillOverlay = () => {
        setIsSkillOverlayOpen(false);
    };
    return (
        <div className={styles.main}>
            <header>
                <Banner />
            </header>

            <div className={styles.mainContentContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                    <div className={styles.content}>
                        <MainBody onClickSkill={onClickSkillOverlay} />
                        {/* {isSkillOverlayOpen && (
                            <SkillOverlay skill={activeSkill} onClose={onCloseSkillOverlay} />
                        )} */}
                        <SkillOverlay
                            isOpen={isSkillOverlayOpen}
                            skill={activeSkill}
                            skillType={activeSkillType}
                            onClose={onCloseSkillOverlay}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
