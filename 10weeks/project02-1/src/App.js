import {useState} from "react";
import './App.css';
import Header from "./component/Header"
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {


  return (
    <div className="App">
      <h1>Todo List (project02-1)</h1>
      <Header />
      <TodoEditor/>
      <TodoList/>
    </div>
  );
}

export default App;
