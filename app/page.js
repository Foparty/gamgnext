import styles from './page.module.css';
import { projects } from '@/data/data';
import LandingImageItem from '@/components/LandingImageItem/LandingImageItem';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav/Nav';

const getData = () => {
	const data = projects;

	if (data) {
		return data;
	}
	return notFound();
};
export default function Home() {
	const data = getData();
	return (
		<div className={styles.wrapper}>
			<Nav />
			<main className={styles.landingGallery}>
				{data.map((item) => (
					<LandingImageItem key={item.id} data={item} />
				))}
			</main>
		</div>
	);
}
