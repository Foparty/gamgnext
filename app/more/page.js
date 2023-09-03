import Nav from '@/components/Nav/Nav';
import styles from './More.module.css';
import Image from 'next/image';
import { more1, more2, more3, more4, more5 } from '@/public/more';

const More = () => {
	return (
		<div className={styles.moreWrapper}>
			<Nav />
			<main className={styles.more}>
				<span>--</span>
				<p>
					Qué satisfacción es cruzarse con Entes Brillantes. Personas, edificios, objetos, sensaciones… La vida emite luz, simplemente hay que estar abierto a percibirla, por muy sombrío que pueda ser el entorno. Otras veces te puede cegar, al contrario, por muy lúgubre que sea la mirada de uno.
				</p>
				<p>Aquí me centraré en los entes arquitectónicos y espaciales, con pinceladas puntuales humanas en la estricta aparición en los encuadres, aunque todas las experiencias sin excepción, han sido movidas por personas, personas especiales.</p>
				<p>
					Mi mirada se desvía hacia las cosas luminosas, no necesariamente una luminancia medida en luxes, sino a una luminosidad que me hace sentir algo detrás de las orejas, una sensación de curiosidad y observación, que se materializa al coger la máquina de fotos y me hace cosquillas al
					contemplar las cosas. El disparo fotográfico es una manera de recordar y enseñar esa experiencia. Otras se viven sin disparo fotográfico ni máquina y se recuerdan y enseñan de modos diferentes.
				</p>
				<p>
					Anormalmente, no se es justo con la hermosura e interés de nuestro alrededor. Una manera que tengo de intentar ir mejorando en un aspecto de la vida tan importante como la justicia, y otros igualmente capitales como el entorno y sus atractivos, es tomarme la calma de analizarlo durante un
					mínimo de tiempo, y ello me lo garantiza el mirar a través de un objetivo. Por supuesto que la principal manera de experimentarlo es sintiéndolo y viviéndolo, sin necesidad de un artefacto entre medias de la realidad y de los ojos, pero ello me da muchas garantías, y es que a veces nos
					despistamos, y me despisto. Nos dejamos despistar.
				</p>
				<p>
					Devolvámosles a los Entes Brillantes algo de lo que emiten. Seamos agradecidos e igualmente generosos… con las personas, con los edificios, con los objetos, con la naturaleza, con los sentimientos… y brillemos nosotros también y dediquemos el tiempo adecuado de análisis, de diálogo, de
					observación, de disfrute, de esfuerzo…
				</p>
				<p>Se muestran 30 espacios con maravillosas distracciones arquitectónicas, entre ellos 3 ó 4 pinceladas humanas a la altura de las circunstancias y 25 detalles brillantes.</p>
				<p>
					<strong>Brillar</strong> / emitir o reflejar luz / sobresalir en talento, hermosura / destacar / distinguirse / lucir / brillo / lucimiento / gloria / luz que refleja o emite un cuerpo / <strong>brillante</strong> / admirable / sobresaliente en su línea / magnífico / genial / excelente
				</p>
				<span>--</span>
				<div className={styles.firstgroup}>
					<Image src={more1} alt='Front of Entes Brillantes booklet' width={500} height={500} />
					<Image src={more2} alt='Entes Brillantes booklet' width={500} height={500} />
					<Image src={more3} alt='Entes Brillantes booklet' width={500} height={500} />
				</div>
				<span>--</span>
				<p>
					El Frontalismo es una manera de dirigirte a la vida. En perpendicular y de manera directa a ella. Con una mirada sincera, sin temor o alegría de que se sepa lo que no se esconde detrás de la misma. En el frontalismo, podrían sobrar las palabras, primar las acciones y las direcciones e
					intensidades con las que uno se enfrenta a cualquier cosa, con las que uno “mira” a cualquier cosa, y sobre todo persona… Aunque las cosas también te “miran”… objetos, situaciones…
				</p>
				<p>
					Mirar / ver / observar / otear / contemplar / atisbar / examinar / curiosear / pensar / reflexionar / considerar / apuntar / dirigirse / El punto de vista central de cada vivencia, en el que dicha vivencia, veía directamente lo que había en mi interior, tras mi mirada. proteger / amparar /
					atañer / concernir / tocar / pertenecer / lindar / dar
				</p>
				<span>…</span>
				<p className={styles.nomargin}>Como decía, en el frontalismo, las palabras podrían sobrar o ser redundantes.</p>
				<p className={styles.nomargin}>La formalidad de estos 34 frontalimos, es eso mismo, todo lo anterior… discriminado en este caso, por una perspectiva de imagen frontal.</p>
				<p className={styles.nomargin}>El punto de vista central de cada vivencia, en el que dicha vivencia, veía directamente lo que había en mi interior, tras mi mirada.</p>
				<span>--</span>
				<div className={styles.secondgroup}>
					<Image src={more4} alt='Front of Entes Brillantes booklet' width={500} height={500} />
					<Image src={more5} alt='Entes Brillantes booklet' width={500} height={500} />
				</div>
			</main>
		</div>
	);
};

export default More;
