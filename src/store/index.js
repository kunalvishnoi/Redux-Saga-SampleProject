import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
        ),
    );
    sagaMiddleware.run(rootSaga);

    store.dispatch({ type: 'HELLO' });

    return store;
};

export default configureStore;
