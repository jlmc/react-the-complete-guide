import Counter from './components/Counter';
import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile";


function App() {
    const isAuth = useSelector(state => state.authentication.isAuthenticated);


    return (
        <Fragment>
            <Header/>
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter/>
        </Fragment>
    );
}

export default App;


// to provider our Redux store,
// we should go to the place where we render the app react (index.js)
