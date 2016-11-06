import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

import cardList from './modules/cardList';
import session from './modules/session';


const retroApp = combineReducers({
  browser: responsiveStateReducer,
  cardList,
  routing: routerReducer,
  session,
})

export default retroApp;
