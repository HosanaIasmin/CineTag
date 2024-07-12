import Cabecalho from "components/Cabecalho";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "components/Rodape";
import Favoritos from "./pages/Favoritos";
import DetalhesFilme from "pages/DetalhesFilme";
import Container from "components/Container";
import { useState } from "react";

function AppRoutes(){

  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFavorite = (movie) => {
    setFavorites((prevFavorites) =>{
      if (prevFavorites.includes(movie)){
        return prevFavorites.filter((fav) => fav !== movie);
      }else{
        return [...prevFavorites, movie];
      }
    });
    };

    const handleRatingChange = (movie, rating) => {
      setRatings(prevRatings => ({
        ...prevRatings,
        [movie.id]: rating
      }));
    };
  

    return(
        <BrowserRouter>
        <Cabecalho onSearch={handleSearch} />
        <Container>
        <Routes>
            
        <Route path="/" element={<Inicio 
            searchQuery={searchQuery} 
            favorites={favorites} 
            onFavorite={handleFavorite} 
            ratings={ratings}
            onRatingChange={handleRatingChange}
          />} />
          <Route path="/favoritos" element={<Favoritos 
            favorites={favorites} 
            onFavorite={handleFavorite} 
            ratings={ratings}
            onRatingChange={handleRatingChange}
          />} />

          <Route 
            path="/detalhes/:id" 
            element={<DetalhesFilme 
              favorites={favorites} 
              onFavorite={handleFavorite} 
              ratings={ratings}
              onRatingChange={handleRatingChange}
            />} 
          />  
            
         </Routes>
       </Container>
         <Rodape />
            
            </BrowserRouter>
    )
}

export default AppRoutes;