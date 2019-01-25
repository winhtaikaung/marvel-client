import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import history from './utils/history';
import 'sanitize.css/sanitize.css';
import './index.css';
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

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time

}



// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
render()
serviceWorker.unregister();
