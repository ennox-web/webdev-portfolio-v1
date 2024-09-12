import { createPortal } from 'react-dom';
import styles from './image-overlay.module.css';
import { ImageDefinition } from './image-card';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImageOverlay({onClose, image}: {onClose: () => void, image: string}) {
    const [style, setStyle] = useState({});
    const imageRef = useRef<HTMLImageElement>(null);

    const OnMouseMove = (event: React.MouseEvent) => {
        if(imageRef.current == null) return;

        const imageRect = imageRef.current.getBoundingClientRect();

        const xOrigin = ((event.pageX - imageRect.left) /imageRect.width) * 100;
        const yOrigin = ((event.pageY - imageRect.top) / imageRect.height) * 100;

        const styleMove = {
            transformOrigin: `${xOrigin}% ${yOrigin}%`,
        }

        setStyle(styleMove);
    }

    // const OnTouchMove = (event: React.TouchEvent) => {
    //     if(imageRef.current == null) return;

    //     const imageRect = imageRef.current.getBoundingClientRect();

    //     const xOrigin = ((event.touches[0].pageX - imageRect.left) /imageRect.width) * 100;
    //     const yOrigin = ((event.touches[0].pageY - imageRect.top) / imageRect.height) * 100;

    //     const styleMove = {
    //         transformOrigin: `${xOrigin}% ${yOrigin}%`,
    //         transform: "scale(2.4)"
    //     }

    //     setStyle(styleMove);
    // }

    // const OnTouchEnd = () => {
    //     setStyle({
    //         transform: "scale(1)"
    //     });
    // }

    const overlayContent = (
        <div className={styles.imageOverlayContainer} onClick={onClose}>
            <div className={styles.overlay}>
                <div className={styles.imageContainer}>
                    <Image
                        ref={imageRef}
                        src={image}
                        alt="test image"
                        className={styles.image}
                        fill={true}
                        style={style}
                        sizes="100vw"
                        onMouseMove={OnMouseMove}
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