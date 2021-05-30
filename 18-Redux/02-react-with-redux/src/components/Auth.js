import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authenticationSliceActions} from "../store";
import {useRef, useState} from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.authentication.username);

  let passwordTextInput = useRef('');
  const [usernameValue, setUsernameValue] = useState(username)

  function changeUsernameHandler(event) {
    let value = event.target.value;
    setUsernameValue(value)
  }

  function loginHandle(event) {
    event.preventDefault();
    let passwordValue = passwordTextInput.current.value;
    console.log("Password: " + passwordValue)
    console.log("Username: " + usernameValue)

    dispatch(authenticationSliceActions.login({
      username: usernameValue,
      password: passwordValue
    }))
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandle}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={usernameValue} onChange={changeUsernameHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordTextInput} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
