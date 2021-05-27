import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
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

    setDateValue(enteredValue);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const expense = {
      title: titleValue,
      price: Number.parseFloat(priceValue),
      date: new Date(dateValue),
    };

    props.onSaveExpenseData(expense);

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
          <input type="number" min="0.00" step="0.01" onChange={PriceChangeHandler} value={priceValue} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="date"
            pattern="yyyy-MM-dd"
            min="2019-01-01"
            max="2050-01-01"
            onChange={dateChangeHandler}
            value={dateValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
