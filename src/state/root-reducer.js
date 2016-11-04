import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

import cards from './modules/cards';


const retroApp = combineReducers({
  browser: responsiveStateReducer,
  cards,
  routing: routerReducer,
})

export default retroApp;
