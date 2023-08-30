import './globals.css';
import Nav from '@/components/Nav/Nav';

export const metadata = {
	title: 'Gabriel Asdrúbal | Architecture and Photography',
	description: 'Work and thought of Gabriel Asdrúbal',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
