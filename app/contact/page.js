import Image from 'next/image';
import styles from './Contact.module.css';
import Nav from '@/components/Nav/Nav';
import { contact } from '@/data/contact';
import ContactGroup from '@/components/ContactGroup/ContactGroup';

const Contact = () => {
	return (
		<div className={styles.contactWrapper}>
			<Nav />
			<main className={styles.contact}>
				{contact.map((item) => (
					<ContactGroup key={item.id} data={item} />
				))}
			</main>
		</div>
	);
};

export default Contact;
