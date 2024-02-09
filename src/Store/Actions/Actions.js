// store/actions/favoritesActions.js
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movie) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movie,
});
