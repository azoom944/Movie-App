// MovieCard.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Store/Actions/Actions';

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Use local state for isFavorite
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(props.id));
    } else {
      dispatch(addToFavorites({
        id: props.id,
        title: props.name,
      }));
    }

    // Update local state
    setIsFavorite(!isFavorite);
  };

  const isFavoritesRoute = history.location.pathname === '/favorites';

  return (
    <div className="card mb-5 mt-5 " style={{ width: '16em', height: '20rem' }}>
      <Link to={props.path}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
          className="card-img-top rounded-start "
          style={{ height: '20rem', objectFit: 'cover' }}
        />
      </Link>
 
      <h6 className="card-title fs-5 mb-0">{props.name}</h6>
      {!isFavoritesRoute && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
          <span
            className={`text-warning ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}
            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            onClick={handleToggleFavorite}
          ></span>
          <span style={{ marginLeft: '0.5rem' }}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
