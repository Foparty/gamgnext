import styles from './MyImageContainer.module.css';
import Image from 'next/image';

const MyImageContainer = ({ altText, object, img }) => {
	return <Image className={styles.img} style={{ objectFit: object }} src={img} alt={`image of ${altText}`} priority={true} />;
};
export default MyImageContainer;
