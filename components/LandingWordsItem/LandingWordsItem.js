import Link from 'next/link';
import styles from './LandingWordsItem.module.css';

const LandingWordsItem = ({ data }) => {
	return (
		<Link className={`${data.col} ${styles.imgcontainer}`} href={`/photography/${data.url}`}>
			<svg viewBox={`0 0 ${data.svgvalue} 16`} className={data.wz}>
				<text x='0' y='12' className={data.fw}>
					{data.title}
				</text>
			</svg>
		</Link>
	);
};

export default LandingWordsItem;
