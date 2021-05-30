import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authenticationSliceActions} from "../store";

const Auth = () => {
  const dispatch = useDispatch();


  function loginHandle(event) {
    event.preventDefault();
    dispatch(authenticationSliceActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandle}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
