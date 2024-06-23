import "./TodoItem.css"; // TodoItem 컴포넌트에 적용할 CSS 파일을 임포트
import React, { useContext } from "react";
import { TodoDispatchContext } from "../App"; // TodoDispatchContext를 App 파일에서 임포트

// TodoItem 컴포넌트 정의. props로 id, content, isDone, createdDate를 받음
const TodoItem = ({ id, content, isDone, createdDate }) => {
  // TodoDispatchContext에서 onUpdate와 onDelete 함수를 가져옴
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  // 컴포넌트가 업데이트될 때마다 id와 함께 로그 출력
  console.log(`${id} TodoItem 업데이트`);

  // 체크박스 상태가 변경될 때 호출되는 함수
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  // 삭제 버튼이 클릭될 때 호출되는 함수
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    // TodoItem 컴포넌트의 JSX 반환
    <div className="TodoItem">
      <div className="checkbox_col">
        {/* 체크박스가 변경될 때 onChangeCheckbox 함수 호출, 체크 여부는 isDone 상태에 따라 결정 */}
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div> {/* Todo 내용 표시 */}
      <div className="date_col">
        {/* Todo가 생성된 날짜를 로컬 날짜 형식으로 표시 */}
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        {/* 삭제 버튼 클릭 시 onClickDelete 함수 호출 */}
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

// React.memo로 TodoItem 컴포넌트를 최적화하여 불필요한 리렌더링을 방지
export default React.memo(TodoItem);

/*
주석 설명
import "./TodoItem.css";: TodoItem 컴포넌트에 적용할 CSS 파일을 임포트합니다.
import React, { useContext } from "react";: React와 useContext 훅을 임포트합니다.
import { TodoDispatchContext } from "../App";: TodoDispatchContext를 ../App 파일에서 임포트합니다.
const TodoItem = ({ id, content, isDone, createdDate }) => { ... };: TodoItem 컴포넌트를 정의하고, id, content, isDone, createdDate를 props로 받습니다.
const { onUpdate, onDelete } = useContext(TodoDispatchContext);: TodoDispatchContext에서 onUpdate와 onDelete 함수를 가져옵니다.
console.log(${id} TodoItem 업데이트);: 컴포넌트가 업데이트될 때마다 id와 함께 로그를 출력합니다.
const onChangeCheckbox = () => { ... };: 체크박스 상태가 변경될 때 호출되는 함수로, onUpdate 함수를 호출합니다.
const onClickDelete = () => { ... };: 삭제 버튼이 클릭될 때 호출되는 함수로, onDelete 함수를 호출합니다.
return ( ... );: JSX를 반환합니다. div 요소에 "TodoItem" 클래스를 적용하고, 체크박스, Todo 내용, 생성된 날짜, 삭제 버튼을 포함한 UI를 구성합니다.
export default React.memo(TodoItem);: React.memo로 TodoItem 컴포넌트를 최적화하여 불필요한 리렌더링을 방지하고, 최종적으로 TodoItem 컴포넌트를 내보냅니다.
*/