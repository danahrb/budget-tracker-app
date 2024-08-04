import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const expenses = [
    { name: 'Rent ', within: true },
    { name: 'Legal fees', within: false },
    { name: 'Insurance', within: false },
  ];

  return (
    <>
      <h1>Budget Tracker</h1>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>           
           {item.name}
          {item.within ? ' ' : '  is not within budget'}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;