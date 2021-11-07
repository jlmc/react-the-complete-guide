import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import Products from './Products/Products.reducer';
import thunk, {ThunkAction} from "redux-thunk";

export interface Action<T = any> {
    type: string,
    payload?: T
}

export type Thunk<T = any> =
    ThunkAction<void, typeof reducers, unknown, Action<T>>


// ****************

const reducers = combineReducers({

    products: Products,

});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
