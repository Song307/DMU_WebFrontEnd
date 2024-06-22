import {useState, useRef} from "react";
import './App.css';
import Header from "./component/Header"
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

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
  }
]

function App() {

  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content)=> {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content: content,
      createdDate: new Date().getTime() 
    } 
    setTodo([...todo, newItem]); 
    idRef.current += 1;
  }

  const onDelete = (targetId)=> {
    setTodo( todo.filter( (it)=> it.id !== targetId) );
  }

  const onUpdate = (targetId)=> {
    setTodo(
      todo.map((it)=>{
        if(it.id===targetId){
          return {...it, isDone:!it.isDone}
        } else {
          return it;
        }
      } ) ); }
      
  return (
    <div className="App">
      <h1>Todo List (project02-1)</h1>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onDelete={onDelete}/>
    </div>
  );
}

export default App;
