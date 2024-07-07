import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
        <Banner imagem="favoritos" />
        <Titulo>Meus Favoritos</Titulo>
        <section className={styles.container}>
            <Card id="2" titulo="Filme 2" capa="https://placehold.it/171x244" />
            </section>
        </>
    )
}

export default Favoritos;