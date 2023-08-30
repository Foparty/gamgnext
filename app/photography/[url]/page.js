import styles from './page.module.css';
import { projects } from '@/data/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import MyImageContainer from '@/components/MyImageContainer/MyImageContainer';
import Nav from '@/components/Nav/Nav';

export async function generateMetadata({ params }) {
	const projectData = projects.find((item) => item.url === params.url);
	const project = await projectData;

	return {
		title: `Gabriel Asdrúbal | proyecto: ${project.title}`,
		description: `${project.title} `,
	};
}

const getData = (url) => {
	const data = projects.find((item) => item.url === url);

	if (data) {
		return data;
	}
	return notFound();
};

const getNextPage = (e) => {
	const nextPage = projects.find((item) => item.id === e + 1);
	return nextPage.url;
};
const getPreviousPage = (e) => {
	const previousPage = projects.find((item) => item.id === e - 1);
	return previousPage.url;
};

const disableBtn = (e) => {
	const currentPage = projects.find((item) => item.id === e);
};

const Page = ({ params }) => {
	const data = getData(params.url);

	return (
		<div className='wrapper-page'>
			<Nav />
			<div className={'img-container'}>
				{data.id !== 1 && <Link className={styles.backbtn} href={getPreviousPage(data.id)}></Link>}
				{data.id <= projects.length - 1 && <Link className={styles.nextbtn} href={getNextPage(data.id)}></Link>}
				<MyImageContainer object={'contain'} img={data.hdimg} altText={data.title} />
			</div>
			<section className={'page-title'}>
				<h1 className={styles.title}>{data.title}</h1>
			</section>
			<section className={'page-data'}>
				<h1 className={styles.titlexl}>{data.title}</h1>
				<p>{data.location}</p>
				<p>{data.date}</p>
				<p>{data.shot}</p>
			</section>
			<section className={'page-description'}>
				{data.text.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</section>
		</div>
	);
};
export default Page;
