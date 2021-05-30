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

const initialAuthenticationState = {
    isAuthenticated: false,
    username: ''
};

const authenticationSlice =
createSlice(
    {
        name: "authentication",
        initialState: initialAuthenticationState,
        reducers: {
            login(state, action) {
                console.log(`LOGIN! ${JSON.stringify(state)} --> ${JSON.stringify(action)} `)

                // TODO: missing

                state.username = action.payload.username;
                state.isAuthenticated = true;
            },
            logout(state, action) {
                console.log(`LOGOUT! ${state} --> ${action} `)
                state.isAuthenticated = false;
            }
        }

    }
)


//const store = createStore(counterSliceXX.reducer);
// The configureStore is more useful in biggest application, because it allow us to merge multiple store
const store = configureStore({
    reducer: {
        counter: counterSliceXX.reducer,
        //    ... more reducer
        authentication: authenticationSlice.reducer
    }
});

export const counterSliceXXActions = counterSliceXX.actions;

export const authenticationSliceActions = authenticationSlice.actions;

export default store;
