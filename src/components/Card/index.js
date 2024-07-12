import styles from './Card.module.css'
import { Link } from 'react-router-dom';
function Card({id, titulo, capa}) {
    return(
        <div className={styles.conatiner}>
            <Link to={`/detalhes/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa} />
            </Link>
            <h2>{titulo}</h2>
        </div>
    )
}

export default Card;