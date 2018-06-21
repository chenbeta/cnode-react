import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios, {$http} from 'util/http';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import 'normalize.css';

window.axios = axios;
window.$http = $http;

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
registerServiceWorker();
