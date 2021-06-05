import {Fragment, useState} from "react";
import Header from "./componens/Layout/Header";
import Meals from "./componens/Meals/Meals";
import Cart from "./componens/Card/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const hideCartHandler = (event) => {
        setCartIsShown(false);
    }

    const showCartHandler = (event) => {
        setCartIsShown(true);
    }

    return (

        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} /> }
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
