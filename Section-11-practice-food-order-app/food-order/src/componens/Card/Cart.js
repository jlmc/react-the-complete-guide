import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const total = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;


    // [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );


    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>

                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Modal>
    );
}

export default Cart;
