import React from "react";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio({searchQuery, favorites, onFavorite, ratings, onRatingChange}) {

    const filteredVideos = videos.filter((video) => 
        video.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleRating = (video, rating) => {
        onRatingChange(video, rating);
    }

    return (
        <>
          
          <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {filteredVideos.map((video) => {
                    // Verificar se o vídeo está nos favoritos
                    const isFavorite = favorites.includes(video);
                    const rating = ratings[video.id] || 0;

                    return (
                        <div key={video.id} className={styles.cardContainer}>
                            <Card {...video} />
                            <button
                                onClick={() => onFavorite(video)}
                                className={styles.favoriteButton}
                            >
                                {isFavorite ? 'Unfavorite' : 'Favorite'}
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
                })}
            </section>
        </>
    );
}

export default Inicio