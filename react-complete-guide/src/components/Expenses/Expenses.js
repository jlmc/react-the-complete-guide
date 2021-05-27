import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
