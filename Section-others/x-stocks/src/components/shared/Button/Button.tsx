import React from "react";
import classes from './Button.module.css';

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    appendIcon?: JSX.Element
}

// const Button: React.FC<{ content?: string }> = (props) => {
const Button: React.FC<ButtonProps> = (props) => {
    return (
        <React.Fragment>
            <button className={classes.appButton} onClick={props.onClick}>
                {props.children || "Nameless button"}
                {props.appendIcon}
            </button>
        </React.Fragment>
    )
}

export default Button
