'use client';
import styles from './Nav.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { links } from '@/data/menulinks';

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

const getData = () => {
	const data = links;

	if (data) {
		return data;
	}
	return notFound();
};

const Nav = () => {
	const [toggled, setToggled] = useState(false);

	const data = getData();
	return (
		<nav className={`${styles.nav} nav`}>
			<h1 className={styles.logo}>
				<Link href='/'>Gabriel Asdrúbal</Link>
			</h1>

			<div className={styles.menu}>
				{data.slice(0, 2).map((item) => (
					<Link style={{ fontWeight: '900' }} key={item.id} href={item.url}>
						{item.title}
					</Link>
				))}
				{data.slice(2, 5).map((item) => (
					<Link style={{ fontWeight: '100' }} key={item.id} href={item.url}>
						{item.title}
					</Link>
				))}
			</div>

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
			{toggled && (
				<motion.div variants={navMotion} animate='visible' initial='hidden' className={styles.mobilemenu}>
					{data.map((item) => (
						<motion.div variants={itemMotion} key={item.id}>
							<Link style={{ fontWeight: '900', textTransform: 'capitalize' }} href={item.url}>
								{item.title}
							</Link>
						</motion.div>
					))}
				</motion.div>
			)}
		</nav>
	);
};

export default Nav;
