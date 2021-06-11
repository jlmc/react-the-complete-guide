import { useState} from "react";
import Header from "./componens/Layout/Header";
import Meals from "./componens/Meals/Meals";
import Cart from "./componens/Card/Cart";
import CartProvider from "./componens/store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const hideCartHandler = (event) => {
        setCartIsShown(false);
    }

    const showCartHandler = (event) => {
        setCartIsShown(true);
    }

    return (
        <CartProvider>

            {cartIsShown && <Cart onClose={hideCartHandler} /> }
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>

        </CartProvider>

    );
}

export default App;
