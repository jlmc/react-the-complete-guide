import { configureStore } from "@reduxjs/toolkit";

import counterSliceXX from "./counter";
import authenticationSlice from "./authentication";

//const store = createStore(counterSliceXX.reducer);
// The configureStore is more useful in biggest application, because it allow us to merge multiple store
const store = configureStore({
    reducer: {
        counter: counterSliceXX.reducer,
        authentication: authenticationSlice.reducer
        //    ... more reducer
    }
});

export const counterSliceXXActions = counterSliceXX.actions;
export const authenticationSliceActions = authenticationSlice.actions;

export default store;
