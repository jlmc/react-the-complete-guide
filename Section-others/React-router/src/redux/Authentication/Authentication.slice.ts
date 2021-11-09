import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../model/Product";
import {User} from "../../service/Authentication.service";
import {signIn} from "./Authentication.actions";
import {RootState} from "../index";

export const IDLE = 'idle'
export const PENDING = 'pending'
export const SUCCEEDED = 'succeeded'
export const FAILED = 'failed'

export interface AuthenticationState {
    user?: User
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    errorMessage?: string
}

const initialState = {
    user: undefined,
    loading: 'idle',
    errorMessage: undefined
} as AuthenticationState

const authenticationSlice = createSlice({
    name: ' authentication',
    initialState,
    reducers: {
        // fill in primary logic here
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = PENDING
            state.user = undefined
        });
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.user = payload
            state.loading = SUCCEEDED
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.user = undefined
            state.errorMessage = action.error.message || ""
            state.loading = FAILED
        });
    },
})


export const getJwtToken = createSelector(
    (state: RootState) => state.authentication,
    (user?: AuthenticationState) => {

        console.log('JWT-0.1: ' + user)

        return 'CRAZY-TOKEN'
    }
)

/*
export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
);
 */

export const authenticationSliceActions = authenticationSlice.actions;

export default authenticationSlice;
