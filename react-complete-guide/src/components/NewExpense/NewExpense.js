import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isEditable, setIsEditable] = useState(false);

  function saveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onExpenseAdded(expenseData);
  }

  function stopEditingHandler() {
    setIsEditable(false);
  }

  function startEditingHandler() {
    setIsEditable(true);
  }

  return (
    <div className="new-expense">
      {!isEditable && <button onClick={startEditingHandler}>Add New Expense</button>}

      {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;
