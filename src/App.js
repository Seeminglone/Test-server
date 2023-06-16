import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import NewsComponent from './NewsComponent';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <NewsComponent></NewsComponent>
    </div>
  );
}

export default App;
