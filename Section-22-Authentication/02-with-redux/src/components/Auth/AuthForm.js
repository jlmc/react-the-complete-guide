import {useRef, useState} from 'react';

import classes from './AuthForm.module.css';
import {useDispatch, useStore} from "react-redux";
import {authActions} from "../../store/auth-slice";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const store = useStore();
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    dispatch(authActions.login({
      username: username,
      password: password
    }))


  }

  return (
    <section className={classes.auth} onSubmit={submitHandler}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={usernameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
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
