import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

const retroApp = combineReducers({
  browser: responsiveStateReducer,
  routing: routeReducer,
})

export default retroApp;
