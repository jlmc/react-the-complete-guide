import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

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

  return (
    <div>
      <AddUser addUser={addUser} />
      <UserList users={DUMMY_USERS} />
    </div>
  );
}

export default App;
