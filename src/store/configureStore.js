import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducers';

const store = function configureStore() {

    if(process.env.NODE_ENV === 'production'){
        let store = createStore(
            reducer,
            compose(
                applyMiddleware(thunk)
            )
        );
        return store;
    }else{
        return createStore(
            reducer,
            compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f=>f
            )
        );
    }
}();

export { store };
