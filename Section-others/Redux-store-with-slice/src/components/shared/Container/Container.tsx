import React from "react";
import classes from './Container.module.css'

const Container: React.FC = (props) => {
    return (
        <div className={classes.Container}>
            {props.children}
        </div>
    )
}

export default Container
