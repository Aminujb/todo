import React from 'react';
import './App.css';
import TodoBuilder from './containers/todoBuilder/todoBuilder'

const app = props => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          To-Dos
        </p>
        <p> list Items goes here</p>
      </header> */}
      <TodoBuilder/>
    </div>
  );
}

export default app;
