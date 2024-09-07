import Image from "next/image";
import styles from './image-card.module.css';
import { MouseEvent, useEffect, useState } from "react";

export class ImageDefinition {
    image: string;
    styles: {"hover": any, "noHover": any} = {"hover": {}, "noHover": {}};
    index: number;
    default: string = "noHover";

    constructor(imagePath: string, index: number) {
        this.index = index;
        this.image = imagePath;
        this.recalculateStyles(index);
    }

    recalculateStyles(index: number) {
        this.index = index;

        const rotation: number = this.index * -11;
        const translateX: number = this.index * -10;
        const translateY: number = this.index * -15;
        const hoverTranslateY = translateY - 50;

        this.styles.noHover = {
            "transform": `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
            "zIndex": `calc(10 - ${this.index})`
        }

        if(index != 0) {
            this.styles.hover = {
                "transform": `rotate(0deg) translate(${translateX}px, ${hoverTranslateY}px)`,
                "zIndex": `calc(10 - ${this.index})`
            }
        }
        else {
            this.styles.hover = this.styles.noHover;
        }
    }
}

export default function ImageCard({image, onClickShuffle, onClickOpen}: {image: ImageDefinition, onClickShuffle: (image: ImageDefinition) => void, onClickOpen: (image: ImageDefinition) => void}) {
    const [style, setStyle] = useState(image.styles.noHover);

    useEffect(() => {
        setStyle(image.styles.noHover);
    }, [image.styles.noHover]);

    const onHover = () => {
        setStyle(image.styles.hover);
    }

    const onLeaveHover = () => {
        setStyle(image.styles.noHover);
    }

    const onClickDefault = () => {
        if(image.index == 0) onClickOpen(image);
        else onClickShuffle(image);
    }

    return (
        <div className={`${styles.imageContainer}`} style={style} onClick={onClickDefault} onMouseEnter={onHover} onMouseLeave={onLeaveHover}>
            <Image 
                src={image.image} 
                alt="test image"
                className={styles.image}
                fill={true}
            />
        </div>
    )
}
