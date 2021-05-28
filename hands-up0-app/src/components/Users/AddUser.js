import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../UI/Wrapper';

const AddUser = props => {
  let [isValid, setIsValid] = useState(true);
  let [_username, setUsername] = useState('');
  let [_age, setAge] = useState('1');
  let [_error, setError] = useState();

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

      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });

      return;
    }

    if (!isNumeric(_age) || +_age <= 0) {
      setIsValid(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
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
    setIsValid(true);
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {_error && <ErrorModal title={_error.title} message={_error.message} onConfirm={errorHandler} />}
      <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={_username} onChange={onUsernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" min="0" step="1" type="number" value={_age} onChange={onAgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
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
