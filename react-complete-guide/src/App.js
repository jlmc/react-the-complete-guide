import Expenses from './components/Expenses/Expenses';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';

//function App() {
const App = () => {
  const expenses = [
    {
      id: '1',
      title: 'Car Insurance 1',
      price: 294.67,
      date: new Date(2021, 5, 28),
    },
    {
      id: '2',
      title: 'Car Insurance 2',
      price: 294.67,
      date: new Date(2020, 12, 28),
    },
    {
      id: '3',
      title: 'Car Insurance 3',
      price: 56.67,
      date: new Date(2020, 1, 28),
    },
  ];

  function addExpenseHandler(expenseData) {
    console.log('In App js');
    console.log(expenseData);
  }

  /*
  // In the old versions
  return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, 'Let\'s get started!'),
      React.createElement(Expenses, {items: expensives})
      )
   */

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onExpenseAdded={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
