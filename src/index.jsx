import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './_store/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
