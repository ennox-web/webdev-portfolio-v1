"use client"

import { useRef, useEffect, useState } from "react";
import styles from './banner.module.css';
import Image from "next/image";
import StarScape from "../lib/starscape";

export default function Banner() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const mainCanvasRef = useRef<StarScape | null>(null);

	function animate() {
		const canvas = mainCanvasRef.current;
		if (!canvas) return;

		canvas.animLoop();
		requestAnimationFrame(animate);
	}

	useEffect(() => {
		if (canvasRef.current == null) return;
		if (canvasRef.current.getContext('2d') == null) return;
        const checkReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

		mainCanvasRef.current = new StarScape(canvasRef.current, checkReduced);

		requestAnimationFrame(animate);
	}, [])

	return (
		<div className={styles.test}>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<Image
						src="/assets/ENNoxTanResize.png"
						alt="E.N. Nox logo image over an animated starry sky"
						className={`${styles.logo} ${styles.fadeInLogo}`}
						priority={true}
						sizes="50vw"
						fill
						data-cy="banner-logo"
					/>
				</div>

				<div className={styles.canvasContainer}>
					<div className={styles.glowEffect}></div>
					<canvas ref={canvasRef} className={styles.stars} data-cy="starry-canvas"></canvas>
				</div>
			</div>

		</div>
	)
}
