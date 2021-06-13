import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/auth-slice";

const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    console.log(isLoggedIn);

  const dispatch = useDispatch();

    function logoutHandler() {
        //authContext.logout();
        dispatch(authActions.logout())
    }

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
