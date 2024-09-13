import styles from './image-cards-list.module.css';
import ImageCard, { ImageDefinition } from "./image-card"
import { useState } from 'react';
import ImageOverlay from './image-overlay';
import { ImageDataInterface } from './image-card';

export default function ImageCardsList({images, dataCy}: {images: ImageDataInterface[], dataCy?: string}) {
    const imageDefinitions = images.map((image, index) => {
        return new ImageDefinition(image, index);
    })

    const [imageList, setImageList] = useState(imageDefinitions);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(imageList[0]);

    const onClickShuffle = (image: ImageDefinition) => {
        if(image.index != 0) {
            const updateImageList = [...imageList];
            const imageCard = updateImageList[image.index];
            updateImageList.splice(image.index, 1);
            updateImageList.unshift(imageCard);
            updateImageList.forEach((image, index) => {
                image.recalculateStyles(index);
            });
            setImageList([...updateImageList]);
        }
    }

    const onClickOpen = (image: ImageDefinition) => {
        setActiveImage(image);
        setIsOverlayOpen(true);
    }

    return (
        <div className={styles.imageListContainer}>
            {
                imageList.map((image) => {
                    return (
                        <ImageCard imageDefinition={image} onClickShuffle={onClickShuffle} onClickOpen={onClickOpen} key={image.image.src} dataCy={dataCy} />
                    )
                })
            }
            <div id="image-overlay-root">
                { isOverlayOpen &&
                    <ImageOverlay onClose={() => setIsOverlayOpen(false)} image={activeImage.image} dataCy="image-overlay" />
                }
            </div>
        </div>
    )
}
