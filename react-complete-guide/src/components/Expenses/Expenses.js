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
    return 'all' === filteredYear || filteredYear === expense.date.getFullYear().toString();
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map(expense => (
      <ExpensiveItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
