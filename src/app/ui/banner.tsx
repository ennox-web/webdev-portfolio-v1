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

		mainCanvasRef.current = new StarScape(canvasRef.current);

		requestAnimationFrame(animate);
	}, [])

	return (
		<div className={styles.test}>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<Image
						src="/assets/ENNoxTanResize.png"
						alt="Header logo"
						className={`${styles.logo} ${styles.fadeInLogo}`}
						priority={true}
						fill
					/>
				</div>
				
				<div className={styles.canvasContainer}>
					<div className={styles.glowEffect}></div>
					<canvas ref={canvasRef} className={styles.stars}></canvas>
				</div>
			</div>

		</div>
	)
}
