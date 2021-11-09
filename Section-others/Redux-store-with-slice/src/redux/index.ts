import productSlice from "./Prod/Product.slice";
import {configureStore} from "@reduxjs/toolkit";


/*
import {combineReducers} from "redux";
const reducers = combineReducers({
    products: productSlice.reducer,
});

const store = createStore(
    reducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
