import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  let [titleValue, setTitleValue] = useState('');
  let [priceValue, setPriceValue] = useState('');
  let [dateValue, setDateValue] = useState('');

  function titleChangeHandler(event) {
    let enteredValue = event.target.value;
    setTitleValue(enteredValue);
  }

  function PriceChangeHandler(event) {
    let enteredValue = event.target.value;
    setPriceValue(enteredValue);
  }

  function dateChangeHandler(event) {
    let enteredValue = event.target.value;

    console.log('===> ' + enteredValue);
    setDateValue(enteredValue);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const expense = {
      title: titleValue,
      price: priceValue,
      date: new Date(dateValue),
    };

    console.log(`---> ${JSON.stringify(expense)}`);

    setTitleValue('');
    setPriceValue('');
    setDateValue('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandler} value={titleValue} />
        </div>
        <div className="new-expense__control">
          <label>Price:</label>
          <input type="number" min="0.01" step="0.01" onChange={PriceChangeHandler} value={priceValue} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="date"
            data-date-format="yyyy-MM-dd"
            min="2019-01-01"
            max="2050-01-01"
            onChange={dateChangeHandler}
            value={dateValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
