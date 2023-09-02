import Nav from '@/components/Nav/Nav';
import styles from './page.module.css';
import { projects } from '@/data/data';
import LandingImageItem from '@/components/LandingImageItem/LandingImageItem';
import LandingWordsItem from '@/components/LandingWordsItem/LandingWordsItem';

const getData = () => {
	const data = projects;

	if (data) {
		return data;
	}
	return notFound();
};

export default function Words() {
	const data = getData();
	return (
		<div className='wrapper'>
			<Nav />
			<main className={'landing-gallery nogap'}>
				{data.map((item) => (
					<LandingWordsItem key={item.id} data={item} />
				))}
			</main>
		</div>
	);
}
