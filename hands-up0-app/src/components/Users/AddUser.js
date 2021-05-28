import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = props => {
  let [isValid, setIsValid] = useState(true);
  let [_username, setUsername] = useState('');
  let [_age, setAge] = useState('1');

  function onUsernameChangeHandler(event) {
    let value = event.target.value;
    setUsername(value);
  }

  function onAgeChangeHandler(event) {
    let value = event.target.value;
    setAge(value);
  }

  function addUserHandler(event) {
    event.preventDefault();

    if (_username.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (!isNumeric(_age) || +_age <= 0) {
      setIsValid(false);
      return;
    }

    let newUser = {
      name: _username,
      age: +_age,
    };

    console.log(newUser);

    props.addUser(newUser);

    setUsername('');
    setAge('1');
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  return (
    <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={_username} onChange={onUsernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" min="0" step="1" type="number" value={_age} onChange={onAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

/*
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

 */
