import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// create a Saga middleware with a list of Sagas to run
// connect the Saga middleware to the Redux store
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './reducers/index';
import rootSaga from './sagas/Sagas';
import 'regenerator-runtime/runtime';
import registerServiceWorker from './registerServiceWorker';
import Grid from '@material-ui/core/Grid';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
