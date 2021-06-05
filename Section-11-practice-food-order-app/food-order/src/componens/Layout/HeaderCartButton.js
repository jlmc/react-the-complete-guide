import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Card/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../store/cart-context";

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const { items } = cartContext;

    const numberOfCartItems =
        items.reduce(
            (accumulator, item) => {
                return accumulator + item.amount;
                } , 0)


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>);
}

export default HeaderCartButton;
