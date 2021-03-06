import {useRef, useState} from 'react';

import classes from './AuthForm.module.css';

import {useDispatch, useSelector} from "react-redux";
import {login, signUp} from "../../store/auth-actions";
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isInLogginProcess)

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;

        if (isLogin) {
            dispatch(login({username: username, password: password})).then((data) => {
                console.log( data )
                if (data.meta.requestStatus === 'fulfilled') {
                    history.replace('/');
                } else if (data.meta.requestStatus === 'rejected') {
                    alert(data.error.message);
                }


            })
        } else {
            dispatch(signUp({username: username, password: password})).then((data) => {
                console.log( data )
                if (data.meta.requestStatus === 'fulfilled') {
                    history.replace('/');
                } else if (data.meta.requestStatus === 'rejected') {
                    alert(data.error.message);
                }
            })
        }



    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={usernameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
