import Image from "next/image"
import { useEffect, useState } from "react"

import CustomIntersectionObserver from "@/app/components/CustomIntersectionObserver"

import styles from "./image-card.module.css"

export interface ImageDataInterface {
  src: string
  alt: string
}

export class ImageDefinition {
  image: ImageDataInterface

  styles: { hover: any; noHover: any } = { hover: {}, noHover: {} }

  index: number

  default: string = "noHover"

  constructor(image: ImageDataInterface, index: number) {
    this.index = index
    this.image = image
    this.recalculateStyles(index)
  }

  recalculateStyles(index: number) {
    this.index = index

    const rotation: number = this.index * -11
    const translateX: number = this.index * -10
    const translateY: number = this.index * -15
    const hoverTranslateY = translateY - 50

    this.styles.noHover = {
      opacity: "1",
      transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
      zIndex: `calc(10 - ${this.index})`,
    }

    if (index !== 0) {
      this.styles.hover = {
        opacity: "1",
        transform: `rotate(0deg) translate(${translateX}px, ${hoverTranslateY}px)`,
        zIndex: `calc(10 - ${this.index})`,
      }
    } else {
      this.styles.hover = this.styles.noHover
    }
  }
}

export default function ImageCard({
  imageDefinition,
  onClickShuffle,
  onClickOpen,
  dataCy,
}: {
  imageDefinition: ImageDefinition
  onClickShuffle: (image: ImageDefinition) => void
  onClickOpen: (image: ImageDefinition) => void
  dataCy?: string
}) {
  const [style, setStyle] = useState(imageDefinition.styles.noHover)
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const checkReduced =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
    setIsReduced(checkReduced)
    setStyle(imageDefinition.styles.noHover)
  }, [imageDefinition.styles.noHover])

  const onHover = () => {
    if (!isReduced) setStyle(imageDefinition.styles.hover)
  }

  const onLeaveHover = () => {
    setStyle(imageDefinition.styles.noHover)
  }

  const onClickDefault = () => {
    if (imageDefinition.index === 0) onClickOpen(imageDefinition)
    else onClickShuffle(imageDefinition)
  }

  if (imageDefinition.image.src !== "blank") {
    return (
      <CustomIntersectionObserver
        thresholdValue={0}
        classes={`${styles.imageContainer} ${styles.preAnim}`}
        useStyle
        useStyleWithReduced
        bottomIn={style}
        onMouseEnter={onHover}
        onMouseLeave={onLeaveHover}
      >
        <button
          type="button"
          onClick={onClickDefault}
          className={styles.container}
        >
          <Image
            src={imageDefinition.image.src}
            alt={imageDefinition.image.alt}
            className={styles.image}
            sizes="20vw"
            fill
            data-cy={dataCy}
          />
        </button>
      </CustomIntersectionObserver>
    )
  }

  return <div className={styles.blankContainer} />
}
