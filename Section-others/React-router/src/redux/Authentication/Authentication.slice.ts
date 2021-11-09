import {createSelector, createSlice} from "@reduxjs/toolkit";
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

        //logout(state, action: PayloadAction) {
        logout(state) {
            state.user = undefined
            state.loading = IDLE
        },

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
    (authenticationState?: AuthenticationState) => {
        return authenticationState?.user?.jwtToken || ''
    }
)

export const getUsername = createSelector(
    (state: RootState) => state.authentication,
    (authenticationState?: AuthenticationState) => {
        return authenticationState?.user?.user || ''
    }
)

export const getCurrentUser = createSelector(
    (state: RootState) => state.authentication,
    (authenticationState: AuthenticationState) => {
        return authenticationState.user;
    }
)

export const authenticationSliceActions = authenticationSlice.actions;

export default authenticationSlice;
