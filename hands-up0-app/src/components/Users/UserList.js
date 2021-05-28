import React from 'react';
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = props => {
  let users = props.users;

  console.log(`---> ${JSON.stringify(users)}`);

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
