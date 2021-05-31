import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    const dispatch = useDispatch();

    useEffect(() => {

        const sendCartData = async () => {

            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            }))

            console.log("__FETCHING data from back end !!!!!")
            const response = await fetch('https://react-the-complete-guide-915ce-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Error sending cart data!')
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent cart data Successfully!'
            }))
        };

        // If is a reload page then should not push any thing to the server
        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch(error => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data Failed!'
            }));
        });


    }, [cart, dispatch])

    return (
        <Fragment>
            {notification &&
            <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            <Layout>
                {showCart && (<Cart/>)}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
