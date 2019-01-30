import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import history from './utils/history';
import './index.css';
import 'antd/dist/antd.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
// Import all the third party stuff
import configureStore from './configureStore';
import { Switch } from 'react-router-dom';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <App />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};


render();
serviceWorker.unregister();
