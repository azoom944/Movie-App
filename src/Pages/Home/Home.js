import React, { useEffect, useState, useMemo, useContext } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../Store/Actions/Actions';
import MovieCard from '../../Components/MovieCard';
import { LanguageContext } from '../../Context/langContext';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isMovieInFavorites = useMemo(
    () => (movieId) => favorites.some((movie) => movie.id === movieId),
    [favorites]
  );
  const {contextLang, setContextLang} = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?Language=${contextLang}&api_key=9e4e9d1fa393192fe1238beb783e831a`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [currentPage,contextLang]);

  const handleAddToFavorite = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorite = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className='container'>
      <div className='row'>
        {movies.map((movie) => (
          <div key={movie.id} className='col'>
            <MovieCard
              name={movie.title}
              path={`/MovieDetailsPage/${movie.id}`}
              movie={movie}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              overview={movie.overview}
              isFavorite={isMovieInFavorites}
              onAddToFavorite={handleAddToFavorite}
              onRemoveFromFavorite={ handleRemoveFromFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
