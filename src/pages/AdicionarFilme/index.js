import React, { useState } from 'react';
import styles from './AdicionarFilme.module.css';
import { useNavigate } from 'react-router-dom';

function AdicionarFilmePage({ onAddMovie }) {
    const [titulo, setTitle] = useState('');
    const [descricao, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.random().toString(36).substr(2, 9), // Gera um ID único
            titulo: titulo,
            descricao: descricao,
            capa: image
        };
        onAddMovie(newMovie).then(() => {
            navigate('/');
        }).catch(err => {
            console.error("Erro ao adicionar filme:", err);
        });
    };



    return (
        <div className={styles.container}>
            <h1>Adicionar Novo Filme</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="image">Imagem (URL):</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Adicionar Filme</button>
            </form>
        </div>
    );
}

export default AdicionarFilmePage;