import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authenticationSliceActions} from "../store";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authentication.isAuthenticated);

    function logoutHandle() {
        dispatch(authenticationSliceActions.logout())
    }

    return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandle}>Logout</button>
          </li>
        </ul>
      </nav>
    }
    </header>
  );
};

export default Header;
