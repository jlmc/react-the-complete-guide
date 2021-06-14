import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import {saveState} from "./local-storaging";

const store =
    configureStore({

        reducer: {
            auth: authSlice.reducer
        }

    });


export default store;



store.subscribe(() => {

    saveState(store.getState())

})
