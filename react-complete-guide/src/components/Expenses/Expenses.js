import React, { useState } from 'react';

import ExpensiveItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  //let items = props.items;
  const [filteredYear, setFilteredYear] = useState('2020');

  function onChangeFilterHandler(filterData) {
    console.log(filterData);
    setFilteredYear(filteredYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilterHandler} />
      {props.items.map(expense => {
        return <ExpensiveItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />;
      })}
    </Card>
  );
}

export default Expenses;
