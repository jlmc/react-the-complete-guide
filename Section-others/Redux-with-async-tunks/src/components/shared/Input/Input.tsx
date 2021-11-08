import React from "react";
import classes from './Input.module.css'

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<InputProps> = (props) => {
    return <>
        <div className={classes.Input}>
            <label>
                <span>{ props.label }</span>
                <input
                    {...props}
                />
            </label>
        </div>
    </>
}

export default Input
