import logo from './logo.svg';
import './App.css';
import Book from './Components/Book/Book.Component';
import React from 'react';
import { MyProvider } from './Components/Context/MyContext';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyProvider ChildComponent={<Book nameBook="Harri Boter"/>}>
        </MyProvider>
      </header>
    </div>
  );
}
export default App;
