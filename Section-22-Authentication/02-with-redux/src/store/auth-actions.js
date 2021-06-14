/**
 * https://abhimanyuchauhan-61309.medium.com/createasyncthunk-in-redux-toolkit-4d8d2f0412d3
 * createAsyncThunk accepts three parameters:
 *  1. type: todo/fetchList. The general naming convention followed is {reducerName}/{actionType}
 *
 *  2. payloadCreator: is the callback function (async (_, { rejectWithValue })=>{}), the first param is the argument which is passed to the callback. The second param is the thunkApi(defined below).
 */

import {createAsyncThunk} from "@reduxjs/toolkit";

export const API_KEY = 'AIzaSyC8YjjYdrNM21bZHt171FW0Uh96VtxqbXk';
export const LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
export const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

export const login =
    createAsyncThunk(
        'auth/login',
        async (credentials, thunkAPI) => {
            const  response = await fetch(LOGIN_URL + API_KEY, {
                method: 'POST',
                body: JSON.stringify({
                    email: credentials.username,
                    password: credentials.password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Invalid Credentials: '+ response.data )
            }
            return data;
        }
    );

export const signUp =  createAsyncThunk(
    'auth/signUp',
    async (credentials, thunkAPI) => {
        const  response = await fetch(SIGN_IN_URL + API_KEY, {
            method: 'POST',
            body: JSON.stringify({
                email: credentials.username,
                password: credentials.password,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error('Invalid Credentials: '+ response.data )
        }

        return data;
    }
);
