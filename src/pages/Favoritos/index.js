import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos({ favorites, onFavorite}) {
    return (
        <>
        <Banner imagem="favoritos" />
        <Titulo className={styles.title}>Meus Favoritos</Titulo>
        <section className={styles.container}>
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    favorites.map((video) => (
                        <div key={video.id} className={styles.cardContainer}>
                            <Card {...video} />
                            <button
                                onClick={() => onFavorite(video)}
                                className={styles.favoriteButton}
                            >
                                Unfavorite
                            </button>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}

export default Favoritos;