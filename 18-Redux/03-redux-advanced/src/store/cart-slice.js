import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            console.log("--- ADD_ITEM_TO_CART" )
        },
        removeItemFromCart(state, action) {
            console.log("--- REMOVE_ITEM_FROM_CART" )
        }
    }

});

export const cartActions = cartSlice.actions;
export default cartSlice;
