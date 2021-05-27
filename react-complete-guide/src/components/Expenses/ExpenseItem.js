import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpensiveItem(props) {
  // prop, function
  //const [title, setTitle] = useState(props.title);

  /*  function onChangeTitleClickedHandler() {
    console.log('Button Clicked ' + new Date());
    setTitle('Changed ' + Math.random()); // note that the value do not change right way, in reality it schedule a changed
  }*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        {/* <button onClick={onChangeTitleClickedHandler}>Change Title</button>*/}
      </Card>
    </li>
  );
}

export default ExpensiveItem;

// format: option + shift + F
