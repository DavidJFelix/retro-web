import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

import cardList from './modules/cardList';


const retroApp = combineReducers({
  browser: responsiveStateReducer,
  cardList,
  routing: routerReducer,
})

export default retroApp;
