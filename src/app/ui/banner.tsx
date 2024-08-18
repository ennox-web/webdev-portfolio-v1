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

	// function shootingStar() {
	// 	const canvas = mainCanvasRef.current;
	// 	if(!canvas) return;

	// 	canvas.createShootingStar();
	// }

	useEffect(() => {
		if (canvasRef.current == null) return;
		if (canvasRef.current.getContext('2d') == null) return;

		mainCanvasRef.current = new StarScape(canvasRef.current);

		requestAnimationFrame(animate);
	}, [])

	return (
		<div className={styles.test}>
			<div className={styles.container}>
				<Image
					src="/assets/ENNoxTan.png"
					width={280}
					height={100}
					alt="Header logo"
					className={`${styles.logo} ${styles.fadeInLogo}`}
					// ref={imageRef}
					priority={true}
				/>
				<div className={styles.canvasContainer}>
					<canvas ref={canvasRef} className={styles.stars}></canvas>
				</div>
			</div>

		</div>
	)
}

/*
// for icons

var canvas = document.createElement('canvas');
canvas.id = "embers";
document.getElementsByTagName('body')[0].appendChild(canvas);

window.Embers = (function Embers() {
	class Particle {
	  constructor(x, y, directionX, directionY, size, color, canvas) {
		this.originalX = x;
		this.originalY = y;
		this.x = x;
		this.y = y;
		this.lastX = x;
		this.lastY = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		//this.color = color;
		this.color = `hsla(20, 1200%, 50%, 1)`;
		this.canvas = canvas;
	  }
	  
	  setLastPosition() {
		this.lastX = this.x;
		this.lastY = this.y;
	  }
  
	  draw() {
		this.canvas.buffer.save();
		this.canvas.buffer.globalCompositeOperation = "lighter";
		this.canvas.line(this.lastX, this.lastY, this.x, this.y, this.size, this.color);
		this.canvas.buffer.restore();
	  }
  
	  update() {
		this.setLastPosition();
		
		if (this.x > this.canvas.width || this.x < 0) {
		  this.x = this.originalX;
		  this.y = this.originalY;
		  this.setLastPosition();
		}
		if (this.y < (this.canvas.height / 2) || this.y < 0) {
		  this.x = this.originalX;
		  this.y = this.originalY;
		  this.setLastPosition();
		}
		this.x += this.directionX;
		this.y += this.directionY;
		this.draw();
	  }
	}
	
	class Canvas {
	  constructor(canvasElement) {
		this.canvas = canvasElement;
		this.ctx = canvasElement.getContext('2d');
		this.frame = document.createElement('canvas');
		this.buffer = this.frame.getContext('2d');
		this.x = 0;
		this.y = 0;
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	  }
	  
	  resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.x = this.frame.width = this.canvas.width;
		this.y = this.frame.height = this.canvas.height;
	  }
	  
	  clear() {
		this.ctx.clearRect(0, 0, this.x, this.y);
		this.buffer.clearRect(0, 0, this.x, this.y);
	  }
	  
	  render() {
		this.ctx.drawImage(this.frame, 0, 0);
	  }
	  
	  drawImage(image, x = 0, y = 0) {
		this.buffer.drawImage(image, x, y);
	  }
	  
	  rect(x, y, w, h, c) {
		this.buffer.fillStyle = c;
		this.buffer.fillRect(x, y, w, h);
	  }
	  
	  line(x1, y1, x2, y2, w, c) {
		this.buffer.beginPath();
		this.buffer.strokeStyle = c;
		this.buffer.lineWidth = w;
		this.buffer.moveTo(x1, y1);
		this.buffer.lineTo(x2, y2);
		this.buffer.stroke();
		this.buffer.closePath();
	  }
  
	  arc(x, y, r, s, e, c) {
		this.buffer.beginPath();
		this.buffer.fillStyle = c;
		this.buffer.arc(x, y, r, s, e);
		this.buffer.fill();
		this.buffer.closePath();
	  }
	}
	
	const mainCanvas = new Canvas(document.getElementById("embers"));
  
	let particlesArray = [];
	let numberOfParticles = (mainCanvas.canvas.height * mainCanvas.canvas.width) / 5000;
	
	
	function init() {
	  window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame ||
		  function( callback ) {
		  window.setTimeout(callback, 1000 / 60);
		};
	  })();
	  
	  // Create particles
	  for(let i = 0; i < numberOfParticles; i++) {
		let size = (Math.random() * 2) + 1;
		//let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
		let x = Math.random() * ((mainCanvas.canvas.width * 0.9) - size) + size;
		let y = mainCanvas.canvas.height;
		let directionX = Math.abs((Math.random() * 5) - 2.5);
		let directionY = (Math.random() * 5) - 3;
		let color = "#FF4500";
  
		particlesArray.push(new Particle(x, y, directionX, directionY, size, color, mainCanvas));
	  }
	  
	  (function animloop() {
		mainCanvas.clear();
		for (let i = 0; i < particlesArray.length; i++) {
		  particlesArray[i].update();
		}
		mainCanvas.render();
  
		window.requestAnimationFrame(animloop);
  
	  })();
	}
	
	if(mainCanvas.canvas) init();
  });
  
  setup.hello = function (name) {
	  return "Hello " + name + ", how are you?";
  };
*/