import { createPortal } from 'react-dom';
import styles from './image-overlay.module.css';
import { ImageDataInterface, ImageDefinition } from './image-card';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImageOverlay({onClose, image, dataCy}: {onClose: () => void, image: ImageDataInterface, dataCy?: string}) {
    const [style, setStyle] = useState({});
    const [className, setClassName] = useState(styles.image);
    const [activateZoom, setActivateZoom] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const OnMouseMove = (event: React.MouseEvent) => {
        if(imageRef.current == null || !activateZoom) return;

        const imageRect = imageRef.current.getBoundingClientRect();

        const xOrigin = ((event.pageX - imageRect.left) /imageRect.width) * 100;
        const yOrigin = ((event.pageY - imageRect.top) / imageRect.height) * 100;

        const styleMove = {
            transformOrigin: `${xOrigin}% ${yOrigin}%`,
        }

        setStyle(styleMove);
    }

    const OnClick = () => {
        const activeZoom = !activateZoom
        setActivateZoom(activeZoom);
        if(activeZoom) setClassName(`${styles.image} ${styles.activateZoomIn}`);
        else setClassName(styles.image)
    }

    const overlayContent = (
        <div className={styles.imageOverlayContainer}>
            <div className={styles.overlayBackground} onClick={onClose}/>
            <div className={styles.overlay}>
                <div className={styles.imageContainer}>
                    <Image
                        ref={imageRef}
                        src={image.src}
                        alt={image.alt}
                        className={className}
                        fill={true}
                        style={style}
                        sizes="100vw"
                        onMouseMove={OnMouseMove}
                        onClick={OnClick}
                        data-cy={dataCy}
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