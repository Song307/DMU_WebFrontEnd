import { useState, useRef } from "react";
import { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

// TodoEditor 컴포넌트 정의
const TodoEditor = () => {
  // TodoDispatchContext에서 onCreate 함수를 가져옴
  const { onCreate } = useContext(TodoDispatchContext);

  // content 상태와 setContent 함수를 useState 훅으로 생성
  const [content, setContent] = useState("");

  // input 요소에 대한 참조 생성
  const inputRef = useRef();

  // input 요소의 값이 변경될 때 호출되는 함수
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // Todo 항목을 추가하는 함수
  const onSubmit = () => {
    if (content === "") {
      // content가 비어있으면 input 요소에 포커스 설정 후 함수 종료
      inputRef.current.focus();
      return;
    }
    // onCreate 함수 호출하여 새로운 Todo 항목 추가
    onCreate(content);
    // content 상태 초기화
    setContent("");
  };

  // Enter 키를 눌렀을 때 onSubmit 함수 호출
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input 
          onChange={onChangeContent}  // input 요소의 값이 변경될 때 호출
          value={content}  // input 요소의 값 설정
          ref={inputRef}  // input 요소에 대한 참조 설정
          onKeyDown={onKeyDown}  // Enter 키를 눌렀을 때 호출
          placeholder="새로운 Todo..."  // placeholder 텍스트 설정
        />
        <button onClick={onSubmit}>추가</button> 
      </div>
    </div>
  );
};

export default TodoEditor;

/*
주석 설명
  import { useState, useRef } from "react";: useState와 useRef 훅을 React 라이브러리에서 임포트합니다.
  import { useContext } from "react";: useContext 훅을 React 라이브러리에서 임포트합니다.
  import { TodoDispatchContext } from "../App";: TodoDispatchContext를 ../App 파일에서 임포트합니다.
  import "./TodoEditor.css";: TodoEditor 컴포넌트에 적용할 CSS 파일을 임포트합니다.
  const TodoEditor = () => { ... };: TodoEditor라는 함수형 컴포넌트를 정의합니다.
  const { onCreate } = useContext(TodoDispatchContext);: TodoDispatchContext에서 onCreate 함수를 가져옵니다.
  const [content, setContent] = useState("");: content 상태와 setContent 함수를 useState 훅으로 생성합니다.
  const inputRef = useRef();: input 요소에 대한 참조를 생성합니다.
  const onChangeContent = (e) => { ... };: input 요소의 값이 변경될 때 호출되는 함수입니다. setContent 함수를 사용하여 content 상태를 업데이트합니다.
  const onSubmit = () => { ... };: 새로운 Todo 항목을 추가하는 함수입니다. content가 비어있으면 input 요소에 포커스를 설정하고 함수를 종료합니다. 그렇지 않으면 onCreate 함수를 호출하여 새로운 Todo 항목을 추가하고 content 상태를 초기화합니다.
  const onKeyDown = (e) => { ... };: Enter 키를 눌렀을 때 onSubmit 함수를 호출하는 함수입니다.
  return ( ... );: JSX를 반환합니다. div 요소에 "TodoEditor" 클래스를 적용하고, h4 요소와 div 요소 내에 input 요소와 button 요소를 사용하여 Todo 항목을 입력하고 추가하는 UI를 구성합니다.
*/