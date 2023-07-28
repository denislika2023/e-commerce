import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// add support for Redux dev tools
export const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancer(applyMiddleware(...middlewares))
);


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
