import React from 'react';
import ExpensiveItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpensiveItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
