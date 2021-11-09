import productSlice from "./Prod/Product.slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authenticationSlice from "./Authentication/Authentication.slice";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

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

const combinedReducers = combineReducers({
    products: productSlice.reducer,
    authentication: authenticationSlice.reducer
});

const persistedReducer = persistReducer({
    key: 'x-stock',
    storage,
    // blacklist: list of string of the things that should not be stored
    blacklist: ['entities', 'products']
}, combinedReducers)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store, {

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//export default store ;
export { store, persistor};
