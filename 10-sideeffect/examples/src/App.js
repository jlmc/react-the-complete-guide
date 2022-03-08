import React, {useEffect, useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const IS_LOGGED_IN = "isLoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () => {
      let storedUserLoggedInInformation = localStorage.getItem(IS_LOGGED_IN);
      if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true)
      }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem(IS_LOGGED_IN, "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_LOGGED_IN)
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
