import styles from './about.module.css';
import Nav from '@/components/Nav/Nav';
import { smimg50 } from '@/public/600';
import Image from 'next/image';

const About = () => {
	return (
		<div className={styles.aboutWrapper}>
			<Nav />
			<article className={styles.about}>
				<h2>El viaje de la mirada</h2>
				<p>Gabriel Asdrúbal fotografía la arquitectura desde el interior y los interiores desde la arquitectura de su mirada. Una perspectiva ágil y flexible que no está dominada por los cánones de la convención. </p>
				<p>Una arquitectura atemporal que queda congelada, atrapada en una sucesión de instantes visuales, de vivencias ópticas.</p>
				<p>Su ojo fotográfico captura los espacios y las intersecciones de las estructuras desde la intuición, llevado por su sensibilidad caleidoscópica y múltiple.</p>
				<p>La luz transforma los matices del color y el aire restante multiplica, en cada perspectiva, una atmósfera metafórica irrepetible.</p>
				<p>
					Como diseñador, conoce los valores de la funcionalidad, de mostrar lo evidente sin efectos, sin artificiosidad, sus imágenes están llenas de verdad, pero no exentas de poesía. Unos tintes poéticos que se desvelan especialmente en su acercamiento al detalle, pequeñas partes del todo que
					conforman la esencia del conjunto, piezas de un engranaje que al final siempre cuadra, de lo particular a lo general. No hay términos medios, ni grises, su blanco y negro es contundente, concluyente y sensitivo al mismo tiempo, en todo momento logra estimular el ímpetu de observar desde
					otra perspectiva, con otro enfoque.
				</p>
				<p>El color de sus fotografías puntualiza cada relato fotográfico, el hilo conductor de los disparos de Gabriel Asdrúbal.</p>
				<p>
					Su condición de viajero impenitente le posiciona para enhebrar las historias en las diferentes trayectorias, los relatos se van solapando uno a uno. Su objetivo logra transmitir con nitidez las relaciones de los edificios con sus contextos, los rincones detallados en un tiempo determinado.
				</p>
				<p>
					La fotografía a menudo está ligada a la arquitectura desde un punto de vista documental, en el caso de Gabriel el resultado es descriptivo y también narrativo, su lenguaje visual nos hace sumergirnos en las experiencias de su percepción. Desde su lado más personal, siempre logra una visión
					conceptual integrada en el ambiente retratado.
				</p>
				<small className={styles.author}>Marisa Santamaría</small>
				<Image src={smimg50} alt='Gabriel Asdrubal taking a shot at Chicago skyline at night' width={500} height={500} />
			</article>
		</div>
	);
};

export default About;
