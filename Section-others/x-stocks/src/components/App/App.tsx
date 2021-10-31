import React from 'react';
import './App.css';
import SimpleComponent from "../SimpleComponent";
import ClassComponent from "../ClassComponent";

function App() {
  return (
    <div>
      <SimpleComponent/>

      <ClassComponent name="dummies"/>
    </div>
  );
}

export default App;
