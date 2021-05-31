import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
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

// export const sendCartData = (cart) => {
export function sendCartData (cart) {

    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            console.log("__FETCHING data from back end !!!!!")

            const response = await fetch('https://react-the-complete-guide-915ce-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Error sending cart data!');
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent cart data Successfully!'
            }));

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data Failed!'
            }));
        }
    };

};

export const cartActions = cartSlice.actions;
export default cartSlice;
