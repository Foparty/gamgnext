import styles from './LandingImageItem.module.css';
import Link from 'next/link';
import MyImageContainer from '@/components/MyImageContainer/MyImageContainer';

const LandingImageItem = ({ data }) => {
	return (
		<>
			<Link className={`${data.col} ${styles.imgcontainer}`} href={`/photography/${data.url}`}>
				<MyImageContainer img={data.cover} altText={data.title} object={'cover'} />
			</Link>
			<div className={styles.textcontainer}>
				<Link className={styles.title} href={data.url}>
					{data.title}
				</Link>
				<small className={styles.location}>{data.location}</small>
			</div>
		</>
	);
};
export default LandingImageItem;
