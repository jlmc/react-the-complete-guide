import {createSlice} from "@reduxjs/toolkit";
import {login, signUp} from "./auth-actions";
import {loadState} from "./local-storaging";

const defaultInitialState = {token: '', expiresIn: -1, isLoggedIn: false, isInLogginProcess: false};

const isS = () => {
    let loadState1 = loadState();
    if (loadState1 === undefined) {
        return defaultInitialState;
    }

    return loadState1.auth;
}

const authSlice =
    createSlice({
        name: "auth",
        initialState: isS(),
        reducers: {
            logout(state, action) {
                state.isInLogginProcess = false;
                state.isLoggedIn = false;
                state.token = null;
                state.expiresIn = -1;
            }
        },
        extraReducers: {
            // login
            [login.pending]: (state, action) => {
                state.isInLogginProcess = true;
                state.isLoggedIn = false;
            },
            [login.fulfilled]: (state, action) => {
                state.isInLogginProcess = false;
                state.isLoggedIn = true;

                state.token = action.payload.idToken;
                state.expiresIn = action.payload.expiresIn;
                console.log(action.payload)
                console.log(action.payload.expiresIn)
            },
            [login.rejected]: (state, action) => {
                state.isInLogginProcess = false;
                state.isLoggedIn = false;
            },

            // signIn
            [signUp.pending]: (state, action) => {
                state.isInLogginProcess = true;
            },
            [signUp.fulfilled]: (state, action) => {
                state.isInLogginProcess = false;
                state.isLoggedIn = true;
                state.token = action.payload.idToken
                state.expiresIn = action.payload.expiresIn

                console.log(action.payload)
                console.log(action.payload.expiresIn)
            },
            [signUp.rejected]: (state, action) => {
                state.isInLogginProcess = false;
            }
        }



    });

export default authSlice;
export const authActions = authSlice.actions;

/*
token: '',
    isLoggedIn: false,
 */
