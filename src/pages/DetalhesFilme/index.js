import React from 'react';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import styles from './DetalhesFilme.module.css';

function DetalhesFilme({ favorites, onFavorite, ratings, onRatingChange }) {
    const { id } = useParams();
    const video = videos.find(video => video.id.toString() === id);

    if (!video) {
        return <div>Filme não encontrado</div>;
    }

    const isFavorite = favorites.includes(video);
    const rating = ratings[video.id] || 0;

    const handleRating = (rating) => {
        onRatingChange(video, rating);
    };

    return (
        <div className={styles.container}>
            <h1>{video.titulo}</h1>
            <p>{video.descricao}</p>
            <img src={video.capa} alt={video.titulo} />
            <button onClick={() => onFavorite(video)}>
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
            <div className={styles.rating}>
                <span>Rating: {rating}</span>
                {[1, 2, 3, 4, 5].map(star => (
                    <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={styles.ratingButton}
                    >
                        {star <= rating ? '★' : '☆'}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DetalhesFilme;
