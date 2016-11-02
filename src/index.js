import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';


import App from './components/App';
import BoardView from './components/BoardView';
import { configure as configureStore } from './state/store';

import './index.css';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="b/" component={BoardView} />
        <Route path="boards/" component={BoardView} />
        <IndexRoute component={BoardView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
