import "./TodoList.css"
import TodoItem from "./TodoItem"
import { useState, useMemo } from "react";      //useMemo : 연산의 결과값을 기억했다가 사용 -> const vale = useMemo(callBack,deps) dpes의 변화가 있을시, callback 함수 호출
//React.memo : 부모가 전달한 props가 변경되지 않는다면 리렌더 되지 않음.

function TodoList({todo, onDelete, onUpdate}){
    const analyzeTodo = useMemo( 
        () => {
            console.log("analyzeTodo 함수 호출");
            const totalCount = todo.length;
            const doneCount = todo.filter((it) => it.isDone).length;        //filter : 배열객체를 순회하며 (it)매개변수 자리의 조건에 맞으면 남김
            const notDoneCount= totalCount - doneCount;
            return{
                totalCount, //프로퍼티 명과 값이 들어있는 변수 이름이 같은 경우 생략가능 (totalCount:totalCount -> totalCount)
                doneCount:doneCount,
                notDoneCount:notDoneCount
            }
        }
        , [todo]);
    

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
                <div>총개수 : {totalCount}</div>
                <div>완료된 할 일 : {doneCount} </div>
                <div>아직 완료하지 못한 할 일 : {notDoneCount} </div>
            </div>
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