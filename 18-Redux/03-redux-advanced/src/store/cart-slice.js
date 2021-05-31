import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            let newItem = action.payload;

            console.log(`--- ADD_ITEM_TO_CART: ${JSON.stringify(newItem)}` )

            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;

            if (!existingItem) {
                // without redux/toolkit we can't apply the items push method, it is a absolute prohibit operation
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }

        },
        removeItemFromCart(state, action) {
            let givenItem = action.payload;
            const existingItem = state.items.find(item => item.id === givenItem.id);

            console.log(`--- REMOVE_ITEM_FROM_CART ${JSON.stringify(existingItem)}` )

            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== existingItem.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }

});


export const cartActions = cartSlice.actions;
export default cartSlice;
