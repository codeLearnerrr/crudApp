import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const initialState = {
    number: 0
};

const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export const store = createStore(
    rootReducer,
    initialState,
    enhancer
);


