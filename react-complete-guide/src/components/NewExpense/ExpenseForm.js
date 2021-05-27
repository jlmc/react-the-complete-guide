import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //let [titleValue, setTitleValue] = useState('');
  //let [priceValue, setPriceValue] = useState('');
  //let [dateValue, setDateValue] = useState('');

  let [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  function titleChangeHandler(event) {
    let enteredValue = event.target.value;
    console.log(`The Title ${JSON.stringify(userInput)}`);
    //setTitleValue(enteredValue);
    setUserInput({ ...userInput, title: enteredValue });
  }

  function PriceChangeHandler(event) {
    let enteredValue = event.target.value;

    console.log(`The Price ${JSON.stringify(userInput)}`);
    setUserInput({ ...userInput, price: enteredValue });
  }

  function dateChangeHandler(event) {
    let enteredValue = event.target.value;

    console.log(`The Date ${userInput}`);
    setUserInput({ ...userInput, date: enteredValue });
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price:</label>
          <input type="number" min="0.01" step="0.01" onChange={PriceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="date" min="2019-01-01" max="2050-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
