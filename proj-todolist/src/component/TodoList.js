import { useContext, useMemo, useState } from "react";
import { TodoStateContext } from "../App"; // Todo 상태 컨텍스트를 App 파일에서 임포트
import TodoItem from "./TodoItem"; // TodoItem 컴포넌트를 임포트
import "./TodoList.css"; // TodoList 컴포넌트에 적용할 CSS 파일을 임포트

// TodoList 컴포넌트 정의
const TodoList = () => {
  const todo = useContext(TodoStateContext); // Todo 상태 컨텍스트를 todo 변수에 할당

  const [search, setSearch] = useState(""); // 검색어 상태와 상태 업데이트 함수를 선언
  const onChangeSearch = (e) => {
    setSearch(e.target.value); // 검색어 입력 시 호출되는 함수
  };

  // 검색 결과를 반환하는 함수
  const getSearchResult = () => {
    return search === ""
      ? todo // 검색어가 비어있으면 전체 todo 반환
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        ); // 검색어가 포함된 todo 반환 (대소문자 구분 없이)
  };

  // todo 배열을 분석하여 총 개수, 완료된 개수, 완료되지 않은 개수를 계산
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length; // 전체 Todo 개수
    const doneCount = todo.filter((it) => it.isDone).length; // 완료된 Todo 개수
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 Todo 개수
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]); // todo 배열이 변경될 때마다 다시 계산

  const { totalCount, doneCount, notDoneCount } = analyzeTodo; // 분석 결과를 변수에 할당

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      {/* 검색어 입력을 위한 input 요소 */}
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {/* 검색 결과를 기반으로 TodoItem 컴포넌트를 렌더링 */}
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// 기본 props로 빈 배열을 설정
TodoList.defaultProps = {
  todo: [],
};

export default TodoList; // TodoList 컴포넌트를 내보냄


/*
주석 설명
import { useContext, useMemo, useState } from "react";: React 훅들을 임포트합니다.
import { TodoStateContext } from "../App";: Todo 상태 컨텍스트를 App 파일에서 임포트합니다.
import TodoItem from "./TodoItem";: TodoItem 컴포넌트를 현재 파일에서 임포트합니다.
import "./TodoList.css";: TodoList 컴포넌트에 적용할 CSS 파일을 임포트합니다.
const todo = useContext(TodoStateContext);: Todo 상태 컨텍스트를 useContext 훅을 사용하여 가져와 todo 변수에 할당합니다.
const [search, setSearch] = useState("");: 검색어 상태와 검색어를 업데이트할 함수를 선언합니다.
const onChangeSearch = (e) => { ... };: 검색어 입력 시 호출되는 함수입니다. 입력된 값을 검색어 상태에 설정합니다.
const getSearchResult = () => { ... };: 검색 결과를 반환하는 함수입니다. 검색어가 비어 있으면 전체 todo를 반환하고, 아니면 검색어가 포함된 todo를 반환합니다.
const analyzeTodo = useMemo(() => { ... }, [todo]);: useMemo 훅을 사용하여 todo 배열을 분석하여 총 개수, 완료된 개수, 완료되지 않은 개수를 계산합니다. todo 배열이 변경될 때마다 다시 계산합니다.
return ( ... );: JSX를 반환합니다. "TodoList" 클래스를 가진 div 요소를 렌더링하고, 총 개수, 완료된 개수, 완료되지 않은 개수를 출력합니다. 검색어 입력을 위한 input 요소와 검색 결과를 렌더링하는 TodoItem 컴포넌트가 포함됩니다.
TodoList.defaultProps = { todo: [] };: TodoList 컴포넌트의 기본 props를 설정합니다. todo가 빈 배열일 경우를 대비합니다.
export default TodoList;: TodoList 컴포넌트를 내보냅니다.





 */