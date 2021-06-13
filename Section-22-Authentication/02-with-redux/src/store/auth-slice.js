import {createSlice} from "@reduxjs/toolkit";
import {login} from "./auth-actions";

const authSlice =
    createSlice({
        name: "auth",
        initialState: {token: '', isLoggedIn: false, isInLogginProcess: false},
        reducers: {
            /*
            login(status, action) {
                status.isInLogginProcess = true;


                const payload = action.payload;
                console.log('---> ' + payload);


                login(payload.username, payload.password)
                    .then(idToken => {

                        status.isInLogginProcess = false;
                        status.token = idToken;
                        status.isLoggedIn = true;


                    })
                    .catch(error => {
                        status.isInLogginProcess = false;
                    })


            },
            loginSuccessfully(state, action) {
                console.log(`LOGIN  : ${JSON.stringify(state)}`)
                console.log(`LOGIN action : ${JSON.stringify(action)}`)

            },
            loginUnSuccessfully(state, action) {
                console.log(`LOGIN Successfully  : ${JSON.stringify(state)}`)
                console.log(`LOGIN Successfully action : ${JSON.stringify(action)}`)

            },

            logout(state, action) {
                console.log(`LOGOUT  : ${JSON.stringify(state)}`)
                console.log(`LOGOUT action : ${JSON.stringify(action)}`)
            }

             */
        },
        extraReducers: {
            [login.pending]: (state, action) => {
               console.log("-----> pending")
                state.isInLogginProcess = true;
                state.isLoggedIn = false;
            },
            [login.fulfilled]: (state, action) => {
                state.isInLogginProcess = false;

                state.token = action.id

                state.isInLogginProcess = false;
                    console.log("----->  fulfilled")
            },
            [login.rejected]: (state, action) => {
                state.isInLogginProcess = false;
                state.isLoggedIn = false;
                    console.log("----->  rejected")
            },

        }



    });

export default authSlice;
export const authActions = authSlice.actions;

/*
token: '',
    isLoggedIn: false,
 */
