// Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const Favorites = () => {
  // Retrieve the list of favorites from the Redux state
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites selected.</p>
      ) : (
        <div className="row">
          {favorites.map((movie) => (
            <div key={movie.id} className='col'>
              <MovieCard
                id={movie.id}
                movie={movie}
                name={movie.title}
                path={`/MovieDetailsPage/${movie.id}`}
                // Other props like poster_path, release_date, overview
                isFavorite={true} // Set isFavorite to true in the Favorites page
              />
            </div>
          ))}
        </div>
      )}

      <p>Total Favorites: {favorites.length}</p>
    </div>
  );
};

export default Favorites;
