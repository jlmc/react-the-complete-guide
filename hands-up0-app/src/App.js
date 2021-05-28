import React from 'react';
import AddUser from './components/Users/AddUser';

const DUMMY_USERS = [];

function App() {
  function addUser(newUser) {
    let user = {
      ...newUser,
      id: Math.random().toString(),
    };

    DUMMY_USERS.push(user);

    console.log(DUMMY_USERS);
  }

  return <AddUser addUser={addUser} />;
}

export default App;
