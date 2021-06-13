import {createSlice} from "@reduxjs/toolkit";

const authSlice =
createSlice({
    name: "auth",
    initialState: {token: '', isLoggedIn: false},
    reducers: {

        login(state, action) {
            console.log(`LOGIN  : ${JSON.stringify(state)}`)
            console.log(`LOGIN action : ${JSON.stringify(action)}`)

        },

        logout(state, action) {
            console.log(`LOGOUT  : ${JSON.stringify(state)}`)
            console.log(`LOGOUT action : ${JSON.stringify(action)}`)
        }
    }


});

export default authSlice;
export const authActions = authSlice.actions;

/*
token: '',
    isLoggedIn: false,
 */
