import {createStore} from 'redux';

import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true}

const counterSliceXX =
    createSlice({

        name: 'XYZ',
        initialState: initialState,
        reducers: {

            increment(state) {
                console.log("Store increment!!!!");
                state.counter++;
            },
            decrement(state) {
                console.log("Store decrement!!!!");
                state.counter--;
            },
            incrementBy(state, action) {
                console.log(`Store incrementBy ${JSON.stringify(action)} !!!!`);
                state.counter = state.counter + action.payload;
            },
            reset(state) {
                console.log(`Store reset  !!!`);
                state.counter = 0
            },
            toggle(state) {
                console.log(`Store reset toggle ${JSON.stringify(state)} !!!`);
                state.showCounter = !state.showCounter;
            },

        }
    })



//const store = createStore(counterSliceXX.reducer);
// The configureStore is more useful in biggest application, because it allow us to merge multiple store
const store = configureStore({
    reducer: {
        counter: counterSliceXX.reducer
        //    ... more reducer
    }
});

export const counterSliceXXActions = counterSliceXX.actions

export default store;
