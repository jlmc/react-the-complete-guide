import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/Todo";



function App() {

    const todos = [

        new Todo("Learn React"),
        new Todo("Learn Type Script"),
    ];

  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;
