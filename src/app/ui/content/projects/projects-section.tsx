import BodyTitleSeparator from '../body-title-separator';
import { ProjectDataInterface } from './project-block';
import styles from './projects-section.module.css';

const projects: ProjectDataInterface[] = [
    
]

export default function ProjectsSection() {
    return (
        <div className={styles.projectsContainer}>
            <BodyTitleSeparator title="Projects" />
        </div>
    )
}