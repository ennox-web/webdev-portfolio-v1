import Image from "next/image";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { ImageDataInterface } from "./image-card";
import styles from "./image-overlay.module.css";

export default function ImageOverlay({
    onClose,
    image,
    dataCy,
}: {
    onClose: () => void;
    image: ImageDataInterface;
    dataCy?: string;
}) {
    const [style, setStyle] = useState({});
    const [className, setClassName] = useState(styles.image);
    const [activateZoom, setActivateZoom] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const OnMouseMove = (event: React.MouseEvent) => {
        if (imageRef.current == null || !activateZoom) return;

        const imageRect = imageRef.current.getBoundingClientRect();

        const xOrigin =
            ((event.pageX - imageRect.left) / imageRect.width) * 100;
        const yOrigin =
            ((event.pageY - imageRect.top) / imageRect.height) * 100;

        const styleMove = {
            transformOrigin: `${xOrigin}% ${yOrigin}%`,
        };

        setStyle(styleMove);
    };

    const OnClick = () => {
        const activeZoom = !activateZoom;
        setActivateZoom(activeZoom);
        if (activeZoom)
            setClassName(`${styles.image} ${styles.activateZoomIn}`);
        else setClassName(styles.image);
    };

    const overlayContent = (
        <section className={styles.imageOverlayContainer}>
            <button
                className={styles.overlayBackground}
                onClick={onClose}
                data-cy="image-overlay-bg"
                type="button"
                aria-label="Close"
            />
            <div className={styles.imageOverlay}>
                <button
                    type="button"
                    className={styles.imageButton}
                    onClick={OnClick}
                    aria-label="Zoom"
                >
                    <Image
                        ref={imageRef}
                        src={image.src}
                        alt={image.alt}
                        className={className}
                        fill
                        style={style}
                        sizes="100vw"
                        onMouseMove={OnMouseMove}
                        data-cy={dataCy}
                    />
                </button>
            </div>
            <div className={styles.noticeContainer}>
                <h5 className={styles.notice}>Click anywhere blank to close</h5>
            </div>
        </section>
    );
    return createPortal(overlayContent, document.body);
}
