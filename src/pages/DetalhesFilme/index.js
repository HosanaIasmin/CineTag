import React from 'react';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import styles from './DetalhesFilme.module.css';

function DetalhesFilme() {
    const { id } = useParams();
    const video = videos.find(video => video.id.toString() === id);

    if (!video) {
        return <div>Filme não encontrado</div>;
    }


    return (
        <div className={styles.container}>
            <h1   className={styles.title}>{video.titulo}</h1>
            <p>Descrição:{video.descricao}</p>
            <p>Ano: {video.ano}</p>
            <p>Duração: {video.duracao}</p>
            <p>Gênero: {video.genero}</p>
            <p>Nota: {video.nota}</p>
            <p>Diretor: {video.diretor}</p>
            <p>Elenco: {video.elenco}</p>

            <img src={video.capa} alt={video.titulo}className={styles.capa} />
    
        </div>
    );
}

export default DetalhesFilme;