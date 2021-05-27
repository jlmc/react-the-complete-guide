import React, { useState } from 'react';

import ExpensiveItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  let items = props.items;
  const [filteredYear, setFilteredYear] = useState('2020');

  function onChangeFilterHandler(filterData) {
    console.log(filterData);
    setFilteredYear(filteredYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilterHandler} />
      <ExpensiveItem title={items[0].title} price={items[0].price} date={items[0].date} />
      <ExpensiveItem title={items[1].title} price={items[1].price} date={items[1].date} />
    </Card>
  );
}

export default Expenses;
