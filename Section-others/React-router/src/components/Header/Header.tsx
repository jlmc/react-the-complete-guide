import React from "react";
import './Header.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    authenticationSliceActions,
    getCurrentUser,
    getSummary,
    getUsername
} from "../../redux/Authentication/Authentication.slice";
import {User} from "../../service/Authentication.service";
import {useNavigate} from "react-router-dom";

declare interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {

    const username = useAppSelector(getUsername);
    const currentUser: User | undefined = useAppSelector(getCurrentUser);
    const summary: string =  useAppSelector(getSummary);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const signInClickHandler = () => {
        navigate('/login', {replace: true})
    }

    const profileClickHandler = () => {
        navigate('/profile', {replace: true})
    }

    const homeClickHandler = () => {
        navigate('/', {replace: true})
    }

    const logoutClickHandler = () => {
        dispatch(authenticationSliceActions.logout())
    }

    return (
        <header className="AppHeader">
            <h1 onClick={homeClickHandler}>{props.title}</h1>
            {currentUser &&
            <div>
                <span onClick={profileClickHandler}>{summary}</span>
                <span onClick={logoutClickHandler}>Logout</span>
            </div>
            }
            {!currentUser &&
            <div>
                <span onClick={signInClickHandler}>SignIn</span>
            </div>
            }

        </header>)
}

export default Header
