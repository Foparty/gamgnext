'use client';
import styles from './Nav.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navMotion = {
	visible: {
		opacity: 1,

		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
	},
};
const itemMotion = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 1, x: 0 },
};

const Nav = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [toggled, setToggled] = useState(false);
	useEffect(() => {
		// Function to update the windowWidth state
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Add event listener to window resize event
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // Empty dependency array to run the effect only once

	return (
		<nav className={`${styles.nav} nav`}>
			<h1 className={styles.logo}>
				<Link href='/'>Gabriel Asdrúbal</Link>
			</h1>
			{windowWidth > 768 && (
				<div className={styles.menu}>
					<a href='/'>Home</a>
					<a href='/about'>about</a>
					<a href='/services'>services</a>
					<a href='/contact'>contact</a>
				</div>
			)}
			{windowWidth < 768 && (
				<div onClick={() => setToggled((prev) => !prev)} className={styles.hamburguer}>
					<motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}></motion.span>
					<motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? 0 : 0 }}></motion.span>
					<motion.span
						animate={{
							rotateZ: toggled ? 45 : 0,
							y: toggled ? -8 : 0,
							x: toggled ? -4 : 0,
							opacity: toggled ? 0 : 1,
						}}
					></motion.span>
				</div>
			)}

			{toggled && windowWidth < 1200 && (
				<motion.div variants={navMotion} animate='visible' initial='hidden' className={styles.mobilemenu}>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>Home</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>Work</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>Words</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>About</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>Info</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>...</Link>
					</motion.div>
					<motion.div variants={itemMotion}>
						<Link href={'/'}>Photography</Link>
					</motion.div>
				</motion.div>
			)}
		</nav>
	);
};

export default Nav;
