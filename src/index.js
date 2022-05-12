import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let initialTodos=[{index:0,name:"ABC", isDone: false}]
root.render(
  <React.StrictMode>
    <App initialTodos={initialTodos}/>
  </React.StrictMode>
);
