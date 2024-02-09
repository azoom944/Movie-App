// store/reducers/combineReducers.js
import { combineReducers } from 'redux'; // Make sure it's 'redux', not 'redx'
import favoritesReducer from './Reducer'; // Check the path for correctness

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Add other reducers if needed
});

export default rootReducer;
