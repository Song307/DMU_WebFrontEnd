import React, { useState, useRef, useCallback, createContext, useMemo } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    const newItem = {
      id: idRef.current,
      content: content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo((prevTodo) => [newItem, ...prevTodo]);
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) => {
    setTodo((prevTodo) =>
      prevTodo.map((it) => {
        if (it.id === targetId) {
          return { ...it, isDone: !it.isDone };
        } else {
          return it;
        }
      })
    );
  }, []);

  const onDelete = useCallback((targetId) => {
    setTodo((prevTodo) => prevTodo.filter((it) => it.id !== targetId));
  }, []);



  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    
      <div className="App">
        <TestComp />
        <Header />
        <TodoStateContext.Provider value={todo}>
          <TodoDispatchContext.Provider value={memoizedDispatches}>
            <TodoEditor />
            <TodoList/>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
     
  );
}

export default App;








/*

import "./App.css";
import { useState, useRef, useCallback } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    const newItem = {
      id: idRef.current,
      content:content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  } ,[]);
  
  const onUpdate = useCallback((targetId) => {
    setTodo(
      todo.map((it) =>{
          if(it.id===targetId){
            return {...it, isDone:!it.isDone}
          } else{
            return it;
          }
      }) );
  } ,[]);
  
  
  const onDelete = useCallback((targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }, []);

  
  return (
    <div className="App">
        <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate}  />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
*/