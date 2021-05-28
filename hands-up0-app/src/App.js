import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const DUMMY_USERS = [];

function App() {
  const [_users, setUsers] = useState(DUMMY_USERS);

  function addUserHandler(newUser) {
    let user = {
      ...newUser,
      id: Math.random().toString(),
    };

    setUsers(prevUsersList => {
      return [...prevUsersList, user];
    });
  }

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList users={_users} />
    </div>
  );
}

export default App;
