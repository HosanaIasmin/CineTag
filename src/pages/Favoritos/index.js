import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos({ favorites, onFavorite, ratings, onRatingChange}) {
    const handleRating = (video, rating) => {
        onRatingChange(video, rating);
    };
    
    return (
        <div>
        <Banner imagem="favoritos" />
        <Titulo className={styles.title}>Meus Favoritos</Titulo>
            <section className={styles.container}>
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    favorites.map((video) => {
                        const rating = ratings[video.id] || 0;

                        return (
                            <div key={video.id} className={styles.cardContainer}>
                                <Card {...video} />
                                <button
                                    onClick={() => onFavorite(video)}
                                    className={styles.favoriteButton}
                                >
                                    Unfavorite
                                </button>
                                <div className={styles.rating}>
                                    <span>Rating: {rating}</span>
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button
                                        key={star}
                                        onClick={() => handleRating(video, star)}
                                        className={styles.ratingButton}
                                    >
                                        {star <= rating ? '★' : '☆'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </section>
      </div>
);
}

export default Favoritos;