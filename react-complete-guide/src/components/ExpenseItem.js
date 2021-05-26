import './ExpenseItem.css'

function ExpensiveItem() {
  const expenseDate = new Date(2021, 5, 28);
  const expenseTitle = "Car Insurance";
  const expensePrice = 294.67;


  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;

// format: option + shift + F
