import React from "react";
import './Header.css'
import {useAppSelector} from "../../hooks";
import {getJwtToken} from "../../redux/Authentication/Authentication.slice";

declare interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {

    const username = useAppSelector(getJwtToken);

    return (
        <header className="AppHeader">
            <h1>{props.title}</h1>
            <span>{username}</span>
        </header>)
}

export default Header
