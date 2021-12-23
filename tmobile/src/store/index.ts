import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {
  // persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const persistConfig = {
  key: 'remedy',
  storage: AsyncStorage,
  blacklist: [],
};

const initialState = {};

const middleWare = [thunk];

const middlewareDev = [
  applyMiddleware(...middleWare),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : []),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  compose(...middlewareDev),
);
