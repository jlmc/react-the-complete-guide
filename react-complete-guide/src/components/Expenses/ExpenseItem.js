import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import React, { useState } from 'react';

function ExpensiveItem(props) {
  // prop, function
  const [title, setTitle] = useState(props.title);

  function onChangeTitleClickedHandler() {
    console.log('Button Clicked ' + new Date());
    setTitle('Changed ' + Math.random()); // note that the value do not change right way, in reality it schedule a changed
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
     {/* <button onClick={onChangeTitleClickedHandler}>Change Title</button>*/}
    </Card>
  );
}

export default ExpensiveItem;

// format: option + shift + F
