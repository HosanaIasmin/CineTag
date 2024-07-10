import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
function Card({id, titulo, capa}) {
    return(
        <div className={styles.conatiner}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
        </div>
    )
}

export default Card;