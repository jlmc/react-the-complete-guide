import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

// export const fetchCardData = (cart) => {
export function fetchCardData() {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Fetching cart data!'
        }));

        const fetchData = async () => {
            const response = await fetch('https://react-the-complete-guide-915ce-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            if (!response.ok) {
                throw new Error('Error fetching cart data!');
            }
            return await response.json();
        };

        try {
            let data =  await fetchData();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'fetch cart data Successfully!'
            }));

            if (data == null || data.items === undefined || data.totalQuantity === undefined) {
                data = {
                    items: [],
                    totalQuantity: 0
                }
            }

            dispatch(cartActions.replaceCart(data))

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data Failed!'
            }));

            console.error(error)
        }

    }
}

// export const sendCartData = (cart) => {
export function sendCartData(cart) {

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

}
