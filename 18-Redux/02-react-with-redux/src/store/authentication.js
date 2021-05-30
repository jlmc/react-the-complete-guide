import {createSlice} from "@reduxjs/toolkit";

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
    );

export default authenticationSlice;
