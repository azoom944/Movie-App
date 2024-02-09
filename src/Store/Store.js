// store/store.js
import { createStore } from 'redux';
import rootReducer from './Rducers/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const myStore = createStore(rootReducer, composeWithDevTools());

export default myStore;
