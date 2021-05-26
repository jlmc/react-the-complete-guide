import ExpensiveItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  let items = props.items;

  return (
    <div className="expenses">
      <ExpensiveItem title={items[0].title} price={items[0].price} date={items[0].date} />
      <ExpensiveItem title={items[1].title} price={items[1].price} date={items[1].date} />
    </div>
  );
}

export default Expenses;
