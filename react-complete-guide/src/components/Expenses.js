import ExpensiveItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props) {
  let items = props.items;

  return (
    <Card className="expenses">
      <ExpensiveItem title={items[0].title} price={items[0].price} date={items[0].date} />
      <ExpensiveItem title={items[1].title} price={items[1].price} date={items[1].date} />
    </Card>
  );
}

export default Expenses;
