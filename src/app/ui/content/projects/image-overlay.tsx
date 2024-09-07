import { createPortal } from 'react-dom';
import styles from './image-overlay.module.css';
import { ImageDefinition } from './image-card';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ImageOverlay({onClose, image}: {onClose: () => void, image: string}) {

    const overlayContent = (
        <div className={styles.imageOverlayContainer} onClick={onClose}>
            <div className={styles.overlay}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={image}
                        alt="test image"
                        className={styles.image}
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
    return createPortal(
        overlayContent,
        document.body
    );
}