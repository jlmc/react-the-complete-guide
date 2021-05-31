import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import Notification from "./components/UI/Notification";
import {sendCartData} from "./store/cart-slice";

let isInitial = true;

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    const dispatch = useDispatch();

    useEffect(() => {
        // If is a reload page then should not push any thing to the server
        if (isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));

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
