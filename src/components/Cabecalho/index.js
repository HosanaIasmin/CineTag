import { Link } from 'react-router-dom';
import logo from './logoFilmeFlix.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'components/CabecalhoLink';
import MovieSearch from 'components/MovieSearch/MovieSearch';


function Cabecalho({onSearch}){
    return (
       <header className={styles.cabecalho}>
        <Link to="./">
         <img className={styles.logo}src={logo} alt="Logo do site" />
         </Link>
        <nav>
           <CabecalhoLink url="./">
            Home
           </CabecalhoLink>
              <CabecalhoLink url="./Favoritos">
                Favoritos
                </CabecalhoLink>
                <CabecalhoLink url="./DetalhesFilme">
                  Detalhes do Filme
                </CabecalhoLink>

              
        </nav>
        <MovieSearch onSearch={onSearch} />
       </header>
    )
}

export default Cabecalho;
