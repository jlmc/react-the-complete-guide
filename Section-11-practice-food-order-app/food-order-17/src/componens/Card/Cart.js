import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext, useState} from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import {BACKEND_URL} from "../utils";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const [isCheckout, setIsCheckout] = useState(false);

    console.log(cartCtx.items)


    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    function orderHandler() {
        setIsCheckout(true);
    }

    function onCancel() {
        setIsCheckout(false);
    }

    const submitOrderHandler = (orderData) => {
        fetch(`${BACKEND_URL}/orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                user: orderData,
                orderedItems: cartCtx.items
            })
        });
    };


    const modalActions =
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
        </div>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={onCancel} onConfirm={submitOrderHandler}/>}
            {!isCheckout && modalActions}

        </Modal>
    );
};

export default Cart;
