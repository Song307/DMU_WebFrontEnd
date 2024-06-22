import "./TodoList.css"
import TodoItem from "./TodoItem"
import { useState } from "react";


function TodoList({todo, onDelete}){
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <input 
                className="searchBar" placeholder="검색어를 입력하시오"
                value={search} onChange={onChangeSearch}
            />
            <div className="list_wrapper">
            {todo.filter((it) => it.content.toLowerCase().includes(search)).map((it) => (
                <TodoItem key={it.id} {...it} onDelete={onDelete}/>
            ) )}

                
            </div>
        </div>
    );

};
export default TodoList