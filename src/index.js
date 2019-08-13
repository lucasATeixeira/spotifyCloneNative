import './config/ReactotronConfig';
import './config/StatusBarConfig.js';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import Player from './components/Player';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Player />
    </Provider>
  );
}
