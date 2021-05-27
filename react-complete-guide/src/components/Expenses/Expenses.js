import React, { useState } from 'react';

import ExpensiveItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  //let items = props.items;
  const [filteredYear, setFilteredYear] = useState('all');

  function onChangeFilterHandler(filteredYear) {
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  }

  const filterExpenses = props.items.filter(expense => {
    let valid = 'all' === filteredYear || filteredYear === expense.date.getFullYear().toString();
    return valid;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
      {filterExpenses.map(expense => {
        return <ExpensiveItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />;
      })}
    </Card>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default Expenses;
